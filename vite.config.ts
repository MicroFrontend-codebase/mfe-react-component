import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "ReactComponent",
      fileName: (format) => `react-component.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  define: {
    "process.env": {},
  },
});
