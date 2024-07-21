---
title: Docker
order: 1
date: 2024-07-13
category:
  - Docker
tag:
  - Docker
page:
  - frontmatter: false  
---




## Docker 安装

1、查看内核版本

```shell
uname -r
```
docker不支持32位系统


2、查看Linux服务器系统类型

::: tip Linux服务器类型
不同的服务器类型使用的包管理器有所不同
以下是一些常见的 Linux 发行版及其默认的包管理工具:
- Ubuntu、Debian：apt（Advanced Package Tool）是默认的包管理工具。它提供了 apt-get 和 apt-cache 等命令。
- CentOS、Fedora、RHEL：yum（Yellowdog Updater Modified）是默认的包管理工具，用于 RPM 包管理系统。
- openSUSE：zypper 是默认的包管理工具。
- Arch Linux：pacman 是 Arch Linux 的包管理工具。
- Slackware：Slackware 使用自己的包管理工具，称为 pkgtools。
:::

```shell
cat /etc/os-release
```

也可以使用下面命令 可以查看linux服务器类型以及内核版本

```shell
cat /proc/version

centos为例: Linux version 3.10.0-1160.108.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Thu Jan 25 16:17:31 UTC 2024
```

3、安装docker

::: tabs

<!-- yum -->
@tab yum
- 移除旧版本Docker

```shell
yum remove docker docker-common docker-client
或 yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
或 yum -y remove docker*
```

> Docker **镜像**的默认存储路径取决于操作系统的类型:
> - 对于 Linux 系统，默认存储路径是`/var/lib/docker`。这个目录下包含了多个子目录，如`image`、`containers`、`network`等，分别用于存储镜像、容器和网络数据。
> - 对于 Windows 系统，Docker 的默认存储路径是`c:\programdata\dockerdesktop`。
> - 而对于 macOS 系统，默认的存储路径是`com.docker.docker/data/vms/0/`。  
> 此外，用户可以通过修改 Docker 的配置文件`/etc/docker/daemon.json`来改变默认的存储路径。例如，可以将 Docker 的存储路径指向一个外部存储设备，如`/mnt/docker`。

> 删除容器时 只有不删除对应docker镜像存放地址 就不会删除已安装的镜像及容器。

- 更新yum到最新版本

```shell
sudo yum update
```

- 安装Docker依赖包

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

- 设置Docker的yum的源

```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

> 如果是国内环境 最好换上国内镜像源 提供下载速度

```shell
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
```

- 查看仓库所有Docker版本

```shell
yum list docker-ce --showduplicates | sort -r
```

- 安装Docker

安装前先检查是否已安装过 如果已安装 需要先卸载

安装最新版本

```shell
sudo yum install docker
```

安装指定版本

```shell
sudo yum install <FQPN>
```

- 查看docker是否安装成功

```shell
docker --version
```

- 启动docker

```shell
sudo systemctl start docker
```

查看运行状态

```shell
sudo systemctl status docker
```

- 设置开机启动

```shell
systemctl enable docker
```

- 卸载 Docker

```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

<!-- apt -->
@tab apt

- 移除旧Docker

```shell
sudo apt-get remove docker docker-engine docker.io
```

> Docker **镜像**的默认存储路径取决于操作系统的类型:
> - 对于 Linux 系统，默认存储路径是`/var/lib/docker`。这个目录下包含了多个子目录，如`image`、`containers`、`network`等，分别用于存储镜像、容器和网络数据。
> - 对于 Windows 系统，Docker 的默认存储路径是`c:\programdata\dockerdesktop`。
> - 而对于 macOS 系统，默认的存储路径是`com.docker.docker/data/vms/0/`。  
> 此外，用户可以通过修改 Docker 的配置文件`/etc/docker/daemon.json`来改变默认的存储路径。例如，可以将 Docker 的存储路径指向一个外部存储设备，如`/mnt/docker`。

> 删除容器时 只有不删除对应docker镜像存放地址 就不会删除已安装的镜像及容器。

- 更新apt-get版本

```shell
sudo apt-get update
```

- 安装 apt 依赖包，用于通过HTTPS来获取仓库

```shell
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

- 添加 Docker 的官方 GPG 密钥

```shell
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

- 设置docker稳定版仓库，这里使用了阿里云仓库

```shell
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
```

- 安装免费的docker Community版本docker-ce

安装最新版本

```shell
sudo apt-get -y install docker-ce
```

安装指定版本

```shell
sudo apt-get install -y docker-ce=<VERSION>
```

- 查看docker版本及运行状态

```shell
sudo docker -v
sudo systemctl status docker
```

:::

4、更换Docker镜像源(非必须)



使用以下命令来设置 Docker 国内源：- 或者你可以通过 vim /etc/docker/daemon.json 进入修改添加 registry-mirrors 内容后重启 Docker


