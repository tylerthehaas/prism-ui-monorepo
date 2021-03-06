# Prism UI

Prism is a library of components and styles for OC Tanner apps.

## Storybook Component Library

View the component library at [https://octanner.design](https://octanner.design).

For the time being, documentation for legacy Prism-UI versions (<3.0.0) is being hosted at [https://octanner.design/legacy](https://octanner.design/legacy).

## Consuming Prism

### Authenticate the Github package registry

Install [npmrc](https://www.npmjs.com/package/npmrc) and create a new profile named 'github'

Follow the instructions in the "Authenticating to GitHub Package Registry" section of [this article](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry), but make note of the following:

- You can skip the instructions to edit your home directory `~/.npmrc` file.
- In the `npm login` command you will need to replace `--scope=@OWNER` with `--scope=@octanner`.

Add a `.npmrc` file to your repo's root directory with the following contents:

```
@octanner:registry=https://npm.pkg.github.com/
```

### React Usage

Install the package:

```bash
npm install @octanner/prism-ui
```

Import specific components from the package, e.g.:

```js
import { Avatar, Button } from '@octanner/prism-ui';
```

### CSS-only Usage

Install the package:

```bash
npm install @octanner/prism-ui-css
```

To import only the CSS without any components:

Minified:

```js
import '@octanner/prism-ui-css/prism.minified.css';
```

Unminified:

```js
import '@octanner/prism-ui-css/prism.css';
```

## Developing on Prism

### Build

```bash
# install dependencies
npm install
```

### Dev

```bash
npm start
```

for a static build on port 9000, or

```bash
npm run storybook
```

for development/hot reloading

### Production Build

```bash
npm run build
```

This will create a production build of the project to `static-storybook/`.

### Release New Library Version

Increment the version number in _both_ `package.json` files, [package.json](package.json) and [css-only/package.json](css-only/package.json). Then run `npm install` to update the version number in [package-lock.json](package-lock.json).

Merge changes to `master` and promote the site to prod in [Akkeris](https://akkeris.octanner.io/pipelines/13cf7599-59de-4149-b554-1afe079df688).

Make sure you have two npmrc profiles named artifactory and github, each with their respective credentials.

Publish the library with

```bash
npm run publish
```

This will create a production build of the library for redistribution in `dist/` and publish it to both Github and Artifactory.

Publish the new CSS-only library with

```bash
cd css-only
npm run publish
```
