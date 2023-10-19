import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import renderChunks, { FIXED_MODULES } from "./scripts/renderChunks";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: FIXED_MODULES,
          ...renderChunks(),
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
