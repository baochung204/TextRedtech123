import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs/promises';
import svgr from '@svgr/rollup';
import viteCompression from 'vite-plugin-compression'; // Thêm plugin

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.tsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-tsx',
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              loader: 'tsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Nén Brotli
      ext: '.br',
      threshold: 10240, // Chỉ nén file lớn hơn 10KB
    }),
    viteCompression({
      algorithm: 'gzip', // Nén Gzip
      ext: '.gz',
      threshold: 10240,
    }),
    svgr(),
  ],
});
