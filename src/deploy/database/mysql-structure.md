---
title: Mysql构成
order: 1
date: 2024-07-13
category:
  - 数据库
tag:
  - Mysql
page:
  - frontmatter: false  
---





## 目录文件


1、 bin目录(存放多种可执行文件)

::: tabs

<!-- macOS -->
@tab macOS

```shell
/usr/local/mysql/
```

bin目录下的一部分可执行文件

```shell
.
├── mysql
├── mysql.server -> ../support-files/mysql.server
├── mysqladmin
├── mysqlbinlog
├── mysqlcheck
├── mysqld
├── mysqld_multi
├── mysqld_safe
├── mysqldump
├── mysqlimport
├── mysqlpump
... (省略其他文件)
0 directories, 40 files
```

- mysqld: 运行这个可执行文件就可以直接启动一个服务器进程。但这个命令不常用

- mysqld_safe: 启动脚本，它会间接的调用mysqld，而且还顺便启动了另外一个监控进程，这个监控进程在服务器进程挂了的时候，可以帮助重启它。另外，使用mysqld_safe启动服务器程序时，它会将服务器程序的出错信息和其他诊断信息重定向到某个文件中，产生出错日志，这样可以方便我们找出发生错误的原因。

- mysql.server: 启动脚本，它会间接的调用mysqld_safe，在调用mysql.server时在后边指定start参数就可以启动服务器程序：mysql.server start; 需要注意的是，这个 mysql.server 文件其实是一个链接文件，它的实际文件是 ../support-files/mysql.server。macOS操作系统中,会在bin目录下自动创建一个指向实际文件的链接文件，如果你的操作系统没有帮你自动创建这个链接文件，那就自己创建一个; mysql.server命令来关闭正在运行的服务器程序：mysql.server stop

- mysqld_multi: 可以对每一个服务器进程的启动或停止进行监控

<!-- Windows -->
@tab Windows

```shell
C:\Program Files\MySQL\MySQL Server 5.7

```

Windows里没有像类UNIX系统中那么多的启动脚本

- mysqld: 用于启动MySQL服务器程序(使用方式:在命令行里输入mysqld，或者直接双击运行)

- 补充Mysql 服务器程序启动方法: 以服务的方式运行服务器程序

1.将mysqld注册为Windows服务

```shell
"完整的可执行文件路径" --install [-manual] [服务名]
```

其中的-manual可以省略，加上它的话，表示在Windows系统启动的时候不自动启动该服务，否则会自动启动。服务名也可以省略，默认的服务名就是MySQL。

假设Windows计算机上mysqld的完整路径是：

```shell
C:\Program Files\MySQL\MySQL Server 5.7\bin\mysqld
```

注册为服务：

```shell
"C:\Program Files\MySQL\MySQL Server 5.7\bin\mysqld" --install
```

2.启动/关闭MySQL服务器程序
在把mysqld注册为Windows服务之后，执行以下命令启动MySQL服务器程序：

```shell
net start MySQL

net stop MySQL

```

也可以使用图形界面方式,通过Windows的服务管理器来启动和停止服务

<!-- Docker -->
@tab Docker

```shell
docker exec -it mysql bin/bash
cd bin/
ls
```

bin目录下的一部分可执行文件(Mysql 8.0.36版本为例 )

```shell
mysql
mysql-secret-store-login-path
mysql_config
mysql_migrate_keyring
mysql_ssl_rsa_setup
mysql_tzinfo_to_sql
mysql_upgrade
mysqladmin
mysqldump
mysqlpump
mysqlsh
```

>具体根据镜像文件情况而定

:::

>`MySQL`的大部分安装包都包含了服务器程序和客户端程序，不过在Linux下使用RPM包时会有单独的服务器RPM包和客户端RPM包，需要分别安装。


## Mysql 日志文件


## Mysql 数据目录

### 简介

MySQL服务器程序在启动时会到文件系统的某个目录下加载一些文件，之后在运行过程中产生的数据也都会存储到这个目录下的某些文件中，这个目录就称为数据目录

- 文件系统和数据库的关系

InnoDB、MyISAM这样的存储引擎都是把表存储在磁盘上的，而操作系统使用==文件系统==来管理磁盘。

换句话说：像 InnoDB 、 MyISAM 这样的存储引擎都是把表存储在文件系统上的。当想读取数据的时候，这些存储引擎会从文件系统中把数据读出来返回给我们，当我们想写入数据的时候，这些存储引擎会把这些数据又写回文件系统。

