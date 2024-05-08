import { Graph } from '@dagrejs/graphlib';
import { graphSerializer, isInstanceOf } from '@proteinjs/util';
import { SourceType } from './sourceGraphTypes';
import { VariableDeclaration, TypeAliasDeclaration, ClassDeclaration, InterfaceDeclaration, Class, Variable, TypeAlias, Interface, PackageScope } from './types';
import { FlattenedSourceGraph, flattenSourceGraph } from './FlattenedSourceGraph';
import { SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME, getSourceRepositoryFilters } from './SourceRepositoryFilter';

type TypeMap = {[qualifiedName: string]: Interface|TypeAlias|Class|Variable}

export class SourceRepository {
	public readonly sourceGraph = new Graph();
	private readonly sourceLinks: { [qualifiedName: string]: any } = {};
	public flattenedSourceGraph: FlattenedSourceGraph = { variables: {}, typeAliases: {}, classes: {}, interfaces: {} };
	// private readonly typeCache: { [type: string]: (ClassDeclaration|VariableDeclaration)[] } = {};
	private readonly objectCache: { [type: string]: any[] } = {};

	private constructor() {}

	static get(): SourceRepository {
		if (!SourceRepository.getGlobal().__proteinjs_reflection_SourceRepository)
      SourceRepository.getGlobal().__proteinjs_reflection_SourceRepository = new SourceRepository();

    return SourceRepository.getGlobal().__proteinjs_reflection_SourceRepository;
	}

	private static getGlobal(): any {
		if (typeof window !== 'undefined')
			return window;

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
		if (this.objectCache[extendingType])
			return this.objectCache[extendingType];

		const baseChildren = this.baseChildren(extendingType);
		const extendingObjects: T[] = [];
		for (const baseChildQualifiedName in baseChildren) {
			const child = baseChildren[baseChildQualifiedName];
			if (isInstanceOf(child, Class))
				extendingObjects.push(new (child as any)._constructor());
			else if (isInstanceOf(child, Variable))
				extendingObjects.push((child as any).value);
		}

		this.objectCache[extendingType] = extendingObjects;
		return extendingObjects;
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
		if (_interface)
			baseChildren = _interface.baseChildren;
		else if (typeAlias) {
			baseChildren = typeAlias.baseChildren;
		} else if (_class) {
			baseChildren = _class.baseChildren;
		} else {
			throw new Error(`Unable to find type: ${extendingType}`);
		}

		if (extendingType === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME)
			return baseChildren;

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
		if (_interface)
			directChildren = _interface.directChildren;
		else if (typeAlias) {
			directChildren = typeAlias.directChildren;
		} else if (_class) {
			directChildren = _class.directChildren;
		} else {
			throw new Error(`Unable to find type: ${extendingType}`);
		}

		if (extendingType === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME)
			return directChildren;

		return this.filterObjects(directChildren);
	}

	private filterObjects(typeMap: TypeMap): TypeMap {
		const filteredTypeMap: TypeMap = {};
		const filters = getSourceRepositoryFilters();
		for (let qualifiedName of Object.keys(typeMap)) {
			const packageScope = typeMap[qualifiedName];
			let filtered = true;
			for (let filter of filters) {
				if (!filter.filterObject(qualifiedName)) {
					filtered = false;
					break;
				}
			}

			if (filtered)
				filteredTypeMap[qualifiedName] = packageScope;
		}

		return filteredTypeMap;
	}

	static merge(serializedSourceGraph: string, sourceLinks: { [qualifiedName: string]: any }) {
		const unescapedSerializedSourceGraph = serializedSourceGraph.replace(/\\\'/g, "'");
		const sourceGraph = graphSerializer.deserialize(unescapedSerializedSourceGraph);
		for (const nodeName of sourceGraph.nodes()) {
			const nodeValue = sourceGraph.node(nodeName);
			if (!nodeValue)
				continue;

			SourceRepository.get().sourceGraph.setNode(nodeName, SourceRepository.deserializeClass(nodeValue));
		}

		for (const edge of sourceGraph.edges()) {
			const edgeValue = sourceGraph.edge(edge);
			SourceRepository.get().sourceGraph.setEdge(edge, edgeValue);
		}

		Object.assign(SourceRepository.get().sourceLinks, sourceLinks);
		SourceRepository.get().flattenedSourceGraph = flattenSourceGraph(SourceRepository.get().sourceGraph, SourceRepository.get().sourceLinks);
	}

	private static deserializeClass(classJson: any): any {
		if (classJson.sourceType === SourceType.variable)
			return VariableDeclaration.deserialize(classJson);
		else if (classJson.sourceType === SourceType.typeAlias)
			return TypeAliasDeclaration.deserialize(classJson);
		else if (classJson.sourceType === SourceType.class)
			return ClassDeclaration.deserialize(classJson);
		else if (classJson.sourceType === SourceType.interface)
			return InterfaceDeclaration.deserialize(classJson);

		return classJson;
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