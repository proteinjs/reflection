import { Graph } from '@dagrejs/graphlib';
import { graphSerializer, isInstanceOf } from '@proteinjs/util';
import { SourceType } from './sourceGraphTypes';
import {
  VariableDeclaration,
  TypeAliasDeclaration,
  ClassDeclaration,
  InterfaceDeclaration,
  Class,
  Variable,
  TypeAlias,
  Interface,
  PackageScope,
} from './types';
import { FlattenedSourceGraph, flattenSourceGraph } from './FlattenedSourceGraph';
import { SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME, getSourceRepositoryFilters } from './SourceRepositoryFilter';

type TypeMap = { [qualifiedName: string]: Interface | TypeAlias | Class | Variable };

/**
 * An object resolved from the source graph, paired with the identity of the declaration it came
 * from: its `qualifiedName` (`<packageName>/<declarationName>`) and the declaring `packageName`.
 * This is the seam for consumers that need to know WHERE an object was declared — e.g. per-package
 * ownership of loaded records — rather than just the instantiated value.
 */
export type NamedObject<T> = { qualifiedName: string; packageName: string; object: T };

export class SourceRepository {
  public readonly sourceGraph = new Graph();
  private readonly sourceLinks: { [qualifiedName: string]: any } = {};
  public flattenedSourceGraph: FlattenedSourceGraph = { variables: {}, typeAliases: {}, classes: {}, interfaces: {} };
  // private readonly typeCache: { [type: string]: (ClassDeclaration|VariableDeclaration)[] } = {};
  /**
   * The resolved objects per type, filled lazily by `objects()` / `objectsWithNames()` and DROPPED WHOLE by every
   * `merge()`. A merge can carry a `SourceRepositoryFilter` (which changes every type's answer), children of any
   * cached type at any depth, or a source link for a name already resolved, so the entries one merge can affect
   * are "any of them" — and merges happen only while the packages' generated indexes load, so the refill is paid
   * once per package at startup, lazily, by the next read. Before this, an entry filled by a read made before the
   * graph was whole (a module-scope registry read, a class field initializer, a declaration constructed by the
   * `objects()` walk itself) stood for the rest of the process: the filter list cached `[]` before a test door
   * merged its filter ran every later lookup unfiltered, and the spanner sample's `test` database won the default
   * driver in every server suite (thought verify 39186875346, skills verify 39216898674).
   */
  private objectCache: { [type: string]: any[] } = {};
  private namedObjectCache: { [type: string]: NamedObject<any>[] } = {};
  /**
   * The stack of the first filter-list read not yet followed by a merge: recorded when `objectsWithNames` fills
   * the filter list's entry, reported by the next `merge()` — a read made before the graph was whole was answered
   * without what the later merge carries, and the reader cannot tell, so the seam is said aloud with the reader's
   * stack. Once per repository, never a throw: the house has module-scope readers today, and a throw at load
   * would take the process down where a warning lets it heal (the caches are dropped at that merge).
   */
  private prematureFilterReadStack: string | undefined;
  private prematureFilterReadWarned = false;

  /**
   * The global object (realm) this repository was created for. `get()` anchors the singleton on
   * the global object so that MULTIPLE module copies of this package in one realm share one
   * repository — but some hosts (jest's per-test-file sandboxes) lazily copy the outer process's
   * global properties into each sandbox's global, which would hand a sandbox another realm's
   * repository. A foreign repository is poison: the Table/Loadable objects it caches were
   * constructed in the other realm, so their closures read that realm's module state and global
   * flags (e.g. a dead test file's restored authz toggle — the 2026-08 permissionSource flaky
   * class). Stamping the creating realm lets `get()` detect a leaked foreign instance and mint a
   * realm-local one instead, preserving copy-unification within a realm.
   *
   * An UNSTAMPED instance is a different case: only a copy of this package that predates the
   * stamp mints one, and that copy may already have populated the repository (every package's
   * generated index merges its source graph into whichever copy it resolved first). So an
   * unstamped instance is ADOPTED — stamped for this realm and reused — never replaced; replacing
   * it would drop every registration the older copy made ("Unable to find type" across the board
   * when mixed package versions share a process, e.g. a dev workspace symlinking a newer copy
   * next to merged older ones). Only a stamp that names ANOTHER realm's global proves the
   * instance is foreign and triggers the realm-local mint.
   */
  private realmGlobal: unknown;

