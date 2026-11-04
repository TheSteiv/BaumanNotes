import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite" // <-- Важно!
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Важно!
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})