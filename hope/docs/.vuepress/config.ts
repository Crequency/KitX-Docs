import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "KitX Docs",
      description: "Docs of KitX",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "KitX Docs",
      description: "KitX 文档站点",
    },
  },

  theme,

  shouldPrefetch: false,
});
