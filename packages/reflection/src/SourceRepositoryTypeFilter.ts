import { Loadable } from './Loadable';
import { SourceRepository } from './SourceRepository';

export const SOURCE_REPOSITORY_TYPE_FILTER_QUALIFIED_NAME = '@proteinjs/reflection/SourceRepositoryTypeFilter';
export const getSourceRepositoryTypeFilters = () => SourceRepository.get().objects<SourceRepositoryTypeFilter>(SOURCE_REPOSITORY_TYPE_FILTER_QUALIFIED_NAME);

export interface SourceRepositoryTypeFilter extends Loadable {
  filterType(packageQualifiedTypeName: string): boolean;
}