  private constructor() {}

  static get(): SourceRepository {
    const globalObject = SourceRepository.getGlobal();
    const existing: SourceRepository | undefined = globalObject.__proteinjs_reflection_SourceRepository;
    if (!existing || (existing.realmGlobal !== undefined && existing.realmGlobal !== globalObject)) {
      const repository = new SourceRepository();
      repository.realmGlobal = globalObject;
      globalObject.__proteinjs_reflection_SourceRepository = repository;
    } else if (existing.realmGlobal === undefined) {
      // Adopt a pre-stamp copy's instance: same realm, registrations intact.
      existing.realmGlobal = globalObject;
    }

    return globalObject.__proteinjs_reflection_SourceRepository;
  }

  private static getGlobal(): any {
    if (typeof window !== 'undefined') {
      return window;
    }

    return globalThis;
  }

  interface(qualifiedInterfaceName: string) {
    return this.flattenedSourceGraph.interfaces[qualifiedInterfaceName];
  }

  interfaceExtends(_interface: Interface, type: string) {
    return typeof _interface.allParents[type] !== 'undefined';
  }

  /**
   * Same as SourceRepository.objects except assumes it will find only 1 object.
   *
   * @param extendingType a Type or Interface that the Class or Variable extends
   * @return variable or instantiated class that extends `extendingType`
   */
  object<T>(extendingType: string): T {
    return this.objects<T>(extendingType)[0];
  }

  /**
   * @param extendingType a Type, Interface, or Class that the Class or Variable extends
   * @return variables and instantiated classes that extend `extendingType`
   */
  objects<T>(extendingType: string): T[] {
    if (this.objectCache[extendingType]) {
      return this.objectCache[extendingType];
    }

    const extendingObjects = this.objectsWithNames<T>(extendingType).map((namedObject) => namedObject.object);
    this.objectCache[extendingType] = extendingObjects;
    return extendingObjects;
  }

  /**
   * Same as {@link SourceRepository.objects}, but each object is paired with the identity of the
   * declaration that produced it (qualified name + declaring package). Use this when the consumer
   * needs declaration provenance — e.g. to attribute loaded objects to the package that owns them.
   *
   * @param extendingType a Type, Interface, or Class that the Class or Variable extends
   * @return variables and instantiated classes that extend `extendingType`, each with its
   *   declaration's `qualifiedName` and `packageName`
   */
  objectsWithNames<T>(extendingType: string): NamedObject<T>[] {
    if (this.namedObjectCache[extendingType]) {
      return this.namedObjectCache[extendingType];
    }

    const baseChildren = this.baseChildren(extendingType);
    const namedObjects: NamedObject<T>[] = [];
    for (const baseChildQualifiedName in baseChildren) {
      const child = baseChildren[baseChildQualifiedName];
      if (isInstanceOf(child, Class)) {
        // An abstract class is never instantiable — TypeScript erases `abstract` at runtime, so
        // `new` would "succeed" and hand back a half-initialized object. An abstract class shows
        // up here as a baseChild whenever no concrete subclass exists in the composition (e.g. an
        // abstract loader whose concrete declarations live in other packages); its instances are
        // its concrete subclasses' instances, which register as their own baseChildren.
        if ((child as Class).isAbstract) {
          continue;
        }

        namedObjects.push({
          qualifiedName: baseChildQualifiedName,
          packageName: (child as Class).packageName,
          object: new (child as any)._constructor(),
        });
      } else if (isInstanceOf(child, Variable)) {
        namedObjects.push({
          qualifiedName: baseChildQualifiedName,
          packageName: (child as Variable).packageName,
          object: (child as any).value,
        });
      }
    }

    this.namedObjectCache[extendingType] = namedObjects;
    if (
      extendingType === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME &&
      !this.prematureFilterReadWarned &&
      this.prematureFilterReadStack === undefined
    ) {
      this.prematureFilterReadStack = new Error().stack || '(no stack available)';
    }

    return namedObjects;
  }