```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://***替换为你的地址***.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

镜像源选择:

- 阿里云：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors (opens new window)- 登录后你会获得一个专属的地址。

- 其他镜像源选择: 参见 [国内的 Docker Hub 镜像加速器](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)

## Docker 命令


见 [Docker查询手册](../query/docker-deploy.md)


## Docker-Compose 安装

- 离线安装

1、本地下载docker-compose软件包

```shell
//例1
https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-linux-x86_64
//例2
https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64
```

版本号可以根据实际需求进行调整 详见 [Releases · docker/compose](https://github.com/docker/compose/releases)

2、将软件包上传到linux服务器/usr/bin/目录下并重命名

移动文件到/usr/bin/

```shell
mv docker-compose-linux-x86_64 /usr/bin/
```

重命名

```shell
mv docker-compose-Linux-x86_64  docker-compose
```

或者可以二者合并


3、添加执行权限

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

>非root用户需要使用sudo

4、查看版本 检验是否安装成功

```shell
docker-compose -v
```

- 在线安装

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

>如果网速慢 那么建议使用第一种离线安装方式



## Docker-Compose 命令

见 [Docker查询手册](../query/docker-deploy.md)



## Docker镜像构建






## Docker容器单独部署

::: tip 提示

以下配置仅供参考 需要结合实际需求进行调整

:::

### Mysql







### Redis





### Nginx



### Kafka



### Apachbench



### Minio

- 简介

搭建私有化对象存储服务


- docker-compose.yml 配置文件

```yml
version: "3"
services:
  minio:
    image: minio/minio:latest
    container_name: minio
    ports:
      - "19000:9000"
    volumes: 
      - "./data:/data"
    environment:
      MINIO_ACCESS_KEY: "root"
      MINIO_SECRET_KEY: "password"
    command: server /data
    restart: always
    logging:
      driver: "json-file"
      options:
        max-size: "1m"
```

访问 MinIO 的管理面板： http://<IP_ADDRESS_OF_YOUR_MINIO>:9000


- 其他资料

- [MinIO Object Storage for Linux — MinIO Object Storage for Linux](https://min.io/docs/minio/linux/index.html?ref=docs-redirect)

- [Minio - Funky Penguin's Geek Cookbook](https://geek-cookbook.funkypenguin.co.nz/recipes/minio/)

### Portainer

- 简介

Docker 可视化管理工具


- 


- 其他资料

仓库地址: [portainer/portainer: Making Docker and Kubernetes management easy.](https://github.com/portainer/portainer)







### ElasticSearch



### Grafana

- 简介

监控仪表系统

- docker-compose.yml 配置文件

```yml
version: '3.3'
services:
  grafana-server:
    # https://github.com/bitnami/bitnami-docker-grafana
    image: bitnami/grafana:7.3.4
    container_name: grafana-server
    environment:
      # https://grafana.com/docs/grafana/latest/administration/configuration/
      - 'GF_SECURITY_ADMIN_USER=admin'
      - 'GF_SECURITY_ADMIN_PASSWORD=admin_password'
      # https://grafana.com/tutorials/run-grafana-behind-a-proxy/
      - 'GF_SERVER_HTTP_PORT=8848'
      - 'GF_SERVER_ROOT_URL=%(protocol)s://%(domain)s:%(http_port)s/grafana/'
      - 'GF_SERVER_SERVE_FROM_SUB_PATH=true'
    volumes:
      - grafana_data:/opt/bitnami/grafana/data
    ports:
      - '8848:8848'
    logging:
      driver: json-file
      options:
        max-size: "200k"
        max-file: "10"
    restart: unless-stop

volumes:
  grafana_data:
```

访问地址 http://<IP_ADDRESS_OF_YOUR_SERVER>:8848

Nginx  反向代理配置

```
# https://grafana.com/tutorials/run-grafana-behind-a-proxy/
location /grafana/ {
  proxy_pass http://127.0.0.1:8848/;
}
```

- 其他资料/参考资料

[Grafana 在 Kubernetes 中的使用-阳明的博客|Kubernetes|Istio|Prometheus|Python|Golang|云原生](https://www.qikqiak.com/post/grafana-usage-in-k8s/)


### Prometheus 

- 简介

一个开源系统监控和警报系统

![Hello Promethues!](./assets/promethues01.png)

![Promethues Architecture](./assets/promethues02.png)

- docker-compose.yml 配置文件

```yml
version: '3.3'
services:
  prometheus-server:
    # https://github.com/bitnami/bitnami-docker-prometheus
    image: bitnami/prometheus:2.23.0
    container_name: prometheus-server
    volumes:
      # https://prometheus.io/docs/prometheus/latest/configuration/configuration/
      - /etc/prometheus/prometheus.yml:/opt/bitnami/prometheus/conf/prometheus.yml
      - prometheus_data:/opt/bitnami/prometheus/data
    command:
      - "--config.file=/opt/bitnami/prometheus/conf/prometheus.yml"
      - "--storage.tsdb.path=/opt/bitnami/prometheus/data"
      - "--web.console.libraries=/opt/bitnami/prometheus/conf/console_libraries"
      - "--web.console.templates=/opt/bitnami/prometheus/conf/consoles"
      # https://www.prometheus.io/docs/guides/basic-auth/
      - --web.external-url=http://localhost:80/prometheus
      - --web.route-prefix=/
    ports:
      - '9090:9090'
    logging:
      driver: json-file
      options:
        max-size: "200k"
        max-file: "10"
    restart: unless-stop

