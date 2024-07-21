---
title: MAT
order: 1
date: 2024-07-13
category:
  - MAT
tag:
  - Java诊断
page:
  - frontmatter: false  
---


## 简介



## 应用场景

- OOM问题分析


## 软件下载以及配置

1、MAT下载

 [windows 版本](https://pan.baidu.com/s/111jz90S4tie_48lQeExcZg?pwd=1111)

 [Linux 版本](https://pan.baidu.com/s/1jdYASRmM01zFgh_wxmdEWA?pwd=6aww)

 [MAC 版本](https://pan.baidu.com/s/1Dzi0frJ0oNessPfbmy-tmw?pwd=q8rm)

[官方 MAT 下载地址](http://www.eclipse.org/mat/downloads.php)



2、检查JDK版本

::: tip 
MAT 依赖的JDK版本最低是JDK 17
:::

将JDK软件包直接拷贝到MAT软件包根目录下

JDK 安装详见 [Linux查询手册](../linux-command.md)



3、修改MAT初始化文件配置

MAT软件包根目录下找到名称为MemoryAnalyzer.ini的文件后 打开修改配置参数,以下为配置参考示例:

原文件:

```shell
-startup
plugins/org.eclipse.equinox.launcher_1.6.400.v20210924-0641.jar
--launcher.library
plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.2.700.v20221108-1024
-vmargs
--add-exports=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
-Xmx1024m
```

修改后:

```shell
-startup
plugins/org.eclipse.equinox.launcher_1.6.400.v20210924-0641.jar
-vm
D:\jdk-17\bin
--launcher.library
plugins/org.eclipse.equinox.launcher.gtk.linux.x86_64_1.2.700.v20221108-1024
-vmargs
--add-exports=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
-Xmx4096m
-XX:+UseG1GC
-DhprofStrictnessWarning=true
```
> 修改说明: 
- 添加-vm参数: 指定MAT使用的JDK的执行文件java.exe位置(避免直接使用环境变量中配置JDK版本)
- -Xmx4096m: 根据需求而定,如果dump文件本身很大，那么根据服务器内存大小适当调整内存使用空间大小，否则可能会发生OOM

- -XX:+UseG1GC: 指定垃圾回收器

- -DhprofStrictnessWarning=true：防止因为某些不必要的提示停止分析




4、保存配置后 启动 MAT



## MAT使用

1、前置步骤: 获取dump文件

::: tabs

<!-- Arthas  -->
@tab Arthas

- dump 到指定文件

```bash
[arthas@58205]$ heapdump arthas-output/dump.hprof
Dumping heap to arthas-output/dump.hprof ...
Heap dump file created
```

> 生成文件在`arthas-output`目录(路径在运行jar包下面)，可以通过浏览器下载： http://localhost:8563/arthas-output/

- 只 dump live对象

```bash
[arthas@58205]$ heapdump --live /tmp/dump.hprof
Dumping heap to /tmp/dump.hprof ...
Heap dump file created
```

- dump 到临时文件

```bash
[arthas@58205]$ heapdump
Dumping heap to /var/folders/my/wy7c9w9j5732xbkcyt1mb4g40000gp/T/heapdump2019-09-03-16-385121018449645518991.hprof...
Heap dump file created
```
<!-- jmap  -->
@tab jmap

使用java自带工具jmap

<!-- jvm参数  -->
@tab jvm参数
发生oom时触发

```shell
-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=xxx
```

:::

2、使用MAT分析dump文件

如果dump文件过大 windows可能无法处理 需要使用Linux版本MAT分析 以下将总结两种情况下的使用:

::: tabs
<!-- Window版  -->
@tab Window版

只需要打开MAT分析工具 找到指定dump文件打开即可


<!-- Linux版  -->
@tab Linux版

1. 执行MAT脚本文件 ParseHeapDump.sh 生成分析报告

```shell
#进入到mat文件夹内部
cd /home/hellxz/mat
#执行 MAT 命令行脚本
./ParseHeapDump.sh \
    /home/hellxz/performance/heap_dump_20210128-1505.hprof  \
    org.eclipse.mat.api:suspects \
    org.eclipse.mat.api:overview \
    org.eclipse.mat.api:top_components    
```

- 参数解释:

- hprof文件: 以上的hprof文件根据实际情况选择

- `suspects` / `overview` / `top_componets` 这几个 API 与 MAT 界面上显示的区域是一致的，对应这个命令中是 3 个任务，即生成名为 `xxx_Leak_Suspects.zip` / `xxx_System_Overview.zip` / `xxx_Top_Components.zip` 的分析报告，可选择分析三者任几个任务

- 输出文件地址: MAT 会将文件分析文件与临时文件输出到堆 dump 目录下，输出文件中包含 `xxx_Leak_Suspects.zip` / `xxx_System_Overview.zip` / `xxx_Top_Components.zip` (`xxx` 会被替换为堆 dump 的名称),分别解压临时文件中包含.index 结尾的索引文件，首次分析会建立索引速度较慢

2.下载压缩文件后本地解压打开

找到每一个压缩文件中index结尾的文件打开进入到分析报告主界面

报错问题：

1、Cannot load from short array because “sun.awt.FontConfiguration.head“ is null

系统缺少相应的字体。安装相应的字体即可解决。

```shell
yum install fontconfig
fc-cache --force
```

:::

3、分析报告使用

>说明: Linux版 和 Windows版本 有所不同 Windows版本功能更细致



## 场景案例

### OOM 内存溢出定位

分析思路：

1、大内存对象定位: 通过支配树功能或直方图功能查看消耗内存最大的类型，来分析内存泄露的大概原因；

2、追根溯源: 查看那些消耗内存最大的类型、详细的对象明细列表，以及它们的引用链，来定位内存泄露的具体点；

3、对象属性分析: 配合查看对象属性的功能，可以脱离源码看到对象的各种属性的值和依赖关系，帮助我们理清程序逻辑和参数；

4、分析线程栈: 辅助使用查看线程栈来看 OOM 问题是否和过多线程有关，甚至可以在线程栈看到 OOM 最后一刻出现异常的线程。


::: tip 待办
整理案例笔记
:::



## 参考资料


- [JVM系列(二十六) JVM调优实战-内存分析工具MAT安装 兼容JDK8环境 - 掘金](https://juejin.cn/post/7224514908762931257)

- [Java 业务开发常见错误 100 例](https://time.geekbang.org/column/intro/294)



