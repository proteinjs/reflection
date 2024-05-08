import { SourceRepositoryTypeFilter } from '@proteinjs/reflection';

export class TypeFilter implements SourceRepositoryTypeFilter {
  private filteredTypes: string[] = [
    '@proteinjs/reflection-build-test-b/OptionalLoadableForeignType',
    '@proteinjs/reflection-build-test-b/OptionalLoadableForeignInterface',
    '@proteinjs/reflection-build-test-b/OptionalLoadableForeignAbstractClass',
  ];

  filterType(packageQualifiedTypeName: string): boolean {
    return this.filteredTypes.includes(packageQualifiedTypeName);
  }
}