而数据目录就是表示InnoDB和MyISAM这两个存储引擎的数据在文件系统中存储的形式

### 查看数据目录位置

```mysql
SHOW VARIABLES LIKE 'datadir';
```

比如我测试出来MySQL的数据目录在/var/lib/mysql/

::: tip 概念区分: 安装目录 vs 数据目录
bin目录 和 数据目录二者是不同的

- bin目录:存储许多关于控制客户端程序和服务器程序的命令（许多可执行文件，比如mysql，mysqld，mysqld_safe等等等等好几十个）
- 数据目录: 存储MySQL在运行过程中产生的数据
:::

### 数据目录结构

以下总结数据库、表等在文件系统中的表示

- 数据库

每个数据库都对应数据目录下的一个子目录，或者说对应一个文件夹，每当新建一个数据库时，MySQL做这两件事：

1.在数据目录下创建一个和数据库名同名的子目录（或者说是文件夹）。

2.在该与数据库名同名的子目录下创建一个名为db.opt的文件，这个文件中包含了该数据库的各种属性，比方说该数据库的字符集和比较规则是什么。

比方说查看计算机上的数据库：

```shell
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| charset_demo_db    |
| dahaizi            |
| mysql              |
| performance_schema |
| sys                |
| xiaohaizi          |
+--------------------+
7 rows in set (0.00 sec)
```

其中charset_demo_db、dahaizi和xiaohaizi数据库是自定义的，其余4个数据库是属于MySQL自带的系统数据库。关于系统数据库详细说明,见下面单独讲解。

再看一下计算机上的数据目录下的内容：

```shell
.
├── auto.cnf
├── ca-key.pem
├── ca.pem
├── charset_demo_db
├── client-cert.pem
├── client-key.pem
├── dahaizi
├── ib_buffer_pool
├── ib_logfile0
├── ib_logfile1
├── ibdata1
├── ibtmp1
├── mysql
├── performance_schema
├── private_key.pem
├── public_key.pem
├── server-cert.pem
├── server-key.pem
├── sys
├── xiaohaizideMacBook-Pro.local.err
├── xiaohaizideMacBook-Pro.local.pid
└── xiaohaizi
6 directories, 16 files
```

除了information_schema这个系统数据库外，其他的数据库在数据目录下都有对应的子目录。这个information_schema比较特殊，设计MySQL的大佬们对它的实现进行了特殊对待，没有使用相应的数据库目录，我们忽略它的存在就好了。

- 数据表

数据表按照存放信息不同 分为 表结构的定义、表中的数据

第一种: 表结构的定义

表结构就是该表的名称是什么，表里边有多少列，每个列的数据类型是什么，有什么约束条件和索引，用的是什么字符集和比较规则等等的各种信息，这些信息都体现在我们的建表语句中了。为了保存这些信息，InnoDB和MyISAM这两种存储引擎都在==数据目录下对应的数据库子目录==下创建了一个专门用于描述表结构的文件，文件名是这样：

```shell
表名.frm
```



比如在dahaizi数据库下创建一个名为test的表：

```shell
mysql> USE dahaizi;
Database changed

mysql> CREATE TABLE test (
    ->     c1 INT
    -> );
Query OK, 0 rows affected (0.03 sec)
```

那在数据库dahaizi对应的子目录下就会创建一个名为test.frm的用于描述表结构的文件。值得注意的是，这个后缀名为.frm是以二进制格式存储的，直接打开会是乱码

描述表结构的文件我们知道怎么存储了，那表中的数据存到什么文件中了呢？在这个问题上，不同的存储引擎就产生了分歧了，下面我们分别看一下InnoDB和MyISAM是用什么文件来保存表中数据的。

第二种: 表中的数据

对于不同的存储引擎 InnoDB 和 MyISAM 使用了不同的方式保存表中数据

::: tabs

@tab InnoDB

@tab MyISAM

:::


## Mysql 存储引擎

1、查询数据库执行引擎

```mysql
SHOW ENGINES;
```

```mysql
mysql> SHOW ENGINES;
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                        | Transactions | XA   | Savepoints |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| InnoDB             | DEFAULT | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         |
| BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                          | NO           | NO   | NO         |
| CSV                | YES     | CSV storage engine                                             | NO           | NO   | NO         |
| ARCHIVE            | YES     | Archive storage engine                                         | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                             | NO           | NO   | NO         |
| FEDERATED          | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
9 rows in set (0.00 sec)
```