volumes:
  prometheus_data:
```

访问 Prometheus 的管理面板： http://<IP_ADDRESS_OF_YOUR_SERVER>:9090

Nginx  反向代理配置

```
# https://www.prometheus.io/docs/guides/basic-auth/
# https://github.com/prometheus-community/prometheus-playground/tree/master/nginx
location /prometheus {
  proxy_pass http://127.0.0.1:9090/;
}
```

- 其他资料

[Exporters and integrations | Prometheus](https://prometheus.io/docs/instrumenting/exporters/)

[chrome Metrics 语法高亮插件](https://github.com/fhemberger/prometheus-formatter)

- 参考资料

[dockerized/prometheus at master · y0ngb1n/dockerized](https://github.com/y0ngb1n/dockerized/tree/master/prometheus)

https://www.qikqiak.com/post/blackbox-exporter-on-prometheus/

https://www.qikqiak.com/post/prometheus-book/

https://yunlzheng.gitbook.io/prometheus-book/

https://songjiayang.gitbooks.io/prometheus/




### Nginx Proxy

- 简介
基于 Docker 的自动化网关

- 待办

[dockerized/nginx-proxy at master · y0ngb1n/dockerized](https://github.com/y0ngb1n/dockerized/tree/master/nginx-proxy)




### Jenkins

- 简介


- 待办
[dockerfiles/jenkins at master · vimagick/dockerfiles](https://github.com/vimagick/dockerfiles/tree/master/jenkins)






## Docker容器组合部署

### ELK


- 待办
[dockerfiles/elk at master · vimagick/dockerfiles](https://github.com/vimagick/dockerfiles/tree/master/elk)

建立一个docker配置仓库存放各种文件


### Skywalking



### SonarQube

- 简介

代码质量检测平台

- docker-compose.yml 配置文件

```yml
version: '3'

services:
  postgresql:
    image: 'bitnami/postgresql:10'
    container_name: 'sonarqube-postgresql'
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
    volumes:
      - 'postgresql_data:/bitnami/postgresql'

  sonarqube:
    image: '${SQ_IMAGE}'
    container_name: 'sonarqube'
    ports:
      - '9000:9000'
    environment:
      - POSTGRESQL_HOST=postgresql
      - POSTGRESQL_ROOT_USER=postgres
      - POSTGRESQL_CLIENT_CREATE_DATABASE_NAME=sonarqube_db
      - POSTGRESQL_CLIENT_CREATE_DATABASE_USERNAME=sonarqube
      - POSTGRESQL_CLIENT_CREATE_DATABASE_PASSWORD=password123
      - SONARQUBE_DATABASE_NAME=sonarqube_db
      - SONARQUBE_DATABASE_USER=sonarqube
      - SONARQUBE_DATABASE_PASSWORD=password123
      - SONARQUBE_USERNAME=${SQ_USERNAME}
      - SONARQUBE_PASSWORD=${SQ_PASSWORD}
    volumes:
      - 'sonarqube_data:/bitnami'

volumes:
  sonarqube_data:
    driver: local
  postgresql_data:
    driver: local
```

访问地址:
打开 http://localhost:9000/
账号：admin 密码：password123
点击 "Log in"

- 其他资料

https://docs.sonarqube.org/latest/

https://www.sonarsource.com/

https://registry.hub.docker.com/_/sonarqube/

https://github.com/bitnami/bitnami-docker-sonarqube

SonarQube - 代码质量检测平台，by Anoyi

SonarQube - 中文插件安装，by Anoyi



## Dockerfile仓库汇总

[dockerfiles](https://github.com/jessfraz/dockerfiles)

[dockerfiles](https://github.com/vimagick/dockerfiles)

[dockerfile](https://github.com/mritd/dockerfile)

[y0ngb1n/dockerized: 🐳 Build once, run anywhere](https://github.com/y0ngb1n/dockerized)







## 参考资料

- [国内的 Docker Hub 镜像加速器](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)
- [Docker | 小傅哥 bugstack 虫洞栈](https://bugstack.cn/md/devops/2023-04-18-docker.html)

