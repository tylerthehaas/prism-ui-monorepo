# Prism UI

A collection of UI elements for OC Tanner apps.

## Installing from Github Registry

This is going to get worse before it gets better.

Follow [these instructions](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry)

Then,

```bash
npm login --registry=https://npm.pkg.github.com --scope=@octanner
npm install @octanner/prism-ui
```

## Documentation

Please see our [documentation](https://octanner.design) for usage details.

## Build

```bash
# install dependencies
npm install
```

#### Dev

```bash
npm start
```

for a static build on port 9000, or

```bash
npm run storybook
```

for development/hot reloading

#### Production Build

```bash
npm run build
```

This will create a production build of the project to `static-storybook/`.

#### Release New Library Version

Increment the version number in [package.json](package.json).

Merge to `master` and [create a new release](https://github.com/octanner/prism-ui/releases/new) in GitHub that matches the version number.

Promote the site to prod in [Akkeris](https://akkeris.octanner.io/pipelines/13cf7599-59de-4149-b554-1afe079df688).

Build the library with

```bash
npm run build
```

This will create a production build of just the components and the css for redistribution in `dist/`

Publish the full library to Github with

```bash
npm publish prism-ui.tar.gz
```

#### React Usage

First, pull in the css library with `import 'prismui/main.css'`, then import specific components from the package, e.g. `import { Avatar, Button } from '@octanner/prismui'`

#### Legacy

For the time being, documentation for Prism-UI versions <3.0.0 is being hosted at octanner.design/legacy
