import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 8093 },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ansiedade: resolve(__dirname, "ansiedade/index.html"),
      },
    },
  },
});
