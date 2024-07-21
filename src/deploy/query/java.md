---
title: Java诊断工具速查表
order: 3
date: 2024-07-13
category:
  - Java
tag:
  - Java诊断
page:
  - frontmatter: false  
---

## MAT

::: tip 提示
MAT 安装以及使用详情 见 [MAT使用手册](./javadiagnosis/mat.md)
:::



## Arthas

::: tip 提示
Arthas 安装以及使用详情 见 [Arthas使用手册](./javadiagnosis/arthas.md)
:::

### 命令列表

#### jvm 相关

- [dashboard](https://arthas.aliyun.com/doc/dashboard.html) - 当前系统的实时数据面板
- [getstatic](https://arthas.aliyun.com/doc/getstatic.html) - 查看类的静态属性
- [heapdump](https://arthas.aliyun.com/doc/heapdump.html) - dump java heap, 类似 jmap 命令的 heap dump 功能
- [jvm](https://arthas.aliyun.com/doc/jvm.html) - 查看当前 JVM 的信息
- [logger](https://arthas.aliyun.com/doc/logger.html) - 查看和修改 logger
- [mbean](https://arthas.aliyun.com/doc/mbean.html) - 查看 Mbean 的信息
- [memory](https://arthas.aliyun.com/doc/memory.html) - 查看 JVM 的内存信息
- [ognl](https://arthas.aliyun.com/doc/ognl.html) - 执行 ognl 表达式
- [perfcounter](https://arthas.aliyun.com/doc/perfcounter.html) - 查看当前 JVM 的 Perf Counter 信息
- [sysenv](https://arthas.aliyun.com/doc/sysenv.html) - 查看 JVM 的环境变量
- [sysprop](https://arthas.aliyun.com/doc/sysprop.html) - 查看和修改 JVM 的系统属性
- [thread](https://arthas.aliyun.com/doc/thread.html) - 查看当前 JVM 的线程堆栈信息
- [vmoption](https://arthas.aliyun.com/doc/vmoption.html) - 查看和修改 JVM 里诊断相关的 option
- [vmtool](https://arthas.aliyun.com/doc/vmtool.html) - 从 jvm 里查询对象，执行 forceGc

#### class/classloader 相关

- [classloader](https://arthas.aliyun.com/doc/classloader.html) - 查看 classloader 的继承树，urls，类加载信息，使用 classloader 去 getResource
- [dump](https://arthas.aliyun.com/doc/dump.html) - dump 已加载类的 byte code 到特定目录
- [jad](https://arthas.aliyun.com/doc/jad.html) - 反编译指定已加载类的源码
- [mc](https://arthas.aliyun.com/doc/mc.html) - 内存编译器，内存编译`.java`文件为`.class`文件
- [redefine](https://arthas.aliyun.com/doc/redefine.html) - 加载外部的`.class`文件，redefine 到 JVM 里
- [retransform](https://arthas.aliyun.com/doc/retransform.html) - 加载外部的`.class`文件，retransform 到 JVM 里
- [sc](https://arthas.aliyun.com/doc/sc.html) - 查看 JVM 已加载的类信息
- [sm](https://arthas.aliyun.com/doc/sm.html) - 查看已加载类的方法信息

#### monitor/watch/trace 相关

注意

请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测，因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 `stop` 或将增强过的类执行 `reset` 命令。

- [monitor](https://arthas.aliyun.com/doc/monitor.html) - 方法执行监控
- [stack](https://arthas.aliyun.com/doc/stack.html) - 输出当前方法被调用的调用路径
- [trace](https://arthas.aliyun.com/doc/trace.html) - 方法内部调用路径，并输出方法路径上的每个节点上耗时
- [tt](https://arthas.aliyun.com/doc/tt.html) - 方法执行数据的时空隧道，记录下指定方法每次调用的入参和返回信息，并能对这些不同的时间下调用进行观测
- [watch](https://arthas.aliyun.com/doc/watch.html) - 方法执行数据观测

#### profiler / 火焰图

- [profiler](https://arthas.aliyun.com/doc/profiler.html) - 使用 [async-profiler 在新窗口打开](https://github.com/jvm-profiling-tools/async-profiler)对应用采样，生成火焰图
- [jfr](https://arthas.aliyun.com/doc/jfr.html) - 动态开启关闭 JFR 记录

#### 鉴权

- [auth](https://arthas.aliyun.com/doc/auth.html) - 鉴权

#### options

- [options](https://arthas.aliyun.com/doc/options.html) - 查看或设置 Arthas 全局开关

#### 管道

Arthas 支持使用管道对上述命令的结果进行进一步的处理，如`sm java.lang.String * | grep 'index'`

- [grep](https://arthas.aliyun.com/doc/grep.html) - 搜索满足条件的结果
- plaintext - 将命令的结果去除 ANSI 颜色
- wc - 按行统计输出结果

#### 后台异步任务

当线上出现偶发的问题，比如需要 watch 某个条件，而这个条件一天可能才会出现一次时，异步后台任务就派上用场了，详情请参考[这里](https://arthas.aliyun.com/doc/async.html)

- 使用 `>` 将结果重写向到日志文件，使用 `&` 指定命令是后台运行，session 断开不影响任务执行（生命周期默认为 1 天）
- jobs - 列出所有 job
- kill - 强制终止任务
- fg - 将暂停的任务拉到前台执行
- bg - 将暂停的任务放到后台执行

#### 基础命令

- [base64](https://arthas.aliyun.com/doc/base64.html) - base64 编码转换，和 linux 里的 base64 命令类似
- [cat](https://arthas.aliyun.com/doc/cat.html) - 打印文件内容，和 linux 里的 cat 命令类似
- [cls](https://arthas.aliyun.com/doc/cls.html) - 清空当前屏幕区域
- [echo](https://arthas.aliyun.com/doc/echo.html) - 打印参数，和 linux 里的 echo 命令类似
- [grep](https://arthas.aliyun.com/doc/grep.html) - 匹配查找，和 linux 里的 grep 命令类似
- [help](https://arthas.aliyun.com/doc/help.html) - 查看命令帮助信息
- [history](https://arthas.aliyun.com/doc/history.html) - 打印命令历史
- [keymap](https://arthas.aliyun.com/doc/keymap.html) - Arthas 快捷键列表及自定义快捷键
- [pwd](https://arthas.aliyun.com/doc/pwd.html) - 返回当前的工作目录，和 linux 命令类似
- [quit](https://arthas.aliyun.com/doc/quit.html) - 退出当前 Arthas 客户端，其他 Arthas 客户端不受影响
- [reset](https://arthas.aliyun.com/doc/reset.html) - 重置增强类，将被 Arthas 增强过的类全部还原，Arthas 服务端关闭时会重置所有增强过的类
- [session](https://arthas.aliyun.com/doc/session.html) - 查看当前会话的信息
- [stop](https://arthas.aliyun.com/doc/stop.html) - 关闭 Arthas 服务端，所有 Arthas 客户端全部退出
- [tee](https://arthas.aliyun.com/doc/tee.html) - 复制标准输入到标准输出和指定的文件，和 linux 里的 tee 命令类似
- [version](https://arthas.aliyun.com/doc/version.html) - 输出当前目标 Java 进程所加载的 Arthas 版本号

### 其他特性

#### Arthas 后台异步任务

当需要排查一个问题，但是这个问题的出现时间不能确定，那我们就可以把检测命令挂在后台运行，并将保存到输出日志。

- [Arthas 后台异步任务](https://arthas.aliyun.com/doc/async.html)

#### 执行结果存日志

所有执行记录的结果完整保存在日志文件中，便于后续进行分析。

- [执行结果存日志](https://arthas.aliyun.com/doc/save-log.html)

#### Docker

Arthas 在 docker 容器中使用配置参考。

- [Docker](https://arthas.aliyun.com/doc/docker.html)

#### Web Console

通过 websocket 连接 Arthas。

- [Web Console](https://arthas.aliyun.com/doc/web-console.html)

#### Arthas Tunnel

通过 Arthas Tunnel Server/Client 来远程管理/连接多个服务器下的Java服务。

- [Arthas Tunnel](https://arthas.aliyun.com/doc/tunnel.html)

#### ognl 表达式用法

- [ognl 表达式的用法说明在新窗口打开](https://github.com/alibaba/arthas/issues/11)
- [一些 ognl 特殊用法在新窗口打开](https://github.com/alibaba/arthas/issues/71)

#### IDEA Plugin

IntelliJ IDEA 编译器中更加快捷构建 arhtas 命令。

- [IDEA Plugin](https://arthas.aliyun.com/doc/idea-plugin.html)

#### Arthas Properties

Arthas 支持配置项参考。

- [Arthas Properties](https://arthas.aliyun.com/doc/arthas-properties.html)

#### 以 java agent 方式启动

- [以 java agent 方式启动](https://arthas.aliyun.com/doc/agent.html)

#### Arthas Spring Boot Starter

随应用一起启动。

- [Arthas Spring Boot Starter](https://arthas.aliyun.com/doc/spring-boot-starter.html)

#### HTTP API

Http API 提供结构化的数据，支持更复杂的交互功能，方便自定义界面集成 arthas。

- [HTTP API](https://arthas.aliyun.com/doc/http-api.html)

#### 批处理功能

方便自定义脚本一次性批量运行多个命令，可结合 `--select` 参数可以指定进程名字一起使用。

- [批处理功能](https://arthas.aliyun.com/doc/batch-support.html)

#### as.sh 和 arthas-boot 技巧

- 通过`select`功能选择 attach 的进程。

正常情况下，每次执行`as.sh`/`arthas-boot.jar`需要选择，或者指定 PID。这样会比较麻烦，因为每次启动应用，它的 PID 会变化。

比如，已经启动了`math-game.jar`，使用`jps`命令查看：



```bash
$ jps
58883 math-game.jar
58884 Jps
```

通过`select`参数可以指定进程名字，非常方便。



```bash
$ ./as.sh --select math-game
Arthas script version: 3.3.6
[INFO] JAVA_HOME: /tmp/java/8.0.222-zulu
Arthas home: /Users/admin/.arthas/lib/3.3.6/arthas
Calculating attach execution time...
Attaching to 59161 using version /Users/admin/.arthas/lib/3.3.6/arthas...

real	0m0.572s
user	0m0.281s
sys	0m0.039s
Attach success.
telnet connecting to arthas server... current timestamp is 1594280799
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  \ |  .--. ''--.  .--'|  '--'  | /  O  \ '   .-'
|  .-.  ||  '--'.'   |  |   |  .--.  ||  .-.  |`.  `-.
|  | |  ||  |\  \    |  |   |  |  |  ||  | |  |.-'    |
`--' `--'`--' '--'   `--'   `--'  `--'`--' `--'`-----'


wiki      https://arthas.aliyun.com/doc
tutorials https://arthas.aliyun.com/doc/arthas-tutorials.html
version   3.3.6
pid       58883
```

#### 用户数据回报

在`3.1.4`版本后，增加了用户数据回报功能，方便统一做安全或者历史数据统计。

在启动时，指定`stat-url`，就会回报执行的每一行命令，比如： `./as.sh --stat-url 'http://192.168.10.11:8080/api/stat'`

在 tunnel server 里有一个示例的回报代码，用户可以自己在服务器上实现。

[StatController.java](https://github.com/alibaba/arthas/blob/master/tunnel-server/src/main/java/com/alibaba/arthas/tunnel/server/app/web/StatController.java)

