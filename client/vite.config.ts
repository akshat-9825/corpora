import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@components": "/src/components",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/index.scss";`,
      },
    },
  },
});
