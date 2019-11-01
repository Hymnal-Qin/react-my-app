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

   sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose

4. Compose 快速安装

这里要介绍一个好用且常用的 docker 工具，叫 Compose。这个工具是通过一个配置文件来管理多个 docker 的容器，我们使用 docker-compose 命令来启动和停止和重启应用，比较适合组合多个容器进行开发的场景。后面我们就会使用这个工具进行项目的部署。

```
sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```

5. Nginx   

Ngix 是一个简单的用于反向代理和负载均衡的HTTP服务器。
这样可以避免外部直接访问我们的真实服务器，一定程度上保证服务器的安全性。而且可以将访问分发到不同的服务器上，实现负载均衡。

6. 打包React项目

7. 上传文件 docker.yml nginx.conf build产物

8. docker-compose up -d 开启容器

```
//查看服务
sudo docker ps
```
9.  docker-compose down 停止服务
