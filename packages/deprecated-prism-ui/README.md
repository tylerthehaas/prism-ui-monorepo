# Prism UI

A collection of UI elements for OC Tanner apps.

## Usage

Please see our [documentation](https://prism-jam-qa.alamoapp.octanner.io/) for usage details.

## Build

```bash
# install dependencies
npm install
```

#### Production Build

```bash
npm run build
```

This will create a production build of the project to `dist`.

#### Library Build

```bash
npm run build:library
```

This will create a production build of just the components and the css for redistribution in `dist`

#### Dev

```bash
npm run dev || npm run dev:simple
```

Starts Webpack dev server on port 3000

#### Usage

To pull in the css file, use `import 'prismui/dist/main.css'`
If you want to use React components as well, then use `import prismui from 'prism-ui'`, then
destructure for specific components, e.g. `const { Avatar, Button } = prismui`
