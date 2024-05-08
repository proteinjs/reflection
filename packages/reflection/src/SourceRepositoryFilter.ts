import { Loadable } from './Loadable';
import { SourceRepository } from './SourceRepository';

export const SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME = '@proteinjs/reflection/SourceRepositoryFilter';
export const getSourceRepositoryFilters = () => SourceRepository.get().objects<SourceRepositoryFilter>(SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME);

export interface SourceRepositoryFilter extends Loadable {
  /**
   * Filter objects that would be returned by `SourceRepository.object` and `SourceRepository.objects`
   * @param qualifiedName the package-qualified name of the object to be filtered (ie. `@dependency/package/ClassName`)
   * @return true if the object should be returned by the `SourceRepository`
   */
  filterObject(qualifiedName: string): boolean;
}