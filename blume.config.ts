import { defineConfig } from "blume";

// GitHub Actions上（デプロイ時）かどうかの判定
const isProd = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  title: "Attention Is All You Need. Jp.",
  description: "Documentation powered by Blume.",

  deployment: {
    // ⭕️ GitHub Pages（本番）の時は "/Blume"、ローカルの時は空文字または未指定（ルート）にします
    base: isProd ? "/Blume" : "", 

    // ⭕️ GitHub Pages（本番）の時は完全なURL、ローカルの時はローカルサーバーのURLにします
    site: isProd 
      ? "https://at5224.github.io/AttentionIsAllYouNeed_jp" 
      : "http://localhost:4321",
  },
});

