import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";



export default hopeTheme({
  // 自定义导航栏布局 https://theme-hope.vuejs.press/zh/guide/layout/navbar.html#%E5%A4%96%E8%A7%82%E5%BC%B9%E7%AA%97
  // 可以调整导航栏 各个组件的位置 比如说   center: [ "Search","Links"], 搜索框就会被放置在中间位置 
  // 说明 只有当相应的组件被配置后才生效 比如说"Search" 只有配置搜索组件才会生效
  navbarLayout: {
    start: ["Brand"],
    center: [ "Search","Links"],
    end: ["Language", "Repo", "Outlook",],
  },

  // 设置文章目录展示 https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8
  // 说明 只是影响文章右侧显示 设置false后 全部文章都不存在 文章中使用[[toc]] 或者 Vue 目录组件  <Toc /> 不会受到影响
  toc:false,
  // 是否显示 上一篇/下一篇 链接 https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E8%AE%BE%E7%BD%AE%E6%A0%87%E9%A2%98%E6%B7%B1%E5%BA%A6
  prevLink:false,
  nextLink:false,

  // 仓库地址
  repo: "https://github.com/powwssir",

  //打印按钮
  // 其他界面功能 https://theme-hope.vuejs.press/zh/guide/interface/others.html#%E6%89%93%E5%8D%B0%E6%8C%89%E9%92%AE
  print: false,
  // 纯净模式 https://theme-hope.vuejs.press/zh/guide/interface/pure.html
  pure: true,

  hostname: "https://mister-hope.github.io",
  
  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mister-hope.com",
  // },
  
  iconAssets: "fontawesome-with-brands",

  // 修改主页图标 https://theme-hope-assets.vuejs.press/logo.svg
  logo: "/dog.png",
 
 
  docsDir: "src",

  // 文章信息配置 配置在页面中显示哪些文章信息
  // https://theme-hope.vuejs.press/zh/guide/feature/page-info.html
  // 默认 ["Author", "Original", "Date", "PageView", "ReadingTime", "Category", "Tag"]
  // 重新修改
  pageInfo: false, //["Original", "Date", "Category", "Tag", "ReadingTime","Word","PageView"],

  // 布局 Frontmatter 配置 https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#pageview
  // 是否开启路径导航
  breadcrumb:false,
  

  // 导航栏
  navbar, // navbar: false 关闭导航栏

  // 侧边栏
  sidebar,

  // 页脚 可以是字符串或者一个包含更多选项的对象
  footer: "MIT Licensed, Copyright © 2023-present XiaoYe",
  displayFooter: true,

  // 全屏按钮
  //fullscreen:true,

  // 主题选择器(自行添加)
  themeColor:true,
  // 博客相关
  /* 
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  }, */

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  //编辑此页按钮
  
  editLink:false,
  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 站点图 Sitemap https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html
    sitemap: true,

    // 图片预览插件配置
    photoSwipe: true,  
    
    

    // 目录组件
    catalog:{

    },
    // 阅读时间插件配置
    readingTime:true,
  
    // 复制版权设置
    // 配置参数详见 copyright https://ecosystem.vuejs.press/zh/plugins/features/copyright.html#copyrightgetter
    copyright: {
      // 是否全局使用
      global: true,
      // 允许复制的最大内容长度，0 意味着无限制
      maxLength: 0,
      disableCopy: false,
      disableSelection: false,
      author: "YeZi",
      license: "MIT License",
      // 触发附加版权的最小内容长度maxLength
      triggerLength: 10,
      // 首选部署位置
      canonical: "https://blog.fshare.tech/"
      // 其他选项...
    },

    // 自定义搜索配置
    search: {
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
      maxSuggestions: 10,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      hotKeys: ['s', '/'],
    },

    blog: true,
    
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    // 插件选项 https://plugin-components.vuejs.press/zh/config.html
    components: {
      components: ["Badge", "VPCard","SiteInfo","VPBanner"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片大小
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
