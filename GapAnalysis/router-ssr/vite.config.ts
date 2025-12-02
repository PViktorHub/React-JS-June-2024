import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        client: path.resolve(__dirname, 'src/client/entry-client.tsx'),
      },
      output: {
        entryFileNames: 'client.js', // щоб згенерувався dist/client.js
      },
    },
  },
});