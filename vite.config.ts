import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/chroma/" : "/",
    plugins: [react(), tsconfigPaths()],
  };
});
