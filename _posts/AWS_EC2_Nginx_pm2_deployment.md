---
title: AWS EC2 Nginx + pm2 完整部署流程
tags:
- 部屬
- AWS
- Nginx
categories:
- DevOps
---

1. EC2 新建 instance
2. 連線到 VPS
3. 安裝 nginx
   1. 防火牆設置
4. 到 /var/www/ git clone 專案
5. AWS RDS 新建 mysql 資料庫
6. 專案中補上連線資料庫用的帳號密碼
7. 安裝 node.js、npm
8. 安裝 npm packages
9. 安裝 sequelize-cli
10. 執行 sequelize 建立資料庫、資料表
    1. `sequelize db:create`
    2. `sequelize db:migrate`
11. 安裝 pm2
12. 執行 pm2 `sudo pm2 start index.js`
13. 到 /etc/nginx/sites-available 建立檔案 "example.com"
    1. 檔案內容如下，修改域名與 port
       ```
       server {
            listen       80;
            server_name  example.com;

            # 把 request 轉給 localhost 的 5566 port
            location / {
              proxy_pass http://127.0.0.1:5566;
            }
        }
        ```
        參考自：[俄羅斯不愧是戰鬥民族：nginx
](https://ithelp.ithome.com.tw/articles/10188498)
14. 到 etc/nginx/sites-enabled 執行 `sudo ln -s /etc/nginx/sites-available/example /etc/nginx/sites-enabled/`，會建立連結檔案
15. 重新載入 nginx `sudo systemctl reload nginx`
16. 部署成功！
`