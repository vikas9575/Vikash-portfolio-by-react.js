import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss  from "@tailwindcss/vite"
import path from "path"
import plugin from "tailwindcss/plugin"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],

  resolve:{
    "@": path.resolve(__dirname, "./src")




  }
})
