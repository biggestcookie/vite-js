import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    minify: false,
    target: "esnext",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
    polyfillModulePreload: false,
  },
});
