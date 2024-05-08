import '@proteinjs/reflection-build-test-a';
import { SourceRepository } from '@proteinjs/reflection';

beforeAll(async () => {
	SourceRepository.get();
});

test('filter foreign type', async () => {
	const sourceRepository = SourceRepository.get();
  expect(() => sourceRepository.baseChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignType')).toThrow();
  expect(() => sourceRepository.directChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignType')).toThrow();
});

test('filter foreign interface', async () => {
	const sourceRepository = SourceRepository.get();
  expect(() => sourceRepository.baseChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignInterface')).toThrow();
  expect(() => sourceRepository.directChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignInterface')).toThrow();
});

test('filter foreign abstract class', async () => {
	const sourceRepository = SourceRepository.get();
  expect(() => sourceRepository.baseChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignAbstractClass')).toThrow();
  expect(() => sourceRepository.directChildren('@proteinjs/reflection-build-test-b/OptionalLoadableForeignAbstractClass')).toThrow();
});