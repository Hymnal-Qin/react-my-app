
## Docker Nginx  打包部署

>Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，
>然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会
>有任何接口。
>云计算、大数据，移动技术的快速发展，加之企业业务需求的不断变化，导致企业架构要随时更改以适合
>业务需求，跟上技术更新的步伐。毫无疑问，这些重担都将压在企业开发人员身上；团队之间如何高效协调，
>快速交付产品，快速部署应用，以及满足企业业务需求，是开发人员亟需解决的问题。Docker技术恰好
>可以帮助开发人员解决这些问题。
>为了解决开发人员和运维人员之间的协作关系，加快应用交付速度，越来越多的企业引入了DevOps这一概念。
>但是，传统的开发过程中，开发、测试、运维是三个独立运作的团队，团队之间沟通不畅，开发运维之间冲突时
>有发生，导致协作效率低下，产品交付延迟， 影响了企业的业务运行。Docker技术将应用以集装箱的方式
>打包交付，使应用在不同的团队中共享，通过镜像的方式应用可以部署于任何环境中。这样避免了各团队之间
>的协作问题的出现，成为企业实现DevOps目标的重要工具。以容器方式交付的Docker技术支持不断地开发迭代，
>大大提升了产品开发和交付速度。
>此外，与通过Hypervisor把底层设备虚拟化的虚拟机不同，Docker直接移植于Linux内核之上，
>通过运行Linux进程将底层设备虚拟隔离，这样系统性能的损耗也要比虚拟机低的多，几乎可以忽略。
>同时，Docker应用容器的启停非常高效，可以支持大规模的分布系统的水平扩展，真正给企业开发带来福音。

---

1. 配置 Docker 存储库。

```
// 安装必要的包
sudo yum install -y yum-utils \device-mapper-persistent-data \lvm2

// 配置稳定版的docker仓库
sudo yum-config-manager \--add-repo \https://download.docker.com/linux/centosdocker-ce.repo
```

2. 安装 Docker CE（community edition 社区版）
```
sudo yum install docker-ce docker-ce-cli containerd.io
```
3. 运行测试 docker 是否安装成功

```
sudo systemctl start docker
sudo docker run hello-world
```


4. Compose 快速安装

这里要介绍一个好用且常用的 docker 工具，叫 Compose。这个工具是通过一个配置文件来管理多个 docker 的容器，我们使用 docker-compose 命令来启动和停止和重启应用，比较适合组合多个容器进行开发的场景。后面我们就会使用这个工具进行项目的部署。

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```

5. Nginx   

Ngix 是一个简单的用于反向代理和负载均衡的HTTP服务器。
这样可以避免外部直接访问我们的真实服务器，一定程度上保证服务器的安全性。而且可以将访问分发到不同的服务器上，实现负载均衡。
```
docker pull nginx
```
6. 打包React项目 build

7. 上传文件 docker.yml/ nginx.conf/ build产物

8. docker 启动管理

```
//开启容器
docker-compose up -d
//查看服务
sudo docker ps
//停止服务 关闭并删除容器
docker-compose down
//kill某服务
docker kill ****
//进入某一容器内操作
docker exec -it e54b583c8b1f /bin/bash
docker-compose exec SERVICE COMMAND
docker-compose exec nginx bash

```

## 容器监听和日志

> cAdvisor：是Google用来监测单节点的资源信息的监控工具,常被当作其他监控的数据采集使用。
> InfluxDB：是一个开源的没有外部依赖的时间序列数据库。适用于记录度量，事件及执行分析。
> Grafana：是一个可视化面板（Dashboard），有着非常漂亮的图表和布局展示，功能齐全的度量仪表盘和图形编辑器，支持Graphite、Zabbix、InfluxDB、Prometheus和OpenTSDB作为数据源。
0. docker network create monitor      #构建监控用网络
1. InfluxDB 
``` 
docker pull influxdb:latest

sudo docker run -d -p 8083:8083 -p8086:8086 --expose 8090 --expose 8099 --name influxDbService influxdb
	-d：deamon，后台启动
	-p：port, 端口映射，宿主机端口:容器内端口；8083是influxdb的web管理工具端口，8086是influxdb的HTTP API端口
	--expose：允许容器接受外部传入的数据
	--name：容器名称，此处为influxDbService
	influxdb：镜像名
	
sudo docker ps -a

http://10.202.91.98:8083/

# influxDB中创建cAdvisor使用的数据库：
CREATE DATABASE "cadvisor"

# influxDB中创建Grafana数据库用户,并授予所有权限
CREATE USER "grafana" WITH PASSWORD 'grafana'
grant all privileges to grafana

# 查询imooc数据库的nginx_log表的所有数据
use imooc								# 使用imooc数据库
select * from nginx_log	
```

2. cadvisor
```
docker pull google/cadvisor:latest

docker run -d \
--name=cadvisor \
--net monitor \
-p 8090:8080 \
--mount type=bind,src=/,dst=/rootfs,ro \
--mount type=bind,src=/var/run,dst=/var/run \
--mount type=bind,src=/sys,dst=/sys,ro \
--mount type=bind,src=/var/lib/docker/,dst=/var/lib/docker,ro \
google/cadvisor \
-storage_driver=influxdb \
-storage_driver_db=cadvisor \
-storage_driver_host=influxdb:8086

-storage_driver_db=cadvisor \        #influxdb中的数据库，之后创建
-storage_driver_host=influxdb:8086    #因为在一个网络里，可以使用influxdb：8086 

http://10.202.91.98:8090/containers
```

3. Grafana 
``` 
docker pull grafana/grafana:latest

docker run -d \
--name grafana \
--net monitor \
-p 3000:3000 \
grafana/grafana

http://10.202.91.98:3000

```

## docker
1. 自启动 systemctl enable docker.service
2. docker restart imageid1 imageid2
3. 在运行docker容器时可以加如下参数来保证每次docker服务重启后容器也自动重启： 
```
docker  ps -a 
docker run --restart=always
如果已经启动了则可以使用如下命令：
docker update --restart=always <CONTAINER ID>
```