  /**
   * @param extendingType a Type, Interface, or Class that the Class or Variable extends
   * @returns a hashmap (key is qualified name) of base child types (vs the instantiated objects provided by the objects method) that extend `extendingType`
   */
  baseChildren(extendingType: string): TypeMap {
    const _interface = SourceRepository.get().flattenedSourceGraph.interfaces[extendingType];
    const typeAlias = SourceRepository.get().flattenedSourceGraph.typeAliases[extendingType];
    const _class = SourceRepository.get().flattenedSourceGraph.classes[extendingType];
    let baseChildren: TypeMap;
    if (_interface) {
      baseChildren = _interface.baseChildren;
    } else if (typeAlias) {
      baseChildren = typeAlias.baseChildren;
    } else if (_class) {
      baseChildren = _class.baseChildren;
    } else {
      throw new Error(`Unable to find type: ${extendingType}`);
    }

    if (extendingType === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME) {
      return baseChildren;
    }

    return this.filterObjects(baseChildren);
  }

  /**
   * @param extendingType a Type, Interface, or Class that the Class or Variable extends
   * @returns a hashmap (key is qualified name) of direct child types (vs the instantiated objects provided by the objects method) that extend `extendingType`
   */
  directChildren(extendingType: string): TypeMap {
    const _interface = SourceRepository.get().flattenedSourceGraph.interfaces[extendingType];
    const typeAlias = SourceRepository.get().flattenedSourceGraph.typeAliases[extendingType];
    const _class = SourceRepository.get().flattenedSourceGraph.classes[extendingType];
    let directChildren: any;
    if (_interface) {
      directChildren = _interface.directChildren;
    } else if (typeAlias) {
      directChildren = typeAlias.directChildren;
    } else if (_class) {
      directChildren = _class.directChildren;
    } else {
      throw new Error(`Unable to find type: ${extendingType}`);
    }

    if (extendingType === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME) {
      return directChildren;
    }

    return this.filterObjects(directChildren);
  }

  private filterObjects(typeMap: TypeMap): TypeMap {
    const filteredTypeMap: TypeMap = {};
    const filters = getSourceRepositoryFilters();
    for (const qualifiedName of Object.keys(typeMap)) {
      const packageScope = typeMap[qualifiedName];
      let filtered = true;
      for (const filter of filters) {
        if (!filter.filterObject(qualifiedName)) {
          filtered = false;
          break;
        }
      }

      if (filtered) {
        filteredTypeMap[qualifiedName] = packageScope;
      }
    }

    return filteredTypeMap;
  }

