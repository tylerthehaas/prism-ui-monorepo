const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Prism Ui Docs',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: { searchPath: '../' },
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Prism Ui Docs',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs',
          templates:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/package.json',
          docz:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz',
          cache:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/.cache',
          app:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app',
          appPublic:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/public',
          appNodeModules:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/node_modules',
          appPackageJson:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/package.json',
          appYarnLock:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/gatsby-config.js',
          gatsbyBrowser:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/gatsby-browser.js',
          gatsbyNode:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/gatsby-node.js',
          gatsbySSR:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/gatsby-ssr.js',
          importsJs:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app/imports.js',
          rootJs:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app/root.jsx',
          indexJs:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app/index.jsx',
          indexHtml:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app/index.html',
          db:
            '/Users/tyler.haas/Projects/octanner/prism-ui/packages/docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
