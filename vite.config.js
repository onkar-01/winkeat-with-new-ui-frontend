import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "https://tiny-elk-tights.cyclic.cloud/",
    },
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
