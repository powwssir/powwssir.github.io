---
title: Docker查询手册
order: 1
date: 2024-07-13
category:
  - Docker
tag:
  - Docker部署
page:
  - frontmatter: false  
---

## 说明

记录docker 以及 docker compose 部署各类技术的流程 方便快速部署



## 容器工具安装


::: tip 准备工作
1、先查看 docker 容器实例确认版本类型 进入到docker容器 执行
```shell
cat /etc/os-release
```

2、根据linux服务器版本确定管理工具

以下是一些常见的 Linux 发行版及其默认的包管理工具:
- Ubuntu、Debian：apt（Advanced Package Tool）是默认的包管理工具。它提供了 apt-get 和 apt-cache 等命令。
- CentOS、Fedora、RHEL：yum（Yellowdog Updater Modified）是默认的包管理工具，用于 RPM 包管理系统。
- openSUSE：zypper 是默认的包管理工具。
- Arch Linux：pacman 是 Arch Linux 的包管理工具。
- Slackware：Slackware 使用自己的包管理工具，称为 pkgtools。
::: 




### ifconfig、ping、vim

- 方式一

::: tabs

<!-- apt -->
@tab apt
同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，获取最新软件包
```shell
apt-get update
```

安装 ifconfig

```shell
apt install net-tools
```

安装 ping 命令

```shell
apt install iputil-ping
```

安装 vim 命令

```shell
apt-get install vim
```
<!-- yum -->
@tab yum

:::


- 方式二

::: tabs

<!-- apt -->
@tab apt
```
# 容器内
apt-get update && apt install -y net-tools iputils-ping vim

# 容器外
docker exec -it 容器名称/id apt install -y net-tools iputils-ping vim
```
<!-- yum -->
@tab yum

:::





### 常见问题



### 参考资料

