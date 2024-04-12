# Overview

Reflection is an api for querying the [typescript] source in your runtime, with module loading. Instead of defining apis and also needing to expose functions for registering implementations of those apis, you can use the `SourceRepositoy` to query for api implementations at runtime. This can result in much cleaner dependency management across packages.

An example use case for this is exposing a `Route` interface from your server, and then loading all routes included in your build from your server using the `SourceRepositoy` api. Instead of your server package needing to depend on every package where a route is defined (or having a complicated build process for loading routes into static memory), as long as the package with classes implementing `Route` is included in the build, your server will have access to query and instantiate those routes using the `SourceRepository` api.

# Production example

See the Protein Js implementation of a [Service](https://github.com/proteinjs/service/blob/main/packages/service/src/Service.ts).

# How to use

1. Install `@proteinjs/reflection` as a package dependency, and `@proteinjs/reflection-build` as a dev dependency
2. Prepend your package build script with `reflection-build`, ie. `reflection-build && tsc`
3. When you build your package, `./generated/index.ts` will be generated, and the package.json will be updated to point main at `dist/generated/index.js`
4. You can now do the following in your project
  ## Package: @your-org/server-api
  ```
  // Route.ts
  import { Loadable, SourceRepository } from '@proteinjs/reflection'

  export const getRoutes = () => SourceRepository.get().objects<Route>('@your-org/server-api/Route');

  // Extending Loadable causes @proteinjs/reflection-build to load
  // this type hierarchy into the SourceRepository at build time
  export interface Route extends Loadable {
    path: string;
    method: string;
    run(args: any[]): Promise<any>;
  }
  ```
  ## Package: @your-org/auth
  ```
  // Login.ts
  import { Route } from '@your-org/server-api'

  export class Login implements Route {
    path = '/login';
    method = 'post';
    async run(args: any[]) { ... }
  }
  ```
  ```
  // Logout.ts
  import { Route } from '@your-org/server-api'

  export class Logout implements Route {
    path = '/logout';
    method = 'get';
    async run(args: any[]) { ... }
  }
  ```
  ## Package: @your-org/server
  ```
  // loadRoutes.ts
  import { getRoutes } from '@your-org/server-api'

  // There is no order guarantee
  const routes = getRoutes();
  routes[0].path // /login
  routes[1].path // /logout
  ```