Support列表示该存储引擎是否可用，DEFAULT值代表是当前服务器程序的默认存储引擎。Comment列是对存储引擎的一个描述,Transactions列代表该存储引擎是否支持事务处理。XA列代表该存储引擎是否支持分布式事务。Savepoints代表该列是否支持部分事务回滚。


2、引擎功能介绍

对部分引擎的简要介绍：

| 存储引擎    | 描述                                 |
| ----------- | ------------------------------------ |
| `ARCHIVE`   | 用于数据存档（行被插入后不能再修改） |
| `BLACKHOLE` | 丢弃写操作，读操作会返回空内容       |
| `CSV`       | 在存储数据时，以逗号分隔各个数据项   |
| `FEDERATED` | 用来访问远程表                       |
| `InnoDB`    | 具备外键支持功能的事务存储引擎       |
| `MEMORY`    | 置于内存的表                         |
| `MERGE`     | 用来管理多个MyISAM表构成的表集合     |
| `MyISAM`    | 主要的非事务处理存储引擎             |
| `NDB`       | MySQL集群专用存储引擎                |


以下来自官网介绍 [第 16 章替代存储引擎_MySQL 8.0 参考手册](https://mysql.net.cn/doc/refman/8.0/en/storage-engines.html)

- [`InnoDB`](https://mysql.net.cn/doc/refman/8.0/en/innodb-storage-engine.html): MySQL 8.0 中的默认存储引擎。 `InnoDB`是 MySQL 的事务安全（符合 ACID）存储引擎，具有提交、回滚和崩溃恢复功能以保护用户数据。 `InnoDB`行级锁定（无需升级到更粗粒度的锁定）和 Oracle 风格的一致非锁定读取可提高多用户并发性和性能。`InnoDB`将用户数据存储在聚簇索引中，以减少基于主键的常见查询的 I/O。为了保持数据完整性， `InnoDB`还支持`FOREIGN KEY`引用完整性约束。有关 的更多信息`InnoDB`，请参阅 [第 15 章，*InnoDB 存储引擎*](https://mysql.net.cn/doc/refman/8.0/en/innodb-storage-engine.html)。
- [`MyISAM`](https://mysql.net.cn/doc/refman/8.0/en/myisam-storage-engine.html)：这些表占地面积小。 [表级锁定](https://mysql.net.cn/doc/refman/8.0/en/glossary.html#glos_table_lock) 限制了读/写工作负载的性能，因此它通常用于 Web 和数据仓库配置中的只读或以读为主的工作负载。
- [`Memory`](https://mysql.net.cn/doc/refman/8.0/en/memory-storage-engine.html)：将所有数据存储在 RAM 中，以便在需要快速查找非关键数据的环境中进行快速访问。该发动机以前称为`HEAP`发动机。它的用例正在减少；`InnoDB`凭借其缓冲池内存区域，提供了一种通用且持久的方式来将大部分或全部数据保存在内存中，并 `NDBCLUSTER`为庞大的分布式数据集提供快速键值查找。
- [`CSV`](https://mysql.net.cn/doc/refman/8.0/en/csv-storage-engine.html): 它的表格实际上是具有逗号分隔值的文本文件。CSV 表允许您以 CSV 格式导入或转储数据，以便与读写相同格式的脚本和应用程序交换数据。由于 CSV 表没有索引，您通常`InnoDB`在正常操作期间将数据保留在表中，并且仅在导入或导出阶段使用 CSV 表。
- [`Archive`](https://mysql.net.cn/doc/refman/8.0/en/archive-storage-engine.html)：这些紧凑的、未索引的表用于存储和检索大量很少引用的历史、存档或安全审计信息。
- [`Blackhole`](https://mysql.net.cn/doc/refman/8.0/en/blackhole-storage-engine.html): Blackhole 存储引擎接受但不存储数据，类似于 Unix`/dev/null`设备。查询总是返回一个空集。这些表可用于将 DML 语句发送到副本服务器的复制配置，但源服务器不保留其自己的数据副本。
- [`NDB`](https://mysql.net.cn/doc/refman/8.0/en/mysql-cluster.html)（也称为 [`NDBCLUSTER`](https://mysql.net.cn/doc/refman/8.0/en/mysql-cluster.html)）：此集群数据库引擎特别适用于需要尽可能高的正常运行时间和可用性的应用程序。
- [`Merge`](https://mysql.net.cn/doc/refman/8.0/en/merge-storage-engine.html)：使 MySQL DBA 或开发人员能够对一系列相同的`MyISAM`表进行逻辑分组，并将它们作为一个对象进行引用。适用于数据仓库等 VLDB 环境。
- [`Federated`](https://mysql.net.cn/doc/refman/8.0/en/federated-storage-engine.html)：提供链接独立的 MySQL 服务器以从许多物理服务器创建一个逻辑数据库的能力。非常适合分布式或数据集市环境。
- [`Example`](https://mysql.net.cn/doc/refman/8.0/en/example-storage-engine.html)：该引擎作为 MySQL 源代码中的示例，说明如何开始编写新的存储引擎。它主要是开发人员感兴趣的。存储引擎是一个 什么都不做的“存根” 。您可以使用此引擎创建表，但不能在其中存储或从中检索任何数据。



总结一些常用表的功能支持情况: (最常用的就是`InnoDB`和`MyISAM`，有时会提一下`Memory`)

| Feature                               | MyISAM | Memory  | InnoDB | Archive | NDB   |
| ------------------------------------- | ------ | ------- | ------ | ------- | ----- |
| B-tree indexes                        | yes    | yes     | yes    | no      | no    |
| Backup/point-in-time recovery         | yes    | yes     | yes    | yes     | yes   |
| Cluster database support              | no     | no      | no     | no      | yes   |
| Clustered indexes                     | no     | no      | yes    | no      | no    |
| Compressed data                       | yes    | no      | yes    | yes     | no    |
| Data caches                           | no     | N/A     | yes    | no      | yes   |
| Encrypted data                        | yes    | yes     | yes    | yes     | yes   |
| Foreign key support                   | no     | no      | yes    | no      | yes   |
| Full-text search indexes              | yes    | no      | yes    | no      | no    |
| Geospatial data type support          | yes    | no      | yes    | yes     | yes   |
| Geospatial indexing support           | yes    | no      | yes    | no      | no    |
| Hash indexes                          | no     | yes     | no     | no      | yes   |
| Index caches                          | yes    | N/A     | yes    | no      | yes   |
| Locking granularity                   | Table  | Table   | Row    | Row     | Row   |
| MVCC                                  | no     | no      | yes    | no      | no    |
| Query cache support                   | yes    | yes     | yes    | yes     | yes   |
| Replication support                   | yes    | Limited | yes    | yes     | yes   |
| Storage limits                        | 256TB  | RAM     | 64TB   | None    | 384EB |
| T-tree indexes                        | no     | no      | no     | no      | yes   |
| Transactions                          | no     | no      | yes    | no      | yes   |
| Update statistics for data dictionary | yes    | yes     | yes    | yes     | yes   |




## Mysql 系统数据库

1、mysql

用于存储MySQL的用户账户和权限信息，一些存储过程、事件的定义信息，一些运行过程中产生的日志信息，一些帮助信息以及时区信息等。

2、information_schema

保存着MySQL服务器维护的所有其他数据库的信息，比如有哪些表、哪些视图、哪些触发器、哪些列、哪些索引等等。这些信息并不是真实的用户数据，而是一些描述性信息，有时候也称之为元数据。

3、performance_schema

主要保存MySQL服务器运行过程中的一些状态信息，算是对MySQL服务器的一个性能监控。包括统计最近执行了哪些语句，在执行过程的每个阶段都花费了多长时间，内存的使用情况等等信息。

4、sys

主要是通过视图的形式把information_schema 和performance_schema结合起来，让程序员可以更方便的了解MySQL服务器的一些性能信息







## 参考资料

- [第8章 数据的家-MySQL的数据目录](https://relph1119.github.io/mysql-learning-notes/#/mysql/08-%E6%95%B0%E6%8D%AE%E7%9A%84%E5%AE%B6-MySQL%E7%9A%84%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%95)

- [Mysql构成 | CodeCanvas 技术分享](http://localhost:8080/deploy/database/mysql-structure.html#mysql-%E7%B3%BB%E7%BB%9F%E6%95%B0%E6%8D%AE%E5%BA%93)