- [docker容器实例安装](https://blog.csdn.net/balckghost_xin/article/details/129760019)

- [各种Linux服务器版本，自带的包管理工具汇总整理_opensuse包管理器-CSDN博客](https://blog.csdn.net/m0_57021623/article/details/132540492)


## 容器命令查询

::: tip docker 命令汇总
1、man docker
```shell
# > 将命令输出到指定文件
man docker > docker-command.txt
```

```txt
NAME
       docker - Docker image and container command line interface
SYNOPSIS
       docker [OPTIONS] COMMAND [ARG...]
       docker [--help|-v|--version]

DESCRIPTION
       docker is a client for interacting with the daemon (see dockerd(8)) through the CLI.
       The Docker CLI has over 30 commands. The commands are listed below and each has its own man page which explains usage and arguments.
       To see the man page for a command run man docker .

OPTIONS
       --help
         Print usage statement
       --config=""
         Specifies the location of the Docker client configuration files. The default is '~/.docker'.
       -D, --debug=true|false
         Enable debug mode. Default is false.
       -H, --host=[unix:///var/run/docker.sock]: tcp://[host]:[port][path] to bind or unix://[/path/to/socket] to use.
         The socket(s) to bind to in daemon mode specified using one or more
         tcp://host:port/path, unix:///path/to/socket, fd://* or fd://socketfd.
         If the tcp port is not specified, then it will default to either 2375 when
         --tls is off, or 2376 when --tls is on, or --tlsverify is specified.
       -l, --log-level="debug|info|warn|error|fatal"
         Set the logging level. Default is info.
       --tls=true|false
         Use TLS; implied by --tlsverify. Default is false.
       --tlscacert=~/.docker/ca.pem
         Trust certs signed only by this CA.
       --tlscert=~/.docker/cert.pem
         Path to TLS certificate file.
       --tlskey=~/.docker/key.pem
         Path to TLS key file.
       --tlsverify=true|false
         Use TLS and verify the remote (daemon: verify client, client: verify daemon).
         Default is false.

       -v, --version=true|false
         Print version information and quit. Default is false.
COMMANDS
       Use "docker help" or "docker --help" to get an overview of available commands.
EXAMPLES
       For specific client examples please see the man page for the specific Docker command. For example:
       man docker-run

```

2、docker --help

```shell
# > 将命令输出到指定文件
 docker --help > docker-help.txt
```

```txt
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  config      Manage Swarm configs
  node        Manage Swarm nodes
  secret      Manage Swarm secrets
  service     Manage Swarm services
  stack       Manage Swarm stacks
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
```

:::

::: tip 命令参数详情

可以使用man docker xxx命令 查询命令参数选项 比如说:
man docker pull

```shell
NAME
       docker-pull - Download an image from a registry
SYNOPSIS
       docker pull [OPTIONS] NAME[:TAG|@DIGEST]
DESCRIPTION
       Alias for docker image pull.

OPTIONS
       -a, --all-tags[=false]      Download all tagged images in the repository
       --disable-content-trust[=true]      Skip image verification
       -h, --help[=false]      help for pull
       --platform=""      Set platform if server is multi-platform capable
       -q, --quiet[=false]      Suppress verbose output

```
::: 

### Docker镜像操作


```shell
# 搜索镜像：docker search + 镜像名字
$ docker search nginx

# 从registry拉取镜像：docker pull + 镜像名字:版本号
# 格式: docker pull [OPTIONS] NAME[:TAG|@DIGEST]
# TAG：标签，不写的话默认是 latest 最新版 
$ docker pull nginx:latest 

# 从registry仓库提交镜像：docker push + 仓库名:标签
$ docker push repro1:v1.0

# 查看本地镜像: docker images
$ docker images

# 使用Dockerfile创建镜像: docker build + 目录，.代表当前目录，-t表示加标签
$ docker build -t mynginx:1.0 .

# 删除一个或多个镜像: docker rmi + 镜像1 + 镜像2
$ docker rmi mynginx:1.0 mynginx:2.0

# 删除未标记或未用过的镜像
$ docker image prune

# 删除未使用过的镜像
$ docker image prune -a

# 给镜像加标记： docker tag 镜像标签 新镜像标签名
$ docker tag mynginx:1.0 nginx1

# 把镜像保存为.tar文件: docker save 镜像 > 文件
$ docker save mynginx:1.0 > mynginx_v1.tar

# 从.tar文件载入镜像: docker load -i .tar文件
$ docker load -i mynginx_v1.tar

# 根据容器创建镜像：docker commit 容器名 镜像名
$ docker commit 


# 从 tar 归档文件中创建镜像
# docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
$ docker import test.tar poloyy/tomcat
```
### Dockerfile文件参数

使用`$ docker build`命令构建镜像时需要用到Dockerfile，它通常会包含如下命令：

| 命令       | 描述                                                         | 示例                                                         |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| FROM       | 指定基础镜像                                                 | FROM python:3.8.3-alpine                                     |
| MAINTAINER | 镜像创建者                                                   | MAINTAINER 大江狗                                            |
| COPY       | 添加宿主机文件到容器，复制                                   | COPY . /html/myapp                                           |
| ADD        | 添加宿主机文件到容器，复制+解压                              | ADD myfile.tar /html/myapp                                   |
| RUN        | 创建镜像时要执行的命令                                       | RUN pip install -r requirements.txt                          |
| USER       | 切换执行后续命令的用户和用户组, 但这个用户必需首先已使用RUN的命令进行创建好了。 | RUN groupadd -r redis && useradd -r -g redis redis; USER redis(切换用户) |
| WORKDIR    | 指定工作目录                                                 | WORKDIR /html/myapp                                          |
| CMD        | 容器启动时默认要运行的程序。如果执行 docker run 后面跟启动命令会被覆盖掉。 | CMD [“/bin/bash”]                                            |
| ENV        | 设置环境变量                                                 | ENV APP_HOME /html/myapp                                     |
| ENTRYPOINT | 同CMD，但其不会被覆盖，可以和docker run命令传递的参数进行拼接执行。 | 如果设置：ENTRYPOINT [“nginx”, “-c”] ， 运行`$ docker run mynginx_1 -c /etc/nginx/myweb.conf`将默认执行命令：`nginx -c /etc/nginx/myweb.conf`。 |
| VOLUME     | 定义匿名数据卷。在启动容器时忘记挂载数据卷，会自动挂载到匿名卷。 | VOLUME /tmp                                                  |
| EXPOSE     | 容器暴露端口，供link到当前容器或通过docker network的容器，不会和宿主机端口映射关系。 | EXPOSE 8080                                                  |

使用案例 详见[Docker部署](../environment/docker.md)

### Docker容器操作

```shell
# 创建容器: docker create + 选项(-i, -t, -d, -p, -v, -e) + 镜像
$ docker create --name mynginx_1 -it -p 8080:80 mynginx:1.0

# 各选项含义
# -i:以交互模式运行容器，通常与-t 同时使用；
# -d:后台运行容器，并返回容器ID；
# -p:端口隐射, 宿主机在前，容器在后
# -P:随机映射宿主机端口
# -t:为容器重新分配一个伪输入终端，通常与-i 同时使用；
# -v:目录挂载
# --entrypoint: 指定进入点
# --restart=always: 服务重启

# 启动容器：docker start + 容器名
$ docker start mynginx_1

# 停止一个正在运行的容器: docker stop 容器
$ docker stop mynginx_1

# 重启容器：docker restart + 容器名
$ docker restart mynginx_1

# 创建 + 运行容器: docker run + 选项 + 镜像 + 命令
$ docker run --name mynginx_1 -it -p 8080:80 mynginx:1.0
$ docker run -it ubuntu /bin/bash

# 暂停/恢复一个或多个容器中的所有进程
$ docker pause tomcat7
$ docker unpause tomcat7

# 查看正在运行中的容器：docker ps
$ docker ps

# 查看所有容器，包括停止运行的容器: docker ps -a
$ docker ps -a

# 容器重命名：docker rename 老名字 新名字
$ docker rename mynginx_1 mynginx_2

# 删除一个容器：docker rm 容器名
$ docker rm mynginx_1

# 强制删除一个正在运行的容器：docker rm -f 容器名
$ docker rm -f mynginx_1

# 删除已停止运行的所有容器: docker container prune
$ docker container prune

# 拷贝文件，从容器到宿主机：docker cp 容器名:容器内路径 宿主机文件路径
$ docker cp myweb_1:/index.html index.html

# 拷贝文件，从宿主机到容器：docker cp 宿主机文件路径 容器名:容器内路径
$ docker cp index.html myweb_1:/index.html 

# 进入运行的容器，执行命令: docker exec + 选项 + 容器名 + 命令 + 参数
# 推荐大家使用 docker exec命令，使用此命令即使exit容器终端，也不会导致容器的停止
$ docker exec -it mynginx_1 /bin/bash
$ docker exec -it mynginx_1 /bin/bash start.sh

# 查看容器内已修改文件：docker diff 容器名
$ docker diff mynginx_1

# 查看容器日志：docker logs + 容器名
$ docker logs web

# 查看容器内运行进程：docker top + 容器名
$ docker top web

# 获取容器/镜像的元数据（JSON格式）：docker inspect + 容器名
$ docker inspect web

# 利用inspect命令查看容器的IP地址
# 格式: docker inspect [OPTIONS] NAME|ID [NAME|ID...]
$ docker inspect web | grep "IPAddress"

# 查看运行容器的统计数据：docker stats
$ docker stats

# 将容器的文件系统导出为 tar 文件
$ docker export f299f501774c > hangger_server.tar

# 更新容器的配置  
$ docker update [CONTAINER]

# 显示 Docker 系统信息，包括镜像和容器数
$ docker info [OPTIONS]

# 显示 Docker 版本信息
$ docker version [OPTIONS]
```

```shell
# 列出所有数据卷
$ docker volume ls

# 使用过滤，列出所有未使用的数据卷
$ docker volume ls --filter dangling=true

# 删除一个数据卷
# 容器正在使用的数据卷不能删除，绑定挂载的无法删除。
$ docker volume rm <volume_name>
```

```shell
# mysite1-network是局域网的名字，可以自定义。默认bridge模式。
$ docker network create mysite1-network 

# 利用--driver或-d指定使用bridge驱动，创建mysite2-network网络
$ docker network create –-driver bridge mysite2-network

# 查看已创建的network列表
$ docker network ls  

# 查看特定的网络下有哪些容器
$ docker network inspect mysite1-network

# 运行新的容器，并加入到mysite1-network网络中
# --network 表示这个容器要连接到的网络
# --network-alias 表示这个容器在此网络中的名称，也可以使用--ip来指定容器的ip
$ docker run --name=docker-web -d --network=mysite1-network 
--network-alias=web docker-web-image

# 将已经在运行的容器加入网络使用以下命令, 容器名为docker-web，别名为web
# 容器可以加入到多个网络
$ docker network connect --alias=web --network=mysite1-network docker-web

# 连接网络时为docker-web容器指定ip地址
$ docker network connect --ip=192.10.36.122 multi-host-network docker-web

# 断开docker-web容器与mysite1-network的连接
$ docker network disconnet mysite1-network docker-web

# 删除mysite1-network网络
$ docker network rm mysite1-network

# 利用inspect命令查看容器的IP地址
$ docker inspect web | grep "IPAddress"

# 查看容器端口映射：docker port 容器名
$ docker port grafana

```

## Docker-Compose 命令

docker-compose 命令格式为：

```shell
docker-compose [-f <arg>] [options] [COMMAND] [ARGS]

[-f <arg>]：配置文件(docker-compose.yml)路径，也可以在 [options] 中设置，若都不设置则默认为当前目录下的 docker-compose.yml
[options]：其他配置选项
[COMMAND]：命令
[ARGS]：命令的参数
```

配置项



| 配置项                | 对应值     | 对应含义                                                     |
| --------------------- | ---------- | ------------------------------------------------------------ |
| -f \| --file          | 路径       | 配置文件路径，默认为当前目录下的 docker-compose.yml          |
| -p \| --project-name  | 名称       | 配置项目别名，默认为当前目录名                               |
| -c \| --context       | 名称       | 配置内容名称                                                 |
| --verbose             | 不需要设置 | 显示更多输出内容(详细细节)                                   |
| --log-level           | 5选1       | 配置日志的级别，值为： DEBUG(调试)、INFO(信息)、WARNING(警告)、ERROR(错误)、CRITICAL(严重) |
| --no-ansi             | 不需要设置 | 不打印显示 ANSI 字符                                         |
| -v \| --version       | 不需要设置 | 打印当前 docker-compose 版本并退出                           |
| -H \| --host          | host值     | 守护进程 docket 连接的 host                                  |
| --tls                 | 不需要设置 | 使用 TLS 协议 (安全传输层协议)，参数 --tlsverify 默认会设置该值 |
| --tlscacert           | 路径       | 仅相信由此 CA 签署的证书                                     |
| --tlscert             | 路径       | TLS 证书路径                                                 |
| --tlskey              | 路径       | TLS 证书key 路径                                             |
| --tlsverify           | 不需要设置 | 使用 TLS 并验证远程                                          |
| --skip-hostname-check | 不需要设置 | 跳过证书检查                                                 |
| --project-directory   | 路径       | 配置目录的别名，默认使用 docker-compose.yml 所在的目录名     |
| --compatibility       | 不需要设置 | 如果设置该项，则将尝试将 配置文件中的 deploy 秘钥转化为他们的非swarm 等价项 |
| --env-file            | 路径       | 配置环境参数(定义的环境变量)文件路径                         |


```shell
# 默认使用docker-compose.yml构建镜像
$ docker-compose build
$ docker-compose build --no-cache # 不带缓存的构建

# 指定不同yml文件模板用于构建镜像
$ docker-compose build -f docker-compose1.yml

# 列出Compose文件构建的镜像
$ docker-compose images                          

# 启动所有编排容器服务
$ docker-compose up -d

# 查看正在运行中的容器
$ docker-compose ps 

# 查看所有编排容器，包括已停止的容器
$ docker-compose ps -a

# 进入指定容器执行命令
$ docker-compose exec nginx bash 
$ docker-compose exec web python manage.py migrate --noinput

# 查看web容器的实时日志
$ docker-compose logs -f web

# 停止所有up命令启动的容器
$ docker-compose down 

# 停止所有up命令启动的容器,并移除数据卷
$ docker-compose down -v

# 重新启动停止服务的容器
$ docker-compose restart web

# 暂停web容器
$ docker-compose pause web

# 恢复web容器
$ docker-compose unpause web

# 删除web容器，删除前必需停止stop web容器服务
$ docker-compose rm web  

# 查看各个服务容器内运行的进程 
$ docker-compose top                 
```

### Docker-Compose 文件参数

```yaml
# 第一部分: Building(构建镜像)
web:
  # 使用当前目录下的Dockerfile
  build: .
  args: # 增加额外参数
    APP_HOME: app
  volumes: # 目录挂载
    - .:/code
  depends_on: # 依赖db和redis
    - db
    - redis
    
  # 使用定制化的Dockerfile，指定新目录相对路径和文件名
  build:
    context: ./dir 
    dockerfile: Dockerfile.dev
    container_name: app # 自定义容器名
    
  # 基于现有镜像构建
  image: ubuntu
  image: ubuntu:14.04
  image: remote-registry:4000/postgresql
  image: bcbc65fd
  
# 第二部分: Ports(端口)
  ports: # 指定端口映射，HOST:Container
    - "6379" # 指定容器的端口6379，宿主机会随机映射端口
    - "8080:80"  # 宿主机端口8080，对应容器80

  # 暴露端口给-link或处于同一网络的容器，不暴露给宿主机。
  expose: ["3000"]
  
# 第三部分: Environment Variables(环境变量)
  environment:
    MODE: development
    SHOW: 'true'
    
  # 等同于
  environment:
    - MODE=development
    - SHOW: 'true'
  
  # 使用环境变量.env文件
  env_file: .env
  env_file:
    - ./common.env
    - ./apps/web.env

# 第四部分：commands (命令)
  # 容器启动后默认执行命令
  command: bundle exec thin -p 3000
  command: ['/bin/bash/', 'start.sh']
 
  # 容器启动后程序入口
  entrypoint: /code/entrypoint.sh
  
# 第五部分：Networks(网络)
  networks: # 使用bridge驱动创建名为frontend的网络
    frontend:
      driver: bridge
    
    networks: # 使用创建的网络进行通信
      - frontend
      
    # 加入已经存在的外部网络
    networks: 
      default:
        external:
          name: my-pre-existing-network

# 第六部分：Volumes(数据卷)
  volumes: # 创建名为postgres_data的数据卷
    postgres_data:
    
    db:
      image: postgres:latest
      volumes:
        - postgres_data:/var/lib/postgresql/data
      
# 第七部分：External Links(外部链接)
# 目的是让Compose能够连接那些不在docker-compose.yml中定义的单独运行容器
  services:
    web:
      external_links:
        - redis_1
        - project_db_1:mysql
```
```yaml
version           # 指定 compose 文件的版本
services          # 定义所有的 service 信息, services 下面的第一级别的 key 既是一个 service 的名称

    build                 # 指定包含构建上下文的路径, 或作为一个对象，该对象具有 context 和指定的 dockerfile 文件以及 args 参数值
        context               # context: 指定 Dockerfile 文件所在的路径
        dockerfile            # dockerfile: 指定 context 指定的目录下面的 Dockerfile 的名称(默认为 Dockerfile)
        args                  # args: Dockerfile 在 build 过程中需要的参数 (等同于 docker container build --build-arg 的作用)
        cache_from            # v3.2中新增的参数, 指定缓存的镜像列表 (等同于 docker container build --cache_from 的作用)
        labels                # v3.3中新增的参数, 设置镜像的元数据 (等同于 docker container build --labels 的作用)
        shm_size              # v3.5中新增的参数, 设置容器 /dev/shm 分区的大小 (等同于 docker container build --shm-size 的作用)

    command               # 覆盖容器启动后默认执行的命令, 支持 shell 格式和 [] 格式

    configs               # 不知道怎么用

    cgroup_parent         # 不知道怎么用

    container_name        # 指定容器的名称 (等同于 docker run --name 的作用)

    credential_spec       # 不知道怎么用

    deploy                # v3 版本以上, 指定与部署和运行服务相关的配置, deploy 部分是 docker stack 使用的, docker stack 依赖 docker swarm
        endpoint_mode         # v3.3 版本中新增的功能, 指定服务暴露的方式
            vip                   # Docker 为该服务分配了一个虚拟 IP(VIP), 作为客户端的访问服务的地址
            dnsrr                 # DNS轮询, Docker 为该服务设置 DNS 条目, 使得服务名称的 DNS 查询返回一个 IP 地址列表, 客户端直接访问其中的一个地址
        labels                # 指定服务的标签，这些标签仅在服务上设置
        mode                  # 指定 deploy 的模式
            global                # 每个集群节点都只有一个容器
            replicated            # 用户可以指定集群中容器的数量(默认)
        placement             # 不知道怎么用
        replicas              # deploy 的 mode 为 replicated 时, 指定容器副本的数量
        resources             # 资源限制
            limits                # 设置容器的资源限制
                cpus: "0.5"           # 设置该容器最多只能使用 50% 的 CPU 
                memory: 50M           # 设置该容器最多只能使用 50M 的内存空间 
            reservations          # 设置为容器预留的系统资源(随时可用)
                cpus: "0.2"           # 为该容器保留 20% 的 CPU
                memory: 20M           # 为该容器保留 20M 的内存空间
        restart_policy        # 定义容器重启策略, 用于代替 restart 参数
            condition             # 定义容器重启策略(接受三个参数)
                none                  # 不尝试重启
                on-failure            # 只有当容器内部应用程序出现问题才会重启
                any                   # 无论如何都会尝试重启(默认)
            delay                 # 尝试重启的间隔时间(默认为 0s)
            max_attempts          # 尝试重启次数(默认一直尝试重启)
            window                # 检查重启是否成功之前的等待时间(即如果容器启动了, 隔多少秒之后去检测容器是否正常, 默认 0s)
        update_config         # 用于配置滚动更新配置
            parallelism           # 一次性更新的容器数量
            delay                 # 更新一组容器之间的间隔时间
            failure_action        # 定义更新失败的策略
                continue              # 继续更新
                rollback              # 回滚更新
                pause                 # 暂停更新(默认)
            monitor               # 每次更新后的持续时间以监视更新是否失败(单位: ns|us|ms|s|m|h) (默认为0)
            max_failure_ratio     # 回滚期间容忍的失败率(默认值为0)
            order                 # v3.4 版本中新增的参数, 回滚期间的操作顺序
                stop-first            #旧任务在启动新任务之前停止(默认)
                start-first           #首先启动新任务, 并且正在运行的任务暂时重叠
        rollback_config       # v3.7 版本中新增的参数, 用于定义在 update_config 更新失败的回滚策略
            parallelism           # 一次回滚的容器数, 如果设置为0, 则所有容器同时回滚
            delay                 # 每个组回滚之间的时间间隔(默认为0)
            failure_action        # 定义回滚失败的策略
                continue              # 继续回滚
                pause                 # 暂停回滚
            monitor               # 每次回滚任务后的持续时间以监视失败(单位: ns|us|ms|s|m|h) (默认为0)
            max_failure_ratio     # 回滚期间容忍的失败率(默认值0)
            order                 # 回滚期间的操作顺序
                stop-first            # 旧任务在启动新任务之前停止(默认)
                start-first           # 首先启动新任务, 并且正在运行的任务暂时重叠

        注意：
            支持 docker-compose up 和 docker-compose run 但不支持 docker stack deploy 的子选项
            security_opt  container_name  devices  tmpfs  stop_signal  links    cgroup_parent
            network_mode  external_links  restart  build  userns_mode  sysctls

    devices               # 指定设备映射列表 (等同于 docker run --device 的作用)

    depends_on            # 定义容器启动顺序 (此选项解决了容器之间的依赖关系， 此选项在 v3 版本中 使用 swarm 部署时将忽略该选项)
        示例：
            docker-compose up 以依赖顺序启动服务，下面例子中 redis 和 db 服务在 web 启动前启动
            默认情况下使用 docker-compose up web 这样的方式启动 web 服务时，也会启动 redis 和 db 两个服务，因为在配置文件中定义了依赖关系

            version: '3'
            services:
                web:
                    build: .
                    depends_on:
                        - db      
                        - redis  
                redis:
                    image: redis
                db:
                    image: postgres                             

    dns                   # 设置 DNS 地址(等同于 docker run --dns 的作用)

    dns_search            # 设置 DNS 搜索域(等同于 docker run --dns-search 的作用)

    tmpfs                 # v2 版本以上, 挂载目录到容器中, 作为容器的临时文件系统(等同于 docker run --tmpfs 的作用, 在使用 swarm 部署时将忽略该选项)

    entrypoint            # 覆盖容器的默认 entrypoint 指令 (等同于 docker run --entrypoint 的作用)

    env_file              # 从指定文件中读取变量设置为容器中的环境变量, 可以是单个值或者一个文件列表, 如果多个文件中的变量重名则后面的变量覆盖前面的变量, environment 的值覆盖 env_file 的值
        文件格式：
            RACK_ENV=development 

    environment           # 设置环境变量， environment 的值可以覆盖 env_file 的值 (等同于 docker run --env 的作用)

    expose                # 暴露端口, 但是不能和宿主机建立映射关系, 类似于 Dockerfile 的 EXPOSE 指令

    external_links        # 连接不在 docker-compose.yml 中定义的容器或者不在 compose 管理的容器(docker run 启动的容器, 在 v3 版本中使用 swarm 部署时将忽略该选项)

    extra_hosts           # 添加 host 记录到容器中的 /etc/hosts 中 (等同于 docker run --add-host 的作用)

    healthcheck           # v2.1 以上版本, 定义容器健康状态检查, 类似于 Dockerfile 的 HEALTHCHECK 指令
        test                  # 检查容器检查状态的命令, 该选项必须是一个字符串或者列表, 第一项必须是 NONE, CMD 或 CMD-SHELL, 如果其是一个字符串则相当于 CMD-SHELL 加该字符串
            NONE                  # 禁用容器的健康状态检测
            CMD                   # test: ["CMD", "curl", "-f", "http://localhost"]
            CMD-SHELL             # test: ["CMD-SHELL", "curl -f http://localhost || exit 1"] 或者　test: curl -f https://localhost || exit 1
        interval: 1m30s       # 每次检查之间的间隔时间
        timeout: 10s          # 运行命令的超时时间
        retries: 3            # 重试次数
        start_period: 40s     # v3.4 以上新增的选项, 定义容器启动时间间隔
        disable: true         # true 或 false, 表示是否禁用健康状态检测和　test: NONE 相同

    image                 # 指定 docker 镜像, 可以是远程仓库镜像、本地镜像

    init                  # v3.7 中新增的参数, true 或 false 表示是否在容器中运行一个 init, 它接收信号并传递给进程

    isolation             # 隔离容器技术, 在 Linux 中仅支持 default 值

    labels                # 使用 Docker 标签将元数据添加到容器, 与 Dockerfile 中的 LABELS 类似

    links                 # 链接到其它服务中的容器, 该选项是 docker 历史遗留的选项, 目前已被用户自定义网络名称空间取代, 最终有可能被废弃 (在使用 swarm 部署时将忽略该选项)

    logging               # 设置容器日志服务
        driver                # 指定日志记录驱动程序, 默认 json-file (等同于 docker run --log-driver 的作用)
        options               # 指定日志的相关参数 (等同于 docker run --log-opt 的作用)
            max-size              # 设置单个日志文件的大小, 当到达这个值后会进行日志滚动操作
            max-file              # 日志文件保留的数量

    network_mode          # 指定网络模式 (等同于 docker run --net 的作用, 在使用 swarm 部署时将忽略该选项，主机模式如 network_mode: "host" )         

    networks              # 将容器加入指定网络 (等同于 docker network connect 的作用), networks 可以位于 compose 文件顶级键和 services 键的二级键
        aliases               # 同一网络上的容器可以使用服务名称或别名连接到其中一个服务的容器
        ipv4_address      # IP V4 格式
        ipv6_address      # IP V6 格式

        示例:
            version: '3.7'
            services: 
                test: 
                    image: nginx:1.14-alpine
                    container_name: mynginx
                    command: ifconfig
                    networks: 
                        app_net:                                # 调用下面 networks 定义的 app_net 网络
                        ipv4_address: 172.16.238.10
            networks:
                app_net:
                    driver: bridge
                    ipam:
                        driver: default
                        config:
                            - subnet: 172.16.238.0/24

    pid: 'host'           # 共享宿主机的 进程空间(PID)

    ports                 # 建立宿主机和容器之间的端口映射关系, ports 支持两种语法格式
        SHORT 语法格式示例:
            - "3000"                            # 暴露容器的 3000 端口, 宿主机的端口由 docker 随机映射一个没有被占用的端口
            - "3000-3005"                       # 暴露容器的 3000 到 3005 端口, 宿主机的端口由 docker 随机映射没有被占用的端口
            - "8000:8000"                       # 容器的 8000 端口和宿主机的 8000 端口建立映射关系
            - "9090-9091:8080-8081"
            - "127.0.0.1:8001:8001"             # 指定映射宿主机的指定地址的
            - "127.0.0.1:5000-5010:5000-5010"   
            - "6060:6060/udp"                   # 指定协议

        LONG 语法格式示例:(v3.2 新增的语法格式)
            ports:
                - target: 80                    # 容器端口
                  published: 8080               # 宿主机端口
                  protocol: tcp                 # 协议类型
                  mode: host                    # host 在每个节点上发布主机端口,  ingress 对于群模式端口进行负载均衡

    secrets               # 不知道怎么用

    security_opt          # 为每个容器覆盖默认的标签 (在使用 swarm 部署时将忽略该选项)

    stop_grace_period     # 指定在发送了 SIGTERM 信号之后, 容器等待多少秒之后退出(默认 10s)

    stop_signal           # 指定停止容器发送的信号 (默认为 SIGTERM 相当于 kill PID; SIGKILL 相当于 kill -9 PID; 在使用 swarm 部署时将忽略该选项)

    sysctls               # 设置容器中的内核参数 (在使用 swarm 部署时将忽略该选项)

    ulimits               # 设置容器的 limit

    userns_mode           # 如果Docker守护程序配置了用户名称空间, 则禁用此服务的用户名称空间 (在使用 swarm 部署时将忽略该选项)

    volumes               # 定义容器和宿主机的卷映射关系, 其和 networks 一样可以位于 services 键的二级键和 compose 顶级键, 如果需要跨服务间使用则在顶级键定义, 在 services 中引用
        SHORT 语法格式示例:
            volumes:
                - /var/lib/mysql                # 映射容器内的 /var/lib/mysql 到宿主机的一个随机目录中
                - /opt/data:/var/lib/mysql      # 映射容器内的 /var/lib/mysql 到宿主机的 /opt/data
                - ./cache:/tmp/cache            # 映射容器内的 /var/lib/mysql 到宿主机 compose 文件所在的位置
                - ~/configs:/etc/configs/:ro    # 映射容器宿主机的目录到容器中去, 权限只读
                - datavolume:/var/lib/mysql     # datavolume 为 volumes 顶级键定义的目录, 在此处直接调用

        LONG 语法格式示例:(v3.2 新增的语法格式)
            version: "3.2"
            services:
                web:
                    image: nginx:alpine
                    ports:
                        - "80:80"
                    volumes:
                        - type: volume                  # mount 的类型, 必须是 bind、volume 或 tmpfs
                            source: mydata              # 宿主机目录
                            target: /data               # 容器目录
                            volume:                     # 配置额外的选项, 其 key 必须和 type 的值相同
                                nocopy: true                # volume 额外的选项, 在创建卷时禁用从容器复制数据
                        - type: bind                    # volume 模式只指定容器路径即可, 宿主机路径随机生成; bind 需要指定容器和数据机的映射路径
                            source: ./static
                            target: /opt/app/static
                            read_only: true             # 设置文件系统为只读文件系统
            volumes:
                mydata:                                 # 定义在 volume, 可在所有服务中调用

    restart               # 定义容器重启策略(在使用 swarm 部署时将忽略该选项, 在 swarm 使用 restart_policy 代替 restart)
        no                    # 禁止自动重启容器(默认)
        always                # 无论如何容器都会重启
        on-failure            # 当出现 on-failure 报错时, 容器重新启动

    其他选项：
        domainname, hostname, ipc, mac_address, privileged, read_only, shm_size, stdin_open, tty, user, working_dir
        上面这些选项都只接受单个值和 docker run 的对应参数类似

    对于值为时间的可接受的值：
        2.5s
        10s
        1m30s
        2h32m
        5h34m56s
        时间单位: us, ms, s, m， h
    对于值为大小的可接受的值：
        2b
        1024kb
        2048k
        300m
        1gb
        单位: b, k, m, g 或者 kb, mb, gb
networks          # 定义 networks 信息
    driver                # 指定网络模式, 大多数情况下, 它 bridge 于单个主机和 overlay Swarm 上
        bridge                # Docker 默认使用 bridge 连接单个主机上的网络
        overlay               # overlay 驱动程序创建一个跨多个节点命名的网络
        host                  # 共享主机网络名称空间(等同于 docker run --net=host)
        none                  # 等同于 docker run --net=none
    driver_opts           # v3.2以上版本, 传递给驱动程序的参数, 这些参数取决于驱动程序
    attachable            # driver 为 overlay 时使用, 如果设置为 true 则除了服务之外，独立容器也可以附加到该网络; 如果独立容器连接到该网络，则它可以与其他 Docker 守护进程连接到的该网络的服务和独立容器进行通信
    ipam                  # 自定义 IPAM 配置. 这是一个具有多个属性的对象, 每个属性都是可选的
        driver                # IPAM 驱动程序, bridge 或者 default
        config                # 配置项
            subnet                # CIDR格式的子网，表示该网络的网段
    external              # 外部网络, 如果设置为 true 则 docker-compose up 不会尝试创建它, 如果它不存在则引发错误
    name                  # v3.5 以上版本, 为此网络设置名称
```
>支持yml/yaml格式

## 参考资料

- [小菠萝测试笔记 - 博客园](https://www.cnblogs.com/poloyy)

- [dwyl/learn-docker](https://github.com/dwyl/learn-docker)

- [notes/Docker-Compose安装与使用.md at master · puxiao/notes](https://github.com/puxiao/notes/blob/master/Docker-Compose%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8.md)

- [Docker-Compose安装、卸载、使用详解_aws 卸载docker-compose-CSDN博客](https://blog.csdn.net/weixin_43972854/article/details/106712978)

