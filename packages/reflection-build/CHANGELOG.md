# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.1.1...@proteinjs/reflection-build@1.2.0) (2025-06-03)


### Features

* Support `SKIP_REFLECTION_LOAD` env var to skip loading source graphs for a comma-separated list of package names. ([16fdd28](https://github.com/proteinjs/reflection/commit/16fdd288c1ff3bd979595dafcab9d7c2d803d1b1))





## [1.1.1](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.1.0...@proteinjs/reflection-build@1.1.1) (2025-05-22)


### Bug Fixes

* `writeGeneratedIndex` should respect `exports` in dependency package.jsons when generating an import statement. ([8046dc4](https://github.com/proteinjs/reflection/commit/8046dc47eec4394decb7b78cfe2d78f1c0f9fd42))





# [1.1.0](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.25...@proteinjs/reflection-build@1.1.0) (2025-04-21)


### Features

* `watch` now just calls the npm `build` script for the package instead of hardcoding `reflection-build && tsc`. ([e781fac](https://github.com/proteinjs/reflection/commit/e781facf8d3e010c4decd44659f12e971da7c96c))





## [1.0.18](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.17...@proteinjs/reflection-build@1.0.18) (2024-05-10)


### Bug Fixes

* add .md file type to lint ignore files ([d7bdf6b](https://github.com/proteinjs/reflection/commit/d7bdf6baa50f93781e71abac3c2732e87cb21999))





## [1.0.17](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.16...@proteinjs/reflection-build@1.0.17) (2024-05-10)


### Bug Fixes

* add linter and lint files ([5d39eef](https://github.com/proteinjs/reflection/commit/5d39eef78a5a1d8ab24b188d23ff9220b595e885))





## [1.0.16](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.15...@proteinjs/reflection-build@1.0.16) (2024-05-09)

### Bug Fixes

- only write new package json file when fields are missing ([#1](https://github.com/proteinjs/reflection/issues/1)) ([038a3ef](https://github.com/proteinjs/reflection/commit/038a3ef7c764770c781de00d30ed74b7f610408e))

## [1.0.15](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.14...@proteinjs/reflection-build@1.0.15) (2024-05-08)

### Bug Fixes

- `SourceRepository.filterObjects` should omit objects for which any filter returns `false`, not `true`; this is inline with general filter semantics ([5f2f4c1](https://github.com/proteinjs/reflection/commit/5f2f4c133f47e447d08bc061f2b7177a767e977b))

## [1.0.14](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.13...@proteinjs/reflection-build@1.0.14) (2024-05-08)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.12](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.11...@proteinjs/reflection-build@1.0.12) (2024-04-27)

### Bug Fixes

- `runWatch` now requires gulp with `require.resolve`. when reflection-build is published, its node_modules are not included. therefore reflection-build (`runWatch` in this case) can't require with a relative path into its own node_modules/ ([f536405](https://github.com/proteinjs/reflection/commit/f53640589efcbb0c85643c357606cc0f989771af))

## [1.0.10](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.8...@proteinjs/reflection-build@1.0.10) (2024-04-23)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.7](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.6...@proteinjs/reflection-build@1.0.7) (2024-04-21)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.6](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.5...@proteinjs/reflection-build@1.0.6) (2024-04-19)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.5](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.4...@proteinjs/reflection-build@1.0.5) (2024-04-17)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.4](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.3...@proteinjs/reflection-build@1.0.4) (2024-04-17)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.3](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.2...@proteinjs/reflection-build@1.0.3) (2024-04-17)

**Note:** Version bump only for package @proteinjs/reflection-build

## [1.0.2](https://github.com/proteinjs/reflection/compare/@proteinjs/reflection-build@1.0.1...@proteinjs/reflection-build@1.0.2) (2024-04-17)

**Note:** Version bump only for package @proteinjs/reflection-build

## 1.0.1 (2024-04-12)

**Note:** Version bump only for package @proteinjs/reflection-build
