// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/Foret/",

    buildAssetsDir: "/static/",
    head: {
      title: "FORÊT",
      htmlAttrs: {
        lang: "zh_CN",
      },
    },
  },
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@bg-dev/nuxt-naiveui", "@pinia/nuxt"],
  naiveui: {
    colorModePreference: "light",
    iconSize: 18,
    themeConfig: {},
  },
  tailwindcss: {
    exposeConfig: true,
  },
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
