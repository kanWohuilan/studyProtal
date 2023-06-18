import { defineNuxtConfig } from 'nuxt';
import { loadEnv } from 'vite';

const envScript = process.env.npm_lifecycle_script.split(" ");
const envName = envScript[envScript.length - 1]; // 通过启动命令区分环境
const envData = loadEnv(envName, "env");
console.log("当前环境：", envData);
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: "%s - Nuxt3 | 大赵同学",
      title: "nuxt3-ssr | 大赵同学",
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { name: "keywords", content: "vue3,nuxt3,ssr,大赵同学,zain" },
        { name: "description", content: "基于vue3的nuxt框架SSR教育demo站点" },
      ],
      link: [
        {
          rel: "icon",
          href: "https://cn.vuejs.org/logo.svg",
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
    envDir: "~", // 指定env文件夹
    server: {
      proxy: {
        // 代理配置
        "/dev-api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/\/dev-api/, ""),
        },
      },
    },
  },
  publicRuntimeConfig: envData, // 把env放入这个里面，通过useRuntimeConfig获取
  css: ["~/assets/css/main.css"],
  buildModules: ["nuxt-windicss"],
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  autoImports: {
    dirs: ["apis"],
  },
});