  static merge(serializedSourceGraph: string, sourceLinks: { [qualifiedName: string]: any }) {
    const unescapedSerializedSourceGraph = serializedSourceGraph.replace(/\\'/g, "'");
    const sourceGraph = graphSerializer.deserialize(unescapedSerializedSourceGraph);
    for (const nodeName of sourceGraph.nodes()) {
      const nodeValue = sourceGraph.node(nodeName);
      if (!nodeValue) {
        continue;
      }

      SourceRepository.get().sourceGraph.setNode(nodeName, SourceRepository.deserializeClass(nodeValue));
    }

    for (const edge of sourceGraph.edges()) {
      const edgeValue = sourceGraph.edge(edge);
      SourceRepository.get().sourceGraph.setEdge(edge, edgeValue);
    }

    Object.assign(SourceRepository.get().sourceLinks, sourceLinks);
    SourceRepository.get().flattenedSourceGraph = flattenSourceGraph(
      SourceRepository.get().sourceGraph,
      SourceRepository.get().sourceLinks
    );
    SourceRepository.get().graphMerged(sourceLinks);
  }

  private static deserializeClass(classJson: any): any {
    if (classJson.sourceType === SourceType.variable) {
      return VariableDeclaration.deserialize(classJson);
    } else if (classJson.sourceType === SourceType.typeAlias) {
      return TypeAliasDeclaration.deserialize(classJson);
    } else if (classJson.sourceType === SourceType.class) {
      return ClassDeclaration.deserialize(classJson);
    } else if (classJson.sourceType === SourceType.interface) {
      return InterfaceDeclaration.deserialize(classJson);
    }

    return classJson;
  }

  /**
   * After a graph merged: every resolved object is dropped (the next read re-resolves over the whole graph), and a
   * filter-list read that preceded this merge is said aloud once — it was answered before the graph was whole. The
   * merging package is named from the merged source links (a generated index links its own declarations only).
   */
  private graphMerged(sourceLinks: { [qualifiedName: string]: any }) {
    this.objectCache = {};
    this.namedObjectCache = {};
    if (this.prematureFilterReadStack === undefined || this.prematureFilterReadWarned) {
      return;
    }

    this.prematureFilterReadWarned = true;
    const packageNames: string[] = [];
    for (const qualifiedName of Object.keys(sourceLinks)) {
      const node = this.sourceGraph.node(qualifiedName);
      const packageName: string | undefined = node && node.packageName;
      if (packageName && packageNames.indexOf(packageName) < 0) {
        packageNames.push(packageName);
      }
    }

    const mergedPackages = packageNames.length > 0 ? packageNames.join(', ') : '(a graph with no source links)';
    console.warn(
      `[@proteinjs/reflection] ${SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME} was read before the source graph was whole: the graph of ${mergedPackages} merged after the read. Every registry answer given before this merge was resolved without what it carries (its filters among them); the resolved objects are dropped now, so the next read is whole — but a reader that acted on an early answer acted on a stale one. Read the registry at use (a getter, or inside the method that needs it), never at module scope, in a class field initializer or in a declaration's constructor. The read's stack:\n${this.prematureFilterReadStack}`
    );
  }

  // objects<T>(type: string): T[] {
  // 	if (!this.objectCache[type]) {
  // 		this.objectCache[type] = this.types(type).map((type) => {
  // 			if (type instanceof VariableDeclaration)
  // 				return type.value;

  // 			if (type instanceof ClassDeclaration)
  // 				return new type._constructor();

  // 			return null;
  // 		});
  // 	}

  // 	return this.objectCache[type];
  // }

  // types(parentType: string): (ClassDeclaration|VariableDeclaration)[] {
  // 	if (!this.typeCache[parentType]) {
  // 		const node = this.sourceGraph.node(parentType);
  // 		if (!node)
  // 			throw new Error(`Failed to find types, reason: parent type does not exist: ${parentType}`);

  // 		const collectedTypes: (ClassDeclaration|VariableDeclaration)[] = [];
  // 		this.collectTypes(parentType, collectedTypes);
  // 		this.typeCache[parentType] = collectedTypes;
  // 	}

  // 	return this.typeCache[parentType];
  // }

  // private collectTypes(type: string, collectedTypes: (ClassDeclaration|VariableDeclaration)[]): void {
  // 	const childTypes = this.sourceGraph.successors(type);
  // 	if (!childTypes)
  // 		return;

  // 	for (const childType of childTypes) {
  // 		const childNode = this.sourceGraph.node(childType);
  // 		if (!childNode)
  // 			continue;

  // 		const sourceLink = this.sourceLinks[childNode.qualifiedName];
  // 		if (childNode instanceof VariableDeclaration) {
  // 			childNode.value = sourceLink;
  // 			collectedTypes.push(childNode);
  // 		} else if (childNode instanceof ClassDeclaration && !childNode.isAbstract) {
  // 			childNode._constructor = sourceLink;
  // 			collectedTypes.push(childNode);
  // 		}

  // 		this.collectTypes(childType, collectedTypes);
  // 	}
  // }
}
