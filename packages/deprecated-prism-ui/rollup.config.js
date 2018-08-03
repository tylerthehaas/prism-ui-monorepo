import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import minify from 'rollup-plugin-minify';

export default {
  input: 'src/components/index',
  output: {
    extend: true,
    file: 'dist/prism.js',
    format: 'umd',
    name: 'prism',
    globals: [
      'jss',
      'preset',
      'isolate'
    ]
  },
  plugins: [
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    minify({ umd: 'dist/prism.min.js' }),
    filesize()
  ]
};
