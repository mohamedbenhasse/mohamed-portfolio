import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages is served from https://mohamedbenhasse.github.io/mohamed-portfolio/
// so every asset must be resolved through this base path.
export default defineConfig({
  base: "/mohamed-portfolio/",
  plugins: [react()],
});
