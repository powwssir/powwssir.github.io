import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

// toc 目录插件 https://ecosystem.vuejs.press/zh/plugins/development/toc.html
import { tocPlugin } from "@vuepress/plugin-toc";


// 配置  https://vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  base: "/",
  //配置页面head信息
  head: [
    // ico
    ["link", {rel: "icon", href: `/dog.png`}],
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "YeZi"}],
    ["meta", {name: "keywords", content: "Java 知识体系, java体系, java知识体系, java框架,java详解,java学习路线,java spring, java面试, 知识体系, java技术体系, java编程, java编程指南,java开发体系, java开发,java教程,java,java数据结构, 算法, 开发基础,开发工具"}],
    ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],

    // baidu statstic
    // ["script", {src: "https://hm.baidu.com/hm.js?xxxxxxxxxxx"}]
    // 字体引入 
    // 修改字体 | vuepress-theme-hope https://theme-hope.vuejs.press/zh/guide/customize/font.html#%E5%AD%97%E4%BD%93%E5%BA%93
    // 思源字体 对应 $font-family: '"Noto Serif SC", serif';
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link",{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },],
    ["link",{  rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;700&display=swap",},],
  ],
  locales: {
      "/": {
          lang: "zh-CN",
          title: "CodeCanvas 技术分享",            
          description: "包含: Java 基础, Java 部分源码, JVM, Spring, Spring Boot,开发工具，项目..."
      }
  },
  lang: "zh-CN",
  title: "CodeCanvas",
  description: "技术分享博客",
  
  theme,
 
  // 和 PWA 一起启用
  // shouldPrefetch: false,
     // 添加 TOC 插件
     
  plugins: [
    tocPlugin({
      // TOC 插件的配置选项
      // 指定目录组件的名称
      componentName: "Toc",
      // 覆盖组件 options Prop 的默认值
      // defaultPropsOptions: {
      //   // listType: "ol",
      //   // listClass: ["toc-list"],
      //   // itemClass: ["toc-item"],
      //   // linkClass: ["toc-link"],
    }),
  ],
});


