import { babel } from '@rollup/plugin-babel';

export default {
  input: './index.jsx',
  output: [{
    file: './lib/bundle.js',
    format: 'es',
    sourcemap: true
  }, {
    file: './lib/bundle.cjs',
    format: 'cjs',
    sourcemap: true
  }],
  external: [
    'react/jsx-runtime'
  ],
  plugins: [
    babel()
  ]
};
