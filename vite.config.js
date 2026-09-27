import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/main.jsx"),
      name: "MuhammadJawadPortfolio",
      formats: ["iife"],
      fileName: () => "assets/portfolio.js"
    },
    rollupOptions: {
      output: {
        assetFileNames: (asset) => asset.name?.endsWith(".css") ? "assets/portfolio.css" : "assets/[name][extname]"
      }
    }
  }
});
