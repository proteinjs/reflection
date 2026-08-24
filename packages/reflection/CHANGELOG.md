# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.14...@proteinjs/reflection@1.2.0) (2026-08-24)


### Bug Fixes

* adopt an unstamped SourceRepository instead of replacing it ([27fa44f](https://github.com/proteinjs/reflection/commit/27fa44f46a6f53a3676bb9a04154df0cf72ef0fa))


### Features

* objectsWithNames — resolved objects paired with their declaration identity ([78a8589](https://github.com/proteinjs/reflection/commit/78a85894ccf43d4a6deb6c71f113125ccdf9a856))





## [1.1.14](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.13...@proteinjs/reflection@1.1.14) (2026-08-22)


### Bug Fixes

* never instantiate abstract classes from objects(); stamp class-level isAbstract in the parser ([b971030](https://github.com/proteinjs/reflection/commit/b971030f42b8660cc2f0688848ecfe8599ca1dcf))
* realm-scoped SourceRepository singleton ([95206a4](https://github.com/proteinjs/reflection/commit/95206a44ac7b417840e72f80817859e1496f323e))





## [1.1.13](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.12...@proteinjs/reflection@1.1.13) (2026-08-13)

**Note:** Version bump only for package @proteinjs/reflection





## [1.1.3](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.2...@proteinjs/reflection@1.1.3) (2024-05-10)


### Bug Fixes

* add .md file type to lint ignore files ([d7bdf6b](https://github.com/proteinjs/reflection/commit/d7bdf6baa50f93781e71abac3c2732e87cb21999))





## [1.1.2](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.1...@proteinjs/reflection@1.1.2) (2024-05-10)


### Bug Fixes

* add linter and lint files ([5d39eef](https://github.com/proteinjs/reflection/commit/5d39eef78a5a1d8ab24b188d23ff9220b595e885))





## [1.1.1](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.1.0...@proteinjs/reflection@1.1.1) (2024-05-08)

### Bug Fixes

- `SourceRepository.filterObjects` should omit objects for which any filter returns `false`, not `true`; this is inline with general filter semantics ([5f2f4c1](https://github.com/proteinjs/reflection/commit/5f2f4c133f47e447d08bc061f2b7177a767e977b))

# [1.1.0](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.7...@proteinjs/reflection@1.1.0) (2024-05-08)

### Features

- added `SourceRepositoryTypeFilter` to optionally filter out `Loadable`s from dependencies ([6cc0cda](https://github.com/proteinjs/reflection/commit/6cc0cdada9bb5e0d8fe8281582722bfb8aa7de64))

## [1.0.6](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.5...@proteinjs/reflection@1.0.6) (2024-04-23)

### Bug Fixes

- continue to fix to work for a runtime with multiple [dependency] copies of reflection ([6fea790](https://github.com/proteinjs/reflection/commit/6fea79006a60bd2719272cd061e373d3cdba1c49))

## [1.0.3](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.2...@proteinjs/reflection@1.0.3) (2024-04-21)

### Bug Fixes

- `SourceRepository` to store singleton in global memory so its truly a singleton even if multiple copies of @proteinjs/reflection exist at runtime ([36b5d09](https://github.com/proteinjs/reflection/commit/36b5d09139d337550f68f694d10b94cfd3c8b317))

## [1.0.2](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection@1.0.1...@proteinjs/reflection@1.0.2) (2024-04-12)

**Note:** Version bump only for package @proteinjs/reflection

## 1.0.1 (2024-04-12)

**Note:** Version bump only for package @proteinjs/reflection
