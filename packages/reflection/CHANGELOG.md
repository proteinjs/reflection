# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.0...@proteinjs/reflection@1.1.1) (2024-05-08)


### Bug Fixes

* `SourceRepository.filterObjects` should omit objects for which any filter returns `false`, not `true`; this is inline with general filter semantics ([5f2f4c1](https://github.com/proteinjs/reflection/commit/5f2f4c133f47e447d08bc061f2b7177a767e977b))





# [1.1.0](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.7...@proteinjs/reflection@1.1.0) (2024-05-08)


### Features

* added `SourceRepositoryTypeFilter` to optionally filter out `Loadable`s from dependencies ([6cc0cda](https://github.com/proteinjs/reflection/commit/6cc0cdada9bb5e0d8fe8281582722bfb8aa7de64))





## [1.0.6](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.5...@proteinjs/reflection@1.0.6) (2024-04-23)


### Bug Fixes

* continue to fix to work for a runtime with multiple [dependency] copies of reflection ([6fea790](https://github.com/proteinjs/reflection/commit/6fea79006a60bd2719272cd061e373d3cdba1c49))





## [1.0.3](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.2...@proteinjs/reflection@1.0.3) (2024-04-21)


### Bug Fixes

* `SourceRepository` to store singleton in global memory so its truly a singleton even if multiple copies of @proteinjs/reflection exist at runtime ([36b5d09](https://github.com/proteinjs/reflection/commit/36b5d09139d337550f68f694d10b94cfd3c8b317))





## [1.0.2](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.1...@proteinjs/reflection@1.0.2) (2024-04-12)

**Note:** Version bump only for package @proteinjs/reflection





## 1.0.1 (2024-04-12)

**Note:** Version bump only for package @proteinjs/reflection
