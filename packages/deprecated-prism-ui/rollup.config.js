import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import minify from "rollup-plugin-minify";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import url from "rollup-plugin-url";
import htmlTemplate from "rollup-plugin-generate-html-template";

const isProduction = process.env.NODE_ENV === "production";

const getDevPlugins = () => [
  htmlTemplate({
    target: "./docs/index.html",
    template: "./templates/docs.html",
  }),
];

const getProdPlugins = () => [minify({ umd: "dist/prism.min.js" })];

export default {
  input: "components/index.js",
  output: {
    extend: true,
    file: isProduction ? "dist/bundle.js" : "docs/bundle.js",
    format: "umd",
    globals: ["jss", "preset", "isolate"],
    name: "prism",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    commonjs(),
    resolve({
      browser: true,
      jsnext: true,
      main: true,
    }),
    babel({
      exclude: "node_modules/**",
    }),
    postcss({
      extract: true,
      minimize: isProduction,
      plugins: [
        postcssPresetEnv({
          browsers: ["last 2 versions", "ie >= 11"],
        }),
      ],
      sourceMap: isProduction ? false : "inline",
    }),
    url({
      include: ["**/*.svg", "**/*.ttf", "**/*.woff"],
    }),
    filesize(),
  ].concat(isProduction ? getProdPlugins() : getDevPlugins()),
  watch: {
    chokidar: true,
  },
};
