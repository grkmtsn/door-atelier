import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
    watch: {
      usePolling: true,
    }
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  root: "src",
});