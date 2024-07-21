import { navbar } from "vuepress-theme-hope";

export default navbar([
  // 博客主页
  "/",
  // 导航
  gennavbar0Tool(),
  // 计算机基础系列
  gennavbar1Computer(),
  // JAVA 系列
  gennavbar2Java(),
   // 设计模式系列
  gennavbar3JavaDesign(),
  // Spring 系列
  gennavbar4Spring(),
  // 源码系列 
  gennavbar5Source(),
  // 环境部署
  gennavbar6newDeploy(),
  // 项目
  gennavbar7Project(),
   // 面试
   gennavbar7Interview(),
]);


function  gennavbar0Tool(){
  return {
    text: "导航",
    // icon: "pen-to-square",
    // prefix: "",
    link: "/tool/tool01-toolkit.md"
  }
}
function gennavbar1Computer(){
  return {
    text: "计算机基础系列",
    // icon: "pen-to-square",
    prefix: "/basic/",
    children: [
      {
        text: "计算机网络",
        // icon: "book",
        link: "network/outline.md"
      },
      {
        text: "计算机操作系统",
        // icon: "book",
        link: "operator/outline.md"
      },
      {
        text: "数据结构和算法",
        // icon: "book",
        link: "structure/outline.md"
      },
    ]
  }
}
function gennavbar2Java(){
  return {
    text: "JAVA 系列",
    // icon: "pen-to-square",
    prefix: "/java/",
    children: [
      {
        text: "JAVA基础",
        //icon: "book",
        link: "JavaBasic/outline.md" // 直接指向第一篇文章
      },
      {
        text: "JAVA集合框架",
        //icon: "book",
        link: "Collection/java01.md" // 直接指向第一篇文章
      },
      {
        text: "JAVA并发编程",
        //icon: "book",
        link: "Concurrent/java01.md"
      },
      {
        text: "JVM系列",
        //icon: "book",
        link: "JVM/java01.md"
      },
      {
        text: "字节码技术",
        //icon: "book",
        link: "ByteCode/java01.md"
      },
    ]
  }
}
// 
function  gennavbar3JavaDesign(){
  return {
    text: "JAVA 设计模式",
    // icon: "pen-to-square",
    prefix: "/java/DesignPatterns/",
    children: [
      {
        text: "创建型模式",
        //icon: "book",
        link: "build/javaBuild01.md"
       
      },
      {
        text: "结构型模式",
        //icon: "book",
        link: "structure/javaStructure01.md" // 直接指向第一篇文章
      },
      {
        text: "行为型模式",
        //icon: "book",
        link: "behavior/javaBehavior01.md" // 直接指向第一篇文章
      },
    ]
  }
}

function gennavbar4Spring(){
  return {
    text: "Spring 系列",
    // icon: "pen-to-square",
    prefix: "/spring/",
    children: [

    ]
  }
}

function gennavbar5Source(){
  return {
    text: "源码系列",
    // icon: "pen-to-square",
    prefix: "/source/",
    children: [
      {
        text: "Java源码系列",
        //icon: "book",
        link: "java/outline.md"
      },
      {
        text: "Mybatis源码系列",
        //icon: "book",
        link: "mybatis/spring01-.md"
      },
      {
        text: "Spring源码系列",
        //icon: "book",
        link: "spring/spring01-.md"
      },
      {
        text: "SpringBoot源码系列",
        //icon: "book",
        link: "springboot/springboot01-.md"
      },
      {
        text: "SpringBoot集成源码系列",
        //icon: "book",
        link: "springbootmerge/springbootMerg01-.md"
      },
      {
        text: "Skywalking源码系列",
        //icon: "book",
        link: "skywalking/skywalking01-.md"
      },
      {
        text: "Sentinel源码系列",
        //icon: "book",
        link: "sentinel/sentinel01-.md"
      },

    ],
    
  }
}

// 直接导航到指定页面
function gennavbar6newDeploy(){
  return {
    text: "开发部署",
    // icon: "pen-to-square",
    link: "/deploy/",
  }
}

// 暂时不使用这种下拉方式
function gennavbar6Deploy(){
  return {
    text: "开发部署",
    // icon: "pen-to-square",
    prefix: "/deploy/",
    children: [
      {
        text: "开发环境",
        //icon: "book",
        link: "enviorment01-maven.md"
      },
      { 
        // 各类源码学习demo、简单实现
        text: "工具案例",
        //icon: "book",
        link: "toolDemo-.md"
      },
      {
        text: "中间件技术",
        //icon: "book",
        link: "deploy01-docker.md"
      },
      {
        text: "服务部署",
        //icon: "book",
        link: "deploy01-docker.md"
      },
      
      {
        text: "服务监控",
        //icon: "book",
        link: "monitor01-skywalking.md"
      },
      {
        text: "测试",
        //icon: "book",
        link: "test01-skywalking.md"
      },
    ]
  }
}



function  gennavbar7Project(){
  return {
    text: "项目/工具案例",
    // icon: "pen-to-square",
    prefix: "/project/",
    children: [
      { 
        // 各类源码学习demo、简单实现
        text: "学习项目",
        //icon: "book",
        link: "projectLearn-.md"
      },
      { 
        // 具有实际应用场景的项目
        text: "应用项目",
        //icon: "book",
        link: "project-.md"
      },
      { // 记录可能或者出现过的错误 参见 极客时间 常见错误案例(有相关记录笔记)
        text: "场景案例",
        //icon: "book",
        link: "scenariocase/outline.md"
      },
      { // 包括开发流程 使用到的工具资料等
        text: "开发规范",
        //icon: "book",
        link: "specifications/projectRule.md"
      },
      { // 记录可能或者出现过的错误 参见 极客时间 常见错误案例(有相关记录笔记)
        text: "性能优化",
        //icon: "book",
        link: "performance/outline.md"
      },
      { // 记录可能或者出现过的错误 参见 极客时间 常见错误案例(有相关记录笔记)
        text: "错误案例",
        //icon: "book",
        link: "errorcase/errorcase.md"
      },
      { // 结合工具来剖析问题 
        text: "问题排查剖析",
        //icon: "book",
        link: "projectRule-.md"
      },
    ]
  }
}



function gennavbar7Interview(){
  return {
    text: "面试汇总",
    link: "/interview/",
  }

}