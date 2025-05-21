/** @type {import('vite').UserConfig} */
import path from "path";
import alias from '@rollup/plugin-alias';

export default {
    resolve: {
        alias: {
          '@fonts': path.resolve(__dirname, 'fonts'),
        }
      },
      plugins: [
        alias({
          entries: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
            { find: 'react-dom', replacement: 'preact/compat' },
            { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
          ]
        })
      ]
}