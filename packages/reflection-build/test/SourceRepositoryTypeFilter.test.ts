import '@proteinjs/reflection-build-test-a';
import { SourceRepository } from '@proteinjs/reflection';

beforeAll(async () => {
  SourceRepository.get();
});

test('filter foreign type', async () => {
  const sourceRepository = SourceRepository.get();
  expect(sourceRepository.objects('@proteinjs/reflection-build-test-b/OptionalLoadableForeignType')).toHaveLength(0);
});

test('filter foreign interface', async () => {
  const sourceRepository = SourceRepository.get();
  expect(sourceRepository.objects('@proteinjs/reflection-build-test-b/OptionalLoadableForeignInterface')).toHaveLength(
    0
  );
});

test('filter foreign abstract class', async () => {
  const sourceRepository = SourceRepository.get();
  expect(
    sourceRepository.objects('@proteinjs/reflection-build-test-b/OptionalLoadableForeignAbstractClass')
  ).toHaveLength(0);
});
