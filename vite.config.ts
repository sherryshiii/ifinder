import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** GitHub Pages project site lives at /repo-name/ (set in CI workflow). */
const base = process.env.GITHUB_PAGES === "true" ? "/ifinder/" : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
