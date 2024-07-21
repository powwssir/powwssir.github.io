---
title: Linux
order: 4
date: 2024-07-13
category:
  - Linux
tag:
  - Linux
page:
  - frontmatter: false  
---

# Linux 环境部署


## 开发工具

### JDK

- 历史版本

JDK版本历史 [Java version history - Wikipedia](https://en.wikipedia.org/wiki/Java_version_history)

- 在线下载安装
>以下为jdk17 安装教程
::: tabs

<!-- OpenJDK -->
@tab OpenJDK


```shell
# 切换安装目录
# cd /usr/local

# 下载软件包（指定版本号）
# wget https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_linux-x64_bin.tar.gz

# 解压软件包
# tar -zxvf openjdk-17.0.2_linux-x64_bin.tar.gz

# 重命名目录
# mv jdk-17.0.2 open-jdk-17

# 删除软件包
# rm -rf openjdk-17.0.2_linux-x64_bin.tar.gz

# 编辑配置文件
vim /etc/profile

# 在配置文件的最下方添加以下内容
export JAVA_HOME=/usr/local/open-jdk-17
export CLASSPATH=.:$JAVA_HOME/lib
export PATH=$PATH:$JAVA_HOME/bin

# 重载配置文件
# source /etc/profile

# 查看版本号
# java -version
```

<!-- OracleJDK -->
@tab OracleJDK

```shell
# 切换安装目录
# cd /usr/local

# 下载软件包（最新版本）
# wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz

# 解压软件包
# tar -zxvf jdk-17_linux-x64_bin.tar.gz

# 重命名目录
# mv jdk-17.0.8 oracle-jdk-17

# 删除软件包
# rm -rf jdk-17_linux-x64_bin.tar.gz

# 编辑配置文件
vim /etc/profile

# 在配置文件的最下方添加以下内容
export JAVA_HOME=/usr/local/oracle-jdk-17
export CLASSPATH=.:$JAVA_HOME/lib
export PATH=$PATH:$JAVA_HOME/bin

# 重载配置文件
# source /etc/profile

# 查看版本号
# java -version
```

:::

- 离线下载安装

## 测试工具

### Stress

- 安装

::: tabs

<!-- yum -->
@tab yum

1、在线安装

```bash
yum install -y epel-release && yum install stress -y
```

2、离线安装

==待办==
:::

- 使用

1、CPU测试

```bash
# 压满6个cpu，执行100秒
stress --cpu 6 --timeout 100
简写: stress -c 6 -t 100
# 使用另一个终端工具登录被测服务器，使用top命令查看系统状况

```

2、内存测试

```bash
# 新增4个内存分配进程，每次分配大小730M，分配后不释放，长期保持测试 / 测试60秒
# 长期保持测试，需Ctrl+Z手动停止
stress --vm 4 --vm-bytes 730M --vm-keep
# 测试60秒
stress --vm 4 --vm-bytes 730M --timeout 60

# 执行期间使用命令top查看系统状况

```

3、I/O测试

```bash
# 新增6个I/O进程，测试100秒
stress -i 6 -t 100

# 执行期间先用命令top查看系统状况，再结合使用iostat/vmstat命令，若服务器联网则执行命令yum install systat安装，若无法联网请手动安装

```

说明：
stress -i 参数，它表示通过系统调用 sync() 来模拟 I/O 的问题，但这种方法实际上并不可靠。
因为 sync() 的本意是刷新内存缓冲区的数据到磁盘中，以确保同步。如果缓冲区内本来就没多少数据，那读写到磁盘中的数据也就不多，也就没法产生 I/O 压力。
这一点，在使用 SSD 磁盘的环境中尤为明显，很可能你的 iowait 总是 0，却单纯因为大量的系统调用，导致了系统CPU使用率 sys 升高。
这种情况，我在留言中也回复过，推荐使用 stress-ng 来代替 stress。

可以运行下面的命令，来模拟 iowait 的问题

```bash
# -i的含义还是调用sync，而—hdd则表示读写临时文件
$ stress-ng -i 1 --hdd 1 --timeout 600
```


4、磁盘及I/O测试

```bash
# 新增6个I/O进程，1个写进程，每次写1000M文件块，测试100秒
stress --io 6 -d 1 --hdd-bytes 1000M -t 100

# 执行期间使用top命令和free -h查看系统及内存状况

```

使用nohup 命令以及脚本执行以上命令

```bash
# 1、创建脚本文件并写入脚本

#!/bin/bash
echo "start"
nohup `压测命令` &
nohup `压测命令` &
echo "end"

示例:
#!/bin/bash
echo "start"
nohup `stress --vm 4 --vm-bytes 730M --vm-keep` &
nohup `stress -c 2` &
echo "end"

# 2、执行脚本 (执行后可以看到多出来一个日志文件)
nohup sh 脚本文件名 >日志文件名 2>&1 &

参数解释: 2>&1
  0 表示stdin标准输入，用户键盘输入的内容
  1 表示stdout标准输出，输出到显示屏的内容
  2 表示stderr标准错误，报错内容
  2>&1是一个整体，>左右不能有空格，即将错误内容重定向输入到标准输出中
  & 表示后台运行

示例:
nohup sh stress.sh >test.log 2>&1 &


# 3、执行期间使用命令top查看系统状况 
# 查看stress进程信息
ps -elf |grep stress |grep -v grep
# 
```


### fio

- 安装

1、在线安装

::: tabs

<!-- yum -->
@tab yum

```bash
yum install -y fio 
```
<!-- apt -->
@tab apt

```bash
apt-get install -y fio
```
:::

2、离线安装

==待办==

- 使用

可以使用 man fio 查询使用方法

fio 的选项非常多， 以下介绍几种常见场景(包括随机读、随机写、顺序读以及顺序写等)：

```bash
# 随机读
fio -name=randread -direct=1 -iodepth=64 -rw=randread -ioengine=libaio -bs=4k -size=1G -numjobs=1 -runtime=1000 -group_reporting -filename=/dev/sdb

# 随机写
fio -name=randwrite -direct=1 -iodepth=64 -rw=randwrite -ioengine=libaio -bs=4k -size=1G -numjobs=1 -runtime=1000 -group_reporting -filename=/dev/sdb

# 顺序读
fio -name=read -direct=1 -iodepth=64 -rw=read -ioengine=libaio -bs=4k -size=1G -numjobs=1 -runtime=1000 -group_reporting -filename=/dev/sdb

# 顺序写
fio -name=write -direct=1 -iodepth=64 -rw=write -ioengine=libaio -bs=4k -size=1G -numjobs=1 -runtime=1000 -group_reporting -filename=/dev/sdb 
```

参数解读：

direct，表示是否跳过系统缓存。上面示例中，设置的 1 ，就表示跳过系统缓存。

iodepth，表示使用异步 I/O（asynchronous I/O，简称AIO）时，同时发出的 I/O 请求上限。在上面的示例中，设置的是 64。

rw，表示 I/O 模式。上述示例中， read/write 分别表示顺序读/写，而 randread/randwrite 则分别表示随机读/写。

ioengine，表示 I/O 引擎，它支持同步（sync）、异步（libaio）、内存映射（mmap）、网络（net）等各种 I/O 引擎。上面示例中，设置的 libaio 表示使用异步 I/O。

bs，表示 I/O 的大小。示例中，设置的是 4K（这也是默认值）。

filename，表示文件路径，当然，它可以是磁盘路径（测试磁盘性能），也可以是文件路径（测试文件系统性能）。示例中，设置成了磁盘 /dev/sdb。不过注意，用磁盘路径测试写，会破坏这个磁盘中的文件系统，所以在使用前，一定要事先做好数据备份。


通常情况下，应用程序的 I/O 都是读写并行的，而且每次的I/O大小也不一定相同。==上面的几种场景，并不能精确模拟应用程序的 I/O 模式==。

幸运的是，fio 支持 I/O 的重放。借助 blktrace ，再配合上 fio，就可以实现对应用程序 I/O 模式的基准测试。需要先用 blktrace ，记录磁盘设备的 I/O 访问情况；然后使用 fio ，重放 blktrace 的记录。

比如执行以下命令来操作：

```bash
# 使用blktrace跟踪磁盘I/O，注意指定应用程序正在操作的磁盘
$ blktrace /dev/sdb

# 查看blktrace记录的结果
# ls
sdb.blktrace.0  sdb.blktrace.1

# 将结果转化为二进制文件
$ blkparse sdb -d sdb.bin

# 使用fio重放日志
$ fio --name=replay --filename=/dev/sdb --direct=1 --read_iolog=sdb.bin 
```

3、测试案例

顺序读测试报告示例：

```bash
read: (g=0): rw=read, bs=(R) 4096B-4096B, (W) 4096B-4096B, (T) 4096B-4096B, ioengine=libaio, iodepth=64
fio-3.1
Starting 1 process
Jobs: 1 (f=1): [R(1)][100.0%][r=16.7MiB/s,w=0KiB/s][r=4280,w=0 IOPS][eta 00m:00s]
read: (groupid=0, jobs=1): err= 0: pid=17966: Sun Dec 30 08:31:48 2018
   read: IOPS=4257, BW=16.6MiB/s (17.4MB/s)(1024MiB/61568msec)
    slat (usec): min=2, max=2566, avg= 4.29, stdev=21.76
    clat (usec): min=228, max=407360, avg=15024.30, stdev=20524.39
     lat (usec): min=243, max=407363, avg=15029.12, stdev=20524.26
    clat percentiles (usec):
     |  1.00th=[   498],  5.00th=[  1020], 10.00th=[  1319], 20.00th=[  1713],
     | 30.00th=[  1991], 40.00th=[  2212], 50.00th=[  2540], 60.00th=[  2933],
     | 70.00th=[  5407], 80.00th=[ 44303], 90.00th=[ 45351], 95.00th=[ 45876],
     | 99.00th=[ 46924], 99.50th=[ 46924], 99.90th=[ 48497], 99.95th=[ 49021],
     | 99.99th=[404751]
   bw (  KiB/s): min= 8208, max=18832, per=99.85%, avg=17005.35, stdev=998.94, samples=123
   iops        : min= 2052, max= 4708, avg=4251.30, stdev=249.74, samples=123
  lat (usec)   : 250=0.01%, 500=1.03%, 750=1.69%, 1000=2.07%
  lat (msec)   : 2=25.64%, 4=37.58%, 10=2.08%, 20=0.02%, 50=29.86%
  lat (msec)   : 100=0.01%, 500=0.02%
  cpu          : usr=1.02%, sys=2.97%, ctx=33312, majf=0, minf=75
  IO depths    : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=0.1%, >=64=100.0%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
     issued rwt: total=262144,0,0, short=0,0,0, dropped=0,0,0
     latency   : target=0, window=0, percentile=100.00%, depth=64

Run status group 0 (all jobs):
   READ: bw=16.6MiB/s (17.4MB/s), 16.6MiB/s-16.6MiB/s (17.4MB/s-17.4MB/s), io=1024MiB (1074MB), run=61568-61568msec

Disk stats (read/write):
  sdb: ios=261897/0, merge=0/0, ticks=3912108/0, in_queue=3474336, util=90.09% 
```

解读：

重点关注的是， slat、clat、lat ，以及 bw 和 iops 这几行。

1、slat、clat、lat 都是指 I/O 延迟（latency）：

slat 指从 I/O 提交到实际执行 I/O 的时长（Submission latency）

clat 指从 I/O 提交到 I/O 完成的时长（Completion latency）

lat 指的是从fio 创建 I/O 到 I/O 完成的总时长

这里需要注意的是，对同步 I/O 来说，由于 I/O 提交和I/O完成是一个动作，所以 slat 实际上就是 I/O 完成的时间，而 clat 是 0。而从示例可以看到，使用异步 I/O（libaio）时，lat 近似等于 slat + clat之和。

2、bw 吞吐量，上面的示例中,平均吞吐量大约是 16 MB（17005 KiB/1024）。

3、iops 每秒 I/O 的次数，上面示例中的平均 IOPS 为 4250。


## 网络测试工具

### hping3

[hping3 命令，Linux hping3 命令详解：测试网络及主机的安全 - Linux 命令搜索引擎](https://wangchujiang.com/linux-command/c/hping3.html)
==待办==

### pktgen

- 简介

Linux 内核自带的高性能网络测试工具,可以根据实际需要构造所需网络包，从而更准确地测试出目标服务器的性能

- 安装

在 Linux 系统中，你并不能直接找到 pktgen 命令。因为 pktgen 作为一个内核线程来运行，需要你加载 pktgen 内核模块后，再通过 /proc 文件系统来交互。下面就是 pktgen 启动的两个内核线程和 /proc 文件系统的交互文件：

```bash
$ modprobe pktgen
$ ps -ef | grep pktgen | grep -v grep
root     26384     2  0 06:17 ?        00:00:00 [kpktgend_0]
root     26385     2  0 06:17 ?        00:00:00 [kpktgend_1]
$ ls /proc/net/pktgen/
kpktgend_0  kpktgend_1  pgctrl
```

pktgen 在每个 CPU 上启动一个内核线程，并可以通过 /proc/net/pktgen 下面的同名文件，跟这些线程交互；而 pgctrl 则主要用来控制这次测试的开启和停止。

如果 modprobe 命令执行失败，说明你的内核没有配置 CONFIG_NET_PKTGEN 选项。这就需要你配置 pktgen 内核模块（即 CONFIG_NET_PKTGEN=m）后，重新编译内核，才可以使用。

在使用 pktgen 测试网络性能时，需要先给每个内核线程 kpktgend_X 以及测试网卡，配置 pktgen 选项，然后再通过 pgctrl 启动测试。

以发包测试为例，假设发包机器使用的网卡是 eth0，而目标机器的 IP 地址为 192.168.0.30，MAC 地址为 11:11:11:11:11:11。

![](./assets/pktgen01.jpg)

- 使用

1、发包测试示例:

```bash
# 定义一个工具函数，方便后面配置各种测试选项
function pgset() {
    local result
    echo $1 > $PGDEV

    result=`cat $PGDEV | fgrep "Result: OK:"`
    if [ "$result" = "" ]; then
         cat $PGDEV | fgrep Result:
    fi
}

# 为0号线程绑定eth0网卡
PGDEV=/proc/net/pktgen/kpktgend_0
pgset "rem_device_all"   # 清空网卡绑定
pgset "add_device eth0"  # 添加eth0网卡

# 配置eth0网卡的测试选项
PGDEV=/proc/net/pktgen/eth0
pgset "count 1000000"    # 总发包数量
pgset "delay 5000"       # 不同包之间的发送延迟(单位纳秒)
pgset "clone_skb 0"      # SKB包复制
pgset "pkt_size 64"      # 网络包大小
pgset "dst 192.168.0.30" # 目的IP
pgset "dst_mac 11:11:11:11:11:11"  # 目的MAC

# 启动测试
PGDEV=/proc/net/pktgen/pgctrl
pgset "start"
```
测试完成后，结果可以从 /proc 文件系统中获取。通过下面代码段中的内容，我们可以查看刚才的测试报告：

```bash
$ cat /proc/net/pktgen/eth0
Params: count 1000000  min_pkt_size: 64  max_pkt_size: 64
     frags: 0  delay: 0  clone_skb: 0  ifname: eth0
     flows: 0 flowlen: 0
...
Current:
     pkts-sofar: 1000000  errors: 0
     started: 1534853256071us  stopped: 1534861576098us idle: 70673us
...
Result: OK: 8320027(c8249354+d70673) usec, 1000000 (64byte,0frags)
  120191pps 61Mb/sec (61537792bps) errors: 0
```

你可以看到，测试报告主要分为三个部分：

第一部分的 Params 是测试选项；

第二部分的 Current 是测试进度，其中， packts so far（pkts-sofar）表示已经发送了 100 万个包，也就表明测试已完成。

第三部分的 Result 是测试结果，包含测试所用时间、网络包数量和分片、PPS、吞吐量以及错误数。


根据上面的结果，我们发现，PPS 为 12 万，吞吐量为 61 Mb/s，没有发生错误。那么，12 万的 PPS 好不好呢？

作为对比，你可以计算一下千兆交换机的 PPS。交换机可以达到线速（满负载时，无差错转发），它的 PPS 就是 1000Mbit 除以以太网帧的大小，即 1000Mbps/((64+20)*8bit) = 1.5 Mpps（其中，20B 为以太网帧前导和帧间距的大小）。

你看，即使是千兆交换机的 PPS，也可以达到 150 万 PPS，比我们测试得到的 12 万大多了。所以，看到这个数值你并不用担心，现在的多核服务器和万兆网卡已经很普遍了，稍做优化就可以达到数百万的 PPS。而且，如果你用了 DPDK 或 XDP ，还能达到千万数量级。

### iperf

- 简介

- 安装

```bash
# Ubuntu
apt-get install iperf3
# CentOS
yum install iperf3
```

- 使用

1、TCP/UDP 性能测试案例

先在目标机器上启动 iperf 服务端

```bash
# -s表示启动服务端，-i表示汇报间隔，-p表示监听端口
$ iperf3 -s -i 1 -p 10000
```


接着，在另一台机器上运行 iperf 客户端，运行测试：

```bash
# -c表示启动客户端，192.168.0.30为目标服务器的IP
# -b表示目标带宽(单位是bits/s)
# -t表示测试时间
# -P表示并发数，-p表示目标服务器监听端口
$ iperf3 -c 192.168.0.30 -b 1G -t 15 -P 2 -p 10000
```

稍等一会儿（15秒）测试结束后，回到目标服务器，查看 iperf 的报告：

```bash
[ ID] Interval           Transfer     Bandwidth
...
[SUM]   0.00-15.04  sec  0.00 Bytes  0.00 bits/sec                  sender
[SUM]   0.00-15.04  sec  1.51 GBytes   860 Mbits/sec                  receiver
···
```


最后的 SUM 行就是测试的汇总结果，包括测试时间、数据传输量以及带宽等。按照发送和接收，这一部分又分为了 sender 和 receiver 两行。

从测试结果你可以看到，这台机器 TCP 接收的带宽（吞吐量）为 860 Mb/s， 跟目标的 1Gb/s 相比，还是有些差距的。

### netperf



### ab

- 简介

ab命令 是一个测试 Apache http 服务器的工具

- 安装

1、在线安装

::: tabs

<!-- yum -->
@tab yum

```bash
yum install httpd-tools 
```
<!-- apt -->
@tab apt

```bash
sudo apt-get install apache2-utils
```

:::

2、离线安装

==待办==

- 使用

可以使用man ab 查看选项含义

1、语法:

```bash
ab  [  -A auth-username:password ] [ -b windowsize ] [ -B local-address ] [ -c concurrency ] [ -C cookie-name=value ] [ -d ] [ -e csv-file ] [ -f protocol ] [ -g gnuplot-file ] [ -h ] [ -H custom-header ] [ -i ] [ -k ] [ -n requests ] [ -p POST-
       file ] [ -P proxy-auth-username:password ] [ -q ] [ -r ] [ -s timeout ] [ -S ] [ -t timelimit ] [ -T content-type ] [ -u PUT-file ] [ -v verbosity] [ -V ] [ -w ] [ -x <table>-attributes ]  [  -X  proxy[:port]  ]  [  -y  <tr>-attributes  ]  [  -z
       <td>-attributes ] [ -Z ciphersuite ] [http[s]://]hostname[:port]/path
```

2、选项:

```bash
-A auth-username:password
      #  支持基本的验证证书,用户名和密码之间使用"冒号"                    :
      # 分隔开,ab将以明文方式传送过去.不管服务器是不是需要
      # ,也就是说你的服务器需要支持401认证.

-c concurrency
      # 同时向服务器端发送的请求数目，默认状态下是一次 只执行一个http请求.

-C cookie-name=value
      # Add a Cookie: line to the request. The argument is typically in the
      # form of a name=value pair. This field is repeatable.

-d    #  Do not display  the  "percentage  served  within  XX  [ms]  table".
      # (legacy support).

-e csv-file
      # Write  a  Comma  separated value (CSV) file which contains for each
      # percentage (from 1% to 100%) the time (in milli seconds) it took to
      # serve  that percentage of the requests. This is usually more useful
      # than the 'gnuplot' file; as the results are already 'binned'.

-g gnuplot-file
      # Write all measured values out as a 'gnuplot' or TSV  (Tab  separate
      # values)  file.  This file can easily be imported into packages like
      # Gnuplot, IDL, Mathematica, Igor or even Excel. The labels  are  on
      # the first line of the file.
-h    # 显示使用说明
-H custom-header
      # 向请求包追加附加的标题字串.此参数应该是有效的标题         行(header
      # line)形式,通常使用冒号":"来分隔有效配对 (valid  pair)例如  'Accept-
      # Encoding: zip/zop;8 bit';

-i    # 使用一个 http 头(HEAD) 来替换 GET方法.不可以掺入POST 方法

-k    #  允许http      KeepAlive      ；也就是说执行多个请求在一个      http
      # 会话当中，默认是不允许的也就是no KeepAlive啦;)

-n requests
      # 执行一次测试会话的时候所发出的请求数目,默认是执行一个单一的请求
      # 当然了这样的测试结果也就没什么意义了

-p POST-file
      # 测试程序也就是ab,将向Apache server发送带有HTTP POST 的请求.

-P proxy-auth-username:password
      # 当需要通过代理测试一台 HTTP 服务器的时候而你的代理
      # 又需要用户名密码验证,这时你可以使用这个选项,同样
      # 用户名与密码之间使用冒号":"分隔开,ab将之以明文的方式
      # 发送出去,当然,前提是你的代理是处于407认证状态的

-q    #  When processing more than 150 requests, ab outputs a progress count
      # on  stderr  every  10% or 100 requests or so. The -q flag will sup‐
      # press these messages.

-s    #  When compiled in (ab -h will show you) use the SSL protected  https
      # rather  than  the  http  protocol. This feature is experimental and
      # very rudimentary. You probably do not want to use it.

-S    #  Do not display the median and standard deviation values,  nor  dis‐
      # play  the  warning/error  messages  when the average and median are
      # more than one or two times the standard deviation  apart.  And  de‐
      # fault to the min/avg/max values. (legacy support).

-t timelimit
      #  设置测试的时间的长短，使用这个选项ab将自动设置
      # 测试请求会话数目为50000，然后以你设置的时间为
      # 固定周期.默认状态下是没有时限的，也就是直到完成
      # 你所设置的请求数目为止.

-T content-type
      # 内容类型标头,使用在POST数据的时候.

-v verbosity
      # 设置冗余级别,4级打印出每个请求标头的详细信息,
      # 3级打印出回应代码(例如,404,200),2级打印出警告 信息和指示消息

-V    # 显示版本号并且退出
-w    # 打印输出结果到HTML表中. 默认的表是两列n行白底黑框

-x <table>-attributes
      # 使用字串来描述表的属性,该属性字串应该插入到<table 这里 >

-X proxy[:port]
      # Use a proxy server for the requests.

-y <tr>-attributes
      # 用于生成html表格每行的属性名 (<tr>)

-z <td>-attributes
      # 用于生成html表格每列的属性名 (<td>)
```

3、测试案例

案例1: 并发请求

```bash
# 10个并发， 请求500次
ab -c 10 -n 500 https://www.qq.com/
```

案例2: HTTP 性能测试案例

准备两个机器,在目标机器上，使用 Docker 启动一个 Nginx 服务，然后用 ab 来测试它的性能。

首先，在目标机器上运行下面的命令：

```bash
$ docker run -p 80:80 -itd nginx
```

而在另一台机器上，运行 ab 命令，测试 Nginx 的性能：

```bash
# -c表示并发请求数为1000，-n表示总的请求数为10000
$ ab -c 1000 -n 10000 http://192.168.0.30/


...
Server Software:        nginx/1.15.8
Server Hostname:        192.168.0.30
Server Port:            80

...

Requests per second:    1078.54 [#/sec] (mean)
Time per request:       927.183 [ms] (mean)
Time per request:       0.927 [ms] (mean, across all concurrent requests)
Transfer rate:          890.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   27 152.1      1    1038
Processing:     9  207 843.0     22    9242
Waiting:        8  207 843.0     22    9242
Total:         15  233 857.7     23    9268

Percentage of the requests served within a certain time (ms)
  50%     23
  66%     24
  75%     24
  80%     26
  90%    274
  95%   1195
  98%   2335
  99%   4663
 100%   9268 (longest request)
```

可以看到，ab 的测试结果分为三个部分，分别是请求汇总、连接时间汇总还有请求延迟汇总。以上面的结果为例，我们具体来看。

在请求汇总部分，你可以看到：

- Requests per second 为 1074；

- 每个请求的延迟（Time per request）分为两行，第一行的 927 ms 表示平均延迟，包括了线程运行的调度时间和网络请求响应时间，而下一行的 0.927ms ，则表示实际请求的响应时间；

- Transfer rate 表示吞吐量（BPS）为 890 KB/s。

- 连接时间汇总部分，则是分别展示了建立连接、请求、等待以及汇总等的各类时间，包括最小、最大、平均以及中值处理时间。

- 最后的请求延迟汇总部分，则给出了不同时间段内处理请求的百分比，比如， 90% 的请求，都可以在 274ms 内完成。


### wrk

- 简介

作为一个 HTTP 性能测试工具，内置了 LuaJIT，方便根据实际需求，生成所需的请求负载，或者自定义响应的处理方法。 



- 安装

wrk 工具本身不提供 yum 或 apt 的安装方法，需要通过源码编译来安装。比如，你可以运行下面的命令，来编译和安装 wrk：

```bash
$ https://github.com/wg/wrk
$ cd wrk
$ apt-get install build-essential -y
$ make
$ sudo cp wrk /usr/local/bin/
```

- 使用

wrk 在调用 Lua 脚本时，可以将 HTTP 请求分为三个阶段，即 setup、running、done，如下图所示：

![[图片来源 网易云博客](https://sq.sf.163.com/blog/article/200008406328934400)](./assets/wrk01.jpg)

比如，你可以在 setup 阶段，为请求设置认证参数（来自于 wrk 官方示例）：

```bash
-- example script that demonstrates response handling and
-- retrieving an authentication token to set on all future
-- requests

token = nil
path  = "/authenticate"

request = function()
   return wrk.format("GET", path)
end

response = function(status, headers, body)
   if not token and status == 200 then
      token = headers["X-Token"]
      path  = "/resource"
      wrk.headers["X-Token"] = token
   end
end
```

而在执行测试时，通过 -s 选项，执行脚本的路径：

```bash
$ wrk -c 1000 -t 2 -s auth.lua http://192.168.0.30/
```

wrk 需要你用 Lua 脚本，来构造请求负载。这对于大部分场景来说，可能已经足够了 。不过，它的缺点也正是，所有东西都需要代码来构造，并且工具本身不提供 GUI 环境。

像 Jmeter 或者 LoadRunner（商业产品），则针对复杂场景提供了脚本录制、回放、GUI 等更丰富的功能，使用起来也更加方便。

- 案例

案例1: 测试nginx性能

wrk 的命令行参数比较简单。比如，我们可以用 wrk 测试 Nginx 的性能

```bash
# -c表示并发连接数1000，-t表示线程数为2
$ wrk -c 1000 -t 2 http://192.168.0.30/
Running 10s test @ http://192.168.0.30/
  2 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    65.83ms  174.06ms   1.99s    95.85%
    Req/Sec     4.87k   628.73     6.78k    69.00%
  96954 requests in 10.06s, 78.59MB read
  Socket errors: connect 0, read 0, write 0, timeout 179
Requests/sec:   9641.31
Transfer/sec:      7.82MB
```

结果分析:

每秒请求数为 9641，吞吐量为 7.82MB，平均延迟为 65ms






## 脚本工具

### 脚本语法
==待办==

- 数据类型

- 变量

- 操作符

- 控制流程语句

- 函数



### 脚本执行

方式一: 将脚本作为bash解释器的参数执行：此时首行的#!/bin/bashshabang可以不用写

```bash
bash demo.sh：直接将脚本文件作为bash命令的参数
bash -x demo.sh：使用-x参数可以查看脚本的详细执行过程
```

方式二: 将脚本作为独立的可执行文件执行：此时首行的#!/bin/bashshabang必须写，用来指定shell解释器路径；同时脚本必须可执行权限

```bash
chmod +x demo.sh：给脚本添加执行权限
./demo.sh：执行脚本文件，在这里需要使用./demo.sh表明当前目录下脚本，因为PATH环境变量中没有当前目录，写成demo.sh系统会去/sbin、/sbin等目录下查找该脚本，无法找到该脚本文件执行，造成报错
```




### 案例演示

```bash
#!/bin/sh
cd ~
mkdir shell_tut
cd shell_tut

for ((i=0; i<10; i++)); do
	touch test_$i.txt
done
```

解读:

- 第1行： `#`称为sharp，`!`在unix行话里称为bang，合起来简称就是常见的shabang ，`#!/bin/bash` 指定了shell脚本解释器bash的路径，即使用bash程序作为该脚本文件的解释器，当然也可以使用其它的解释器/bin/sh等，根据具体环境进行相应选择 

- 第2行：切换到当前用户的home目录

- 第3行：创建一个目录shell_tut

- 第4行：切换到shell_tut目录

- 第5行：循环条件，一共循环10次

- 第6行：创建一个test_0…9.txt文件

- 第7行：循环体结束

```bash
#!/bin/bash
# 注释信息
echo_str="hello world"
test(){
        echo $echo_str
}
test echo_str
```

解读：

- echo_str是字符串变量，通过$进行引用变量的值

- test是自定义函数名，通过函数名 传入参数格式进行函数的调用
- echo是shell命令，相对于c中的printf
- #字符用来注释shell脚本的


### 常用类库


命令查询 参见 [Linux查询手册](../query/linux-command.md)



## 参考资料

- [Linux系统稳定性压测工具-Stress安装及使用 - 小白典 - 博客园](https://www.cnblogs.com/dyd168/p/14279367.html)

- [Linux性能优化实战_Linux_性能调优-极客时间](https://time.geekbang.org/column/intro/140)

- [脚本结构 — ShellScript 1.0.0 文档](https://shellscript.readthedocs.io/zh-cn/latest/1-syntax/1-scriptstruct/)

- [30min_guides/shell.md at master · qinjx/30min_guides](https://github.com/qinjx/30min_guides/blob/master/shell.md)