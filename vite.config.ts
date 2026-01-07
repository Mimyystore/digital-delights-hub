import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/digital-delights-hub/",
  plugins: [react()],
});
