# Prism UI

A collection of UI elements for OC Tanner apps.

## Usage

Please see our [documentation](https://prism-jam-qa.alamoapp.octanner.io/) for usage details.

## Build

```bash
# install dependencies
npm install
```

#### Dev

```bash
npm run dev || npm run dev:simple
```

Starts Webpack dev server on port 3000

#### Production Build

```bash
npm run build
```

This will create a production build of the project to `dist/`.

#### Release New Library Version

Increment the version number in [package.json](package.json).

Merge to `master` and [create a new release](https://github.com/octanner/prism-ui/releases/new) in GitHub that matches the version number.

Promote doc site to prod in [Akkeris](https://akkeris.octanner.io/pipelines/13cf7599-59de-4149-b554-1afe079df688).

Build the library. This will create a production build of just the components and the css for redistribution in `dist/`

```bash
npm run build:library
```

Publish the library to [Artifactory](https://artifactory.octanner.net).

```bash
npm publish
```

## Usage

To pull in the css file, use `import 'prismui/dist/main.css'`
If you want to use React components, import specific components from the package, e.g. `import { Avatar, Button } from 'prismui'`
