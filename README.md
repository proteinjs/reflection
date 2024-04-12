# Overview

Reflection is an API for querying the source in your runtime, with module loading. Instead of defining APIs and also needing to expose functions for registering implementations of those APIs, you can use the SourceRepositoy to query for API implementations at runtime. This can result in much cleaner dependency management across packages.

# How to use

1. Install @proteinjs/reflection as a package dependency, and @proteinjs/reflection-build as a dev dependency
2. Prepend your package build script with `reflection-build`, ie. `reflection-build && tsc`
3. When you build your package, ./generated/index.ts will be generated, and the package.json will be updated to point main at dist/generated/index.js
4. You can now do the following in your package
  ```
  // Cat.ts
  import { Loadable } from '@proteinjs/reflection'

  export const getCats = () => SourceRepository.get().objects<Cat>('your-package-name/Cat');

  export interface Cat extends Loadable {
    getName(): string;
  }
  ```
  ```
  // BrownCat.ts
  import { Cat } from './Cat'

  export class BrownCat implements Cat {
    getName() {
      return this.constructor.name;
    }
  }
  ```
   ```
  // OrangeCat.ts
  import { Cat } from './Cat'

  export class OrangeCat implements Cat {
    getName() {
      return this.constructor.name;
    }
  }
  ```
  ```
  // testLoading.ts
  import { getCats } from './Cat'

  const cats = getCats();
  cats[0].getName() // BrownCat
  cats[1].getName() // OrangeCat
  ```
5. You can also export Cat from your package, and any consuming packages that implement the Cat interface and are loaded in the same runtime as your package will be accessible in this way by your package via the SourceRepository api. 

An example use case for this is exposing a Route interface from your server, and then loading all routes included in your build from your server using SourceRepositoy. Instead of your server package needing to depend on every package where a route is defined, as long as the package implementing a Route is included in the build, your server will have access to it.