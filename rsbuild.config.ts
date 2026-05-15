import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    meta: {
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    },
    title: "工具箱",
    favicon: "./public/favicon-32.png",
    tags: [
      {
        tag: "link",
        attrs: { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Outfit:wght@300..700&display=swap",
        },
      },
    ],
    appIcon: {
      name: "工具箱",
      icons: [
        { src: "./public/icon-180.png", size: 180, target: "apple-touch-icon" },
        { src: "./public/icon-192.png", size: 192, target: "web-app-manifest" },
        { src: "./public/icon-512.png", size: 512, target: "web-app-manifest" },
      ],
    },
  },
  server: {
    port: 10484,
  },
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
});
