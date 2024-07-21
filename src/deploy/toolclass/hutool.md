---
title: Hutool
order: 1
date: 2024-07-13
category:
  - Hutool
tag:
  - Guava
page:
  - frontmatter: false  
---
## 简介


源码地址 [dromara/hutool: 🍬A set of tools that keep Java sweet.](https://github.com/dromara/hutool?tab=readme-ov-file)

中文文档 [入门和安装](https://www.hutool.cn/docs/#/)

参考API [Overview (hutool - Gitee.com))](https://apidoc.gitee.com/dromara/hutool/)



## 安装

### Maven

方式一 引入全部依赖
```xml
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.16</version>
</dependency>
```
方式二 引入部分需要依赖

- import方式

如果你想像Spring-Boot一样引入Hutool，再由子模块决定用到哪些模块，你可以在父模块中加入：

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-bom</artifactId>
            <version>${hutool.version}</version>
            <type>pom</type>
            <!-- 注意这里是import -->
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

在子模块中就可以引入自己需要的模块了：

```xml
<dependencies>
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-http</artifactId>
    </dependency>
</dependencies>
```

> 使用import的方式，只会引入hutool-bom内的dependencyManagement的配置，其它配置在这个引用方式下完全不起作用。

- exclude方式

如果你引入的模块比较多，但是某几个模块没用，你可以：

```xml
<dependencies>
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-bom</artifactId>
        <version>${hutool.version}</version>
        <!-- 加不加这句都能跑，区别只有是否告警  -->
        <type>pom</type>
        <exclusions>
            <exclusion>
                    <groupId>cn.hutool</groupId>
                    <artifactId>hutool-system</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
</dependencies>
```

> 这个配置会传递依赖hutool-bom内所有dependencies的内容，当前hutool-bom内的dependencies全部设置了version，就意味着在maven resolve的时候hutool-bom内就算存在dependencyManagement也不会产生任何作用。



[概述](https://www.hutool.cn/docs/#/bom/%E6%A6%82%E8%BF%B0)

>其他安装方式 详见官网 


## 组件库



| 模块               | 介绍                                                         |
| ------------------ | ------------------------------------------------------------ |
| hutool-aop         | JDK动态代理封装，提供非IOC下的切面支持                       |
| hutool-bloomFilter | 布隆过滤，提供一些Hash算法的布隆过滤                         |
| hutool-cache       | 简单缓存实现                                                 |
| hutool-core        | 核心，包括Bean操作、日期、各种Util等                         |
| hutool-cron        | 定时任务模块，提供类Crontab表达式的定时任务                  |
| hutool-crypto      | 加密解密模块，提供对称、非对称和摘要算法封装                 |
| hutool-db          | JDBC封装后的数据操作，基于ActiveRecord思想                   |
| hutool-dfa         | 基于DFA模型的多关键字查找                                    |
| hutool-extra       | 扩展模块，对第三方封装（模板引擎、邮件、Servlet、二维码、Emoji、FTP、分词等） |
| hutool-http        | 基于HttpUrlConnection的Http客户端封装                        |
| hutool-log         | 自动识别日志实现的日志门面                                   |
| hutool-script      | 脚本执行封装，例如Javascript                                 |
| hutool-setting     | 功能更强大的Setting配置文件和Properties封装                  |
| hutool-system      | 系统参数调用封装（JVM信息等）                                |
| hutool-json        | JSON实现                                                     |
| hutool-captcha     | 图片验证码实现                                               |
| hutool-poi         | 针对POI中Excel和Word的封装                                   |
| hutool-socket      | 基于Java的NIO和AIO的Socket封装                               |
| hutool-jwt         | JSON Web Token (JWT)封装实现                                 |



## 参考资料

- [常用开发库 - Hutool包 | Java 全栈知识体系](https://pdai.tech/md/develop/package/dev-package-x-hu-tool.html)

- [入门和安装](https://www.hutool.cn/docs/#/)

