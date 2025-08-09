---
title: AWS EC2 + Nginx + PM2 部署完整流程
date: 2022-09-22 10:00:00
tags:
- aws
- ec2
- nginx
- pm2
- devops
categories:
- DevOps
- 後端
---

本文將介紹如何將一個 Node.js 應用程式部署到 AWS EC2，並使用 Nginx 作為反向代理，以及 PM2 來管理 Node.js 行程。

## 1. 建立 EC2 Instance

-   登入 AWS 主控台，並前往 EC2 服務。
-   點擊「啟動執行個體」，並選擇一個您喜歡的 AMI (例如 Ubuntu Server)。
-   選擇一個執行個體類型 (例如 `t2.micro`)。
-   設定安全群組，確保允許來自您 IP 位址的 22 port (SSH) 和 80 port (HTTP) 的連線。
-   啟動執行個體，並下載您的金鑰對 (`.pem` 檔案)。

## 2. 連線到 EC2 Instance

```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-ip
```

## 3. 安裝 Nginx

```bash
sudo apt update
sudo apt install nginx
```

## 4. 部署您的應用程式

```bash
cd /var/www
sudo git clone https://github.com/your/repo.git
cd repo
sudo npm install
```

## 5. 安裝和設定 PM2

```bash
sudo npm install -g pm2
sudo pm2 start app.js
```

## 6. 設定 Nginx 反向代理

1.  建立一個新的 Nginx 設定檔:

    ```bash
    sudo nano /etc/nginx/sites-available/your-domain.com
    ```

2.  在設定檔中加入以下內容:

    ```nginx
    server {
        listen 80;
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3000; # 假設您的 Node.js 應用程式在 3000 port
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  啟用您的設定檔:

    ```bash
    sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
    ```

4.  重新啟動 Nginx:

    ```bash
    sudo systemctl restart nginx
    ```

## 7. 設定 DNS

最後，到您的 DNS 供應商那裡，將您的網域指向您的 EC2 instance 的 IP 位址。
