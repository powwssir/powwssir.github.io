module.exports = {
    port: "8081",
    dest: ".site",
    base: "/",
    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => {
        return false;
    },
    // webpack 配置 https://vuepress.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const dateTime = new Date().getTime();

            // 清除js版本号
            config.output.filename('assets/js/cg-[name].js?v=' + dateTime).end();
            config.output.chunkFilename('assets/js/cg-[name].js?v=' + dateTime).end();

            // 清除css版本号
            config.plugin('mini-css-extract-plugin').use(require('mini-css-extract-plugin'), [{
                filename: 'assets/css/[name].css?v=' + dateTime,
                chunkFilename: 'assets/css/[name].css?v=' + dateTime
            }]).end();

        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "CodeCanvas 技术分享",
            description: "分享个人学习技术总结心得，包括并不限于java、spring、中间件以及AI大模型等方面"
        }
    },
    head: [
        // ico
        ["link", {rel: "icon", href: `/favicon.ico`}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        //["meta", {name: "author", content: "小傅哥"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {
            name: "keywords",
            content: "欢迎各位来访朋友，本网站用于分享个人学习技术总结心得，包括并不限于java、spring、中间件以及AI大模型等方面"
        }],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/jquery.min.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                // src: 'https://code.jquery.com/jquery-3.5.1.min.js',
                src: '/js/global.js',
            }],
        ['script',
            {
                charset: 'utf-8',
                async: 'async',
                src: '/js/fingerprint2.min.js',
            }],
        // ['script',
        //     {
        //         charset: 'utf-8',
        //         async: 'async',
        //         src: 'https://s9.cnzz.com/z_stat.php?id=1278232949&web_id=1278232949',
        //     }],
        // 添加百度统计
        // ["script", {},
        //     `
        //       var _hmt = _hmt || [];
        //       (function() {
        //         var hm = document.createElement("script");
        //         hm.src = "https://hm.baidu.com/hm.js?0b31b4c146bf7126aed5009e1a4a11c8";
        //         var s = document.getElementsByTagName("script")[0];
        //         s.parentNode.insertBefore(hm, s);
        //       })();
        //     `
        // ]
    ],
    plugins: [
        // LockArticle 用于解锁文章阅读
        [
            {globalUIComponents: [ 'PayArticle']}
        ],
        // ['@vssue/vuepress-plugin-vssue', {
        //     platform: 'github-v3', //v3的platform是github，v4的是github-v4
        //     // 其他的 Vssue 配置
        //     owner: 'fuzhengwei', //github账户名
        //     repo: 'CodeGuide', //github一个项目的名称
        //     clientId: 'df8beab2190bec20352a',//注册的Client ID
        //     clientSecret: '7eeeb4369d699c933f02a026ae8bb1e2a9c80e90',//注册的Client Secret
        //     autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
        // }
        // ],
        // ['@vuepress/back-to-top', true], replaced with inject page-sidebar
        ['@vuepress/medium-zoom', {
            selector: 'img:not(.nozoom)',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#%E9%80%89%E9%A1%B9
        // ['@vuepress/pwa', {
        //     serviceWorker: true,
        //     updatePopup: {
        //         '/': {
        //             message: "发现新内容可用",
        //             buttonText: "刷新"
        //         },
        //     }
        // }],
        // see: https://vuepress.github.io/zh/plugins/copyright/#%E5%AE%89%E8%A3%85
        // ['copyright', {
        //     noCopy: false, // 允许复制内容
        //     minLength: 100, // 如果长度超过 100 个字符
        //     authorName: "https://bugstack.cn",
        //     clipboardComponent: "请注明文章出处, [bugstack虫洞栈](https://bugstack.cn)"
        // }],
        // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
        // ['sitemap', {
        //     hostname: 'https://bugstack.cn'
        // }],
        // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
        ['vuepress-plugin-baidu-autopush', {}],
        // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#3eaf7c',
            successText: '@小叶: 代码已经复制到剪贴板'
        }],
        // see: https://github.com/tolking/vuepress-plugin-img-lazy
        ['img-lazy', {}],
        ["vuepress-plugin-tags", {
            type: 'default', // 标签预定义样式
            color: '#42b983',  // 标签字体颜色
            border: '1px solid #e2faef', // 标签边框颜色
            backgroundColor: '#f0faf5', // 标签背景颜色
            selector: '.page .content__default h1' // ^v1.0.1 你要将此标签渲染挂载到哪个元素后面？默认是第一个 H1 标签后面；
        }],
        // https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {
            siteTitle: (_, $site) => $site.title,
            title: $page => $page.title,
            description: $page => $page.frontmatter.description,
            author: (_, $site) => $site.themeConfig.author,
            tags: $page => $page.frontmatter.tags,
            // twitterCard: _ => 'summary_large_image',
            type: $page => 'article',
            url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
            image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
            publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
            modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        }]
    ],
    themeConfig: {
        darkMode: true, // 启用黑暗模式切换
        docsRepo: "fuzhengwei/CodeGuide",
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 文档放在一个特定的分支下：
        docsBranch: 'master',
        //logo: "/logo.png",
        editLinks: false,
        sidebarDepth: 0,
        //smoothScroll: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: '编程路书', link: '/md/road-map/road-map.md'
                    },
                    {
                        text: 'Java',
                        items: [
                            {
                                text: '面经手册',
                                link: '/md/java/interview/2020-07-28-面经手册 · 开篇《面试官都问我啥》.md'
                            },
                            {
                                text: '用Java实现JVM',
                                link: '/md/java/develop-jvm/2019-05-01-用Java实现JVM第一章《命令行工具》.md'
                            },
                            {
                                text: '基础技术',
                                link: '/md/java/core/2020-01-06-[源码分析]咋嘞？你的IDEA过期了吧！加个Jar包就破解了，为什么？.md'
                            }
                        ]
                    },
                    {
                        text: '框架、中间件',
                        items: [
                            {
                                text: 'Spring 手撸专栏',
                                link: '/md/spring/develop-spring/2021-05-16-第1章：开篇介绍，手写Spring能给你带来什么？.md'
                            },
                            {
                                text: 'MyBatis 手撸专栏',
                                link: '/md/spring/develop-mybatis/2022-03-20-第1章：开篇介绍，手写Mybatis能给你带来什么？.md'
                            },
                            {
                                text: 'Spring Cloud',
                                link: '/md/spring/spring-cloud/2019-10-31-Spring Cloud零《总有一偏概述告诉你SpringCloud是什么》.md'
                            },
                            {
                                text: '源码分析(Mybatis、Quartz)',
                                link: '/md/spring/source-code/2019-12-25-[源码分析]Mybatis接口没有实现类为什么可以执行增删改查.md'
                            }
                        ]
                    },
                    {
                        text: '其他语言',
                        items: [
                            {
                                text: '前端',
                                link: '/md/spring/develop-spring/2021-05-16-第1章：开篇介绍，手写Spring能给你带来什么？.md'
                            },
                            {
                                text: 'Lua',
                                link: '/md/about/me/about-me.md'
                            },
                            {
                                text: 'Python',
                                link: '/md/about/me/about-me.md'
                            }
                        ]
                    },
                    {
                        text: 'AI相关', link: '/md/other/guide-to-reading.md'
                    },
                    {
                        text: '设计模式',
                        items: [
                            {
                                text: '重学Java设计模式',
                                items: [
                                    {
                                        text: '创建型模式',
                                        link: '/md/develop/design-pattern/2020-05-20-重学Java设计模式《实战工厂方法模式》.md'
                                    },
                                    {
                                        text: '结构型模式',
                                        link: '/md/develop/design-pattern/2020-06-02-重学 Java 设计模式《适配器模式》.md'
                                    },
                                    {
                                        text: '行为型模式',
                                        link: '/md/develop/design-pattern/2020-06-18-重学 Java 设计模式《实战责任链模式》.md'
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        text: '部署',
                        link: '/md/devops/2023-04-18-tool.md'
                    },
                    {
                        text: '关于',
                        items: [
                            {text: '关于自己', link: '/md/about/me/about-me.md'},
                        ]
                    },
                    {
                        text: '主题',
                        children: [
                          { text: '白天', link: '#', action: () => { document.documentElement.classList.remove('dark') } },
                          { text: '黑夜', link: '#', action: () => { document.documentElement.classList.add('dark') } }
                        ]
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/powwssir'
                    },
                ],
                sidebar: {
                    "/md/other/": genBarOther(),
              
                    "/md/about/": genBarAbout()
                }
            }
        }
    }
};

// other
function genBarOther() {
    return [
        {
            title: "学习指引",
            collapsable: true,
            sidebarDepth: 2,
            children: [
                "road-map.md",
                "guide-to-reading.md"
            ]
        }
    ]
}

// About page
function genBarAbout() {
    return [
        {
            title: "关于自己",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "me/about-me.md",
                "me/2020-07-25-12天，这本《重学Java设计模式》PDF书籍下载量9k，新增粉丝1400人，Github上全球推荐榜.md",
            ]
        }
    ];
}

