import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // mode に応じて .env ファイルを読み込む
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [vue()],
    base: env.VITE_BASE_URL || "/", // ← .env で設定できる
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      },
    },
  };
});
