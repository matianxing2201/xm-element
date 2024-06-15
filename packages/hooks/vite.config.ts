import { resolve } from "path";
import { defineConfig } from "vite";
import { last, split, first, includes } from "lodash-es";


export default defineConfig({
  plugins: [
   
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "hooks",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "lodash-es"],
      output: {
        manualChunks(id) {
          if (includes(id, "/packages/hooks/use"))
            return first(split(last(split(id, "/")), "."));
        },
      },
    },
  },
});
