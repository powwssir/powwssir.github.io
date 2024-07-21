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
    "/project/performance": genSidebar4Performance(),
    "/project/": genSidebar4Project(),
    //源码系列
    "/source/": genSidebar5Source(),
    // 面试
    "/interview/": genSidebar6Interview(),
    //计算机系列
    "/basic/":genSidebar7Computer()

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
      children: [
        "basic01-object.md",
        "java02.md",
        "java03.md",
        "java04.md"
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      // children: "structure",

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
      text: "速查表",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "query/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "docker-deploy.md",
        "git-command-query.md",
        "linux-command.md",
        "tech-config.md",
        "java.md",
        "mysql-command.md"
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "环境部署",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "environment/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "内网穿透.md",
        "docker.md",
        "linux.md",
        "git/gitcode.md",
        "git/gitee.md",
        "git/github.md",
        "git/gitlab.md",
        "maven.md",
        "jenkins.md",
        "nginx.md",
        "portainer.md",
        "springbootmerge.md"
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "工具类库",
      collapsible: true,
      expanded: false,
      prefix: "toolclass/",
      children: [
        "outline.md",
        "guava.md",
        "hutool.md",
        "springbootutil.md",
      ],
    },
    {
      text: "消息队列",
      collapsible: true,
      expanded: false,
      prefix: "queue/",
      children: [
        "outline.md",
        "kafka.md",
        "rabbitmq.md",
        "rocketmq.md",
      ],
    },
    {
      text: "ORM框架",
      collapsible: true,
      expanded: false,
      prefix: "orm/",
      children: [
        "mybatis.md",
        "mybatisplus.md",
      ],
    },
    {
      text: "数据库",
      collapsible: true,
      expanded: false,
      prefix: "database/",
      children: [
        "outline.md",
        "mysql.md",
        "redis.md",
        "prometheus.md",
        "elasticsearch.md",
      ],
    },
    {
      text: "数据库连接池",
      collapsible: true,
      expanded: false,
      prefix: "database/connectionpool/",
      children: [
        "outline.md",
        "druid.md",
        "hikaricp.md",
        "muti.md",
      ],
    },
    {
      text: "分布式事务",
      collapsible: true,
      expanded: false,
      prefix: "database/distributedtransaction/",
      children: [
        "outline.md",
        "seata.md",
      ],
    },
    {
      text: "数据库中间件",
      collapsible: true,
      expanded: false,
      prefix: "database/middleware/",
      children: [
        "canal.md",
        "shardingsphere.md",
      ],
    },
    {
      text: "规则引擎",
      collapsible: true,
      expanded: false,
      prefix: "rulesengine/",
      children: [
        "outline.md",
        "drools.md",
        "liteflow.md",
        "ice.md",
      ],
    },
    {
      text: "服务监控",
      collapsible: true,
      expanded: false,
      prefix: "monitor/",
      children: [
        "outline.md",
        "skywalking.md",
        "elk.md",
        "springbootadmin.md",
        // 动态线程池
        "threadpool/dynamictp.md",
        "threadpool/hippo4j.md",
      ],
    },
    {
      text: "项目架构",
      collapsible: true,
      expanded: false,
      prefix: "architecture/",
      children: [
        "outline.md",
        "ddd.md",
      ],
      // 方式二 更简单 会给JavaBasic/ 下的文件自动设置目录
      //children: "structure",
    },
    {
      text: "脚手架",
      collapsible: true,
      expanded: false,
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
      text: "测试",
      collapsible: true,
      expanded: false,
      prefix: "test/",
      children: [
        "jmeter.md",
      ],
    },
    {
      text: "API网关",
      collapsible: true,
      expanded: false,
      prefix: "apigateway/",
      children: [
        "outline.md",
        "nginx.md",
        "springcloudgateway.md",
      ],
    },
    {
      text: "配置中心",
      collapsible: true,
      expanded: false,
      prefix: "configcenter/",
      children: [
        "outline.md",
        "nacos.md",
        "springcloudconfig.md",
      ],
    },
    {
      text: "注册中心",
      collapsible: true,
      expanded: false,
      prefix: "regiscenter/",
      children: [
        "outline.md",
        "nacos.md",
        "zookeeper.md",
      ],
    },
    {
      text: "服务调用",
      collapsible: true,
      expanded: false,
      prefix: "rpc/",
      children: [
        "outline.md",
        "dubbo.md",
        "grpc.md",
      ],
    },
    {
      text: "服务保障",
      collapsible: true,
      expanded: false,
      prefix: "serviceguarantee/",
      children: [
        "outline.md",
        "hystrix.md",
        "resilience4j.md",
        "sentinel.md",
      ],
    },
    {
      text: "任务调度",
      collapsible: true,
      expanded: false,
      prefix: "taskschedule/",
      children: [
        "outline.md",
        "quartz.md",
        "xxl-job.md",
      ],
    },
    {
      text: "安全框架",
      collapsible: true,
      expanded: false,
      prefix: "securityframework/",
      children: [
        "outline.md",
        "oauth2.md",
        "shiro.md",
        "springsecurity.md",
      ],
    },
    {
      text: "服务器",
      collapsible: true,
      expanded: false,
      prefix: "webserver/",
      children: [
        "outline.md",
        "netty.md",
        "tomcat.md",
      ],
    },
  ]
}

// 项目 子目录 性能优化专题
function genSidebar4Performance(){
  return [
    {
      text: "性能优化",
      collapsible: false,
      expanded: true,
      children: [
        "outline.md",
        "sys.md",
        "architecture.md"
      ],
    },
  ]
}
// 项目
function genSidebar4Project(){
  return [
    
  ]
}
// 源码
function genSidebar5Source(){
  return [
    {
      text: "Java源码系列",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      // icon: "laptop-code",
      prefix: "java/",
      // link: "JavaBasic/",
      // 方式一 
      children: [
        "outline.md",
      ],
    },
  ]
}

// 面试
function genSidebar6Interview(){
  return [
    {
      text: "面试资料",
        // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 可选的。设置分组是否默认展开，默认值是 false
      expanded: true,
      link: "/interview/",
    },
  ]
}

// 计算机系列
function genSidebar7Computer(){
  return [
    {
      text: "计算机网络",
      collapsible: true,
      expanded: false,
      prefix: "network/",
      children: [
        "outline.md",
      ],
    },
    {
      text: "计算机操作系统",
      collapsible: true,
      expanded: false,
      prefix: "operator/",
      children: [
        "outline.md",
        "hardware.md",
        "memory.md" 
      ],
    },
    {
      text: "数据结构和算法",
      collapsible: true,
      expanded: false,
      prefix: "structure/",
      children: [
        "outline.md",
      ],
    },
  ]
}