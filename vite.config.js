import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const siteUrl = process.env.VITE_SITE_URL?.trim().replace(/\/+$/, "");
  const appUrl = process.env.VITE_OWN_TERRA_URL?.trim();

  if (mode === "production" && !siteUrl) {
    throw new Error("VITE_SITE_URL is required for production builds so social metadata uses the deployed origin.");
  }

  for (const [name, value] of [["VITE_SITE_URL", siteUrl], ["VITE_OWN_TERRA_URL", appUrl]]) {
    if (!value) continue;
    let parsed;
    try {
      parsed = new URL(value);
    } catch {
      throw new Error(`${name} must be an absolute HTTP(S) URL.`);
    }
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error(`${name} must be an absolute HTTP(S) URL.`);
    }
  }

  return {
    base: process.env.GITHUB_ACTIONS ? "/safe-ports-website/" : "/",
    plugins: [react()],
    build: {
      sourcemap: false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          hub: resolve(__dirname, "hub.html"),
          lands: resolve(__dirname, "lands.html"),
          properties: resolve(__dirname, "properties.html"),
          construction: resolve(__dirname, "construction.html"),
          legal: resolve(__dirname, "legal.html"),
          privacy: resolve(__dirname, "aviso-privacidad.html"),
        },
      },
    },
  };
});
