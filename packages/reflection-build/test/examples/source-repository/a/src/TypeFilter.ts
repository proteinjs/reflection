import { SourceRepositoryFilter } from '@proteinjs/reflection';

export class TypeFilter implements SourceRepositoryFilter {
  private blocklist: string[] = [
    '@proteinjs/reflection-build-test-b/implementsOptionalLoadableForeignType',
    '@proteinjs/reflection-build-test-b/ImplementsOptionalLoadableForeignInterface',
    '@proteinjs/reflection-build-test-b/ImplementsOptionalLoadableForeignAbstractClass',
  ];

  filterObject(qualifiedName: string): boolean {
    return !this.blocklist.includes(qualifiedName);
  }
}