import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "example") {
    return {
      base: "./",
      build: {
        emptyOutDir: true,
        outDir: resolve(__dirname, "docs"),
      },
      plugins: [vue()],
    };
  } else
    return {
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "vue-arrange",
          fileName: (format) => `vue-arrange.${format}.js`,
        },
        rollupOptions: {
          external: ["vue"],
          output: {
            // Provide global variables to use in the UMD build
            // Add external deps here
            globals: {
              vue: "Vue",
            },
          },
        },
      },
      plugins: [vue()],
    };
});
