import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Absolute Paths: https://dev.to/andrewezeani/how-to-create-absolute-imports-in-vite-react-app-a-step-by-step-guide-28co
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": "/src",
      src: "/src",
    },
  },
});
