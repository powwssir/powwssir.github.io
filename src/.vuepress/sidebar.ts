import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    // 工具
    "/tool/": genSidebar0Tool(),
    // 对于子目录 优化放在父级目录前面 
    // 设计模式
    "/java/DesignPatterns": genSidebar2Design(),
    // JAVA系列
    "/java/": genSidebar1Java(),
    //部署
    "/deploy/": genSidebar3Deploy(),
    //项目
    "/project/": genSidebar4Project(),

});

// 导航
function genSidebar0Tool(){
  return [
    //"",
    {
      text: "导航",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      
      children:[
        "tool01-toolkit.md",
        "tool02-blogshare.md",
      ],
    },
  ]
}

// 侧边栏 https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E5%88%86%E7%BB%84%E4%B8%8E%E5%B5%8C%E5%A5%97
function genSidebar1Java(){
  return [
    //"", // 这会链接到 /java/README.md
    {
      text: "JAVA基础",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "JavaBasic/",
      // link: "JavaBasic/",
      // 方式一 
      // children: [
      //   "java01.md",
      //   "java02.md",
      //   "java03.md",
      //   "java04.md"
      // ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      children: "structure",
    },
    {
      text: "JAVA集合框架",
      // icon: "laptop-code",
      prefix: "Collection/",
      //link: "Collection/",
      children:[
        "java01.md",
        "java02.md",
        "java03.md",
        "java04.md"
      ],
    },
    {
      text: "JAVA并发编程",
      // icon: "laptop-code",
      prefix: "Concurrent/",
      //link: "Concurrent/",
      children:[
        "java01.md",
      ],
    },
    {
      text: "JVM系列",
      // icon: "laptop-code",
      prefix: "JVM/",
      //link: "JVM/",
      children:[
        "java01.md",
      ],
    },
    {
      text: "字节码技术",
      // icon: "laptop-code",
      prefix: "ByteCode/",
      //link: "ByteCode/",
      children:[
        "java01.md",
      ],
    },
  ]
}

function  genSidebar2Design(){
  return [
    //"", 
    {
      text: "创建型模式",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "build/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "javaBuild01.md",
        "javaBuild02.md",
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "结构型模式",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "structure/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "javaStructure01.md",
        //"javaStructure02.md",
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "行为型模式",
      collapsible: false,
      expanded: true,
      prefix: "behavior/",

      children: [
        "javaBehavior01.md",
        //"javaBehavior02.md",
      ],
    },
  ]
}
// 部署技术
function genSidebar3Deploy(){
  return [
    "",
    {
      text: "环境部署",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "environment/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "javaBuild01.md",
        "javaBuild02.md",
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "脚手架",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "build/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "javaBuild01.md",
        "javaBuild02.md",
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
  ]
}

// 项目
function genSidebar4Project(){
  return [

  ]
}