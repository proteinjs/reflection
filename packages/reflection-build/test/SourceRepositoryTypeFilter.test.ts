import '@proteinjs/reflection-build-test-a';
import { SourceRepository } from '@proteinjs/reflection';

beforeAll(async () => {
	SourceRepository.get();
});

test('filter foreign type', async () => {
	const sourceRepository = SourceRepository.get();
	const extendsLoadableForeignInterface = sourceRepository.flattenedSourceGraph.typeAliases['@proteinjs/reflection-build-test-b/OptionalLoadableForeignType'];
	expect(extendsLoadableForeignInterface).toBeFalsy();
});

test('filter foreign interface', async () => {
	const sourceRepository = SourceRepository.get();
	const extendsLoadableForeignInterface = sourceRepository.flattenedSourceGraph.interfaces['@proteinjs/reflection-build-test-b/OptionalLoadableForeignInterface'];
	expect(extendsLoadableForeignInterface).toBeFalsy();
});

test('filter foreign abstract class', async () => {
	const sourceRepository = SourceRepository.get();
	const extendsLoadableForeignInterface = sourceRepository.flattenedSourceGraph.classes['@proteinjs/reflection-build-test-b/OptionalLoadableForeignAbstractClass'];
	expect(extendsLoadableForeignInterface).toBeFalsy();
});