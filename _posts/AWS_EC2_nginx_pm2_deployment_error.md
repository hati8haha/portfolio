---
title: AWS EC2 + Nginx + PM2 部署問題排查
date: 2022-09-21 10:00:00
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

在部署 Node.js 應用程式到 AWS EC2 時，使用 Nginx 作為反向代理，並使用 PM2 來管理 Node.js 行程是一個常見的組合。然而，在這個過程中，我們可能會遇到一些問題。本文將記錄一些常見的部署問題和解決方案。

## 問題一：`port 22: Connection refused`

**情境:** 在重啟 EC2 instance 後，無法透過 SSH 連線。

**解決方案:**

-   **檢查安全群組 (Security Group):** 確保您的安全群組允許來自您 IP 位址的 22 port (SSH) 的連線。
-   **檢查網路 ACL (Network ACL):** 確保您的網路 ACL 允許來自您 IP 位址的 22 port (SSH) 的連線。
-   **檢查 SSH 指令:** 如果您在指令中使用了引號，請嘗試將其移除。

    ```bash
    # 錯誤的指令
    ssh -i "mykey.pem" ubuntu@ec2-3-144-77-50.us-east-2.compute.amazonaws.com

    # 正確的指令
    ssh -i mykey.pem ubuntu@ec2-3-144-77-50.us-east-2.compute.amazonaws.com
    ```

## 問題二：PM2 任務無法執行

**情境:** 使用 `pm2 start` 啟動的 Node.js 應用程式無法正常執行。

**解決方案:**

1.  **查看 PM2 Log:**

    ```bash
    sudo pm2 log
    ```

    檢查 log 中是否有任何錯誤訊息。常見的錯誤是 `EADDRINUSE`，這表示您要使用的 port 已經被佔用。

2.  **查看 Port 使用情況:**

    ```bash
    netstat -lntp
    ```

    使用 `netstat` 指令來查看是哪個行程佔用了您的 port。

3.  **釋放 Port:**

    如果您發現有其他的 Node.js 行程佔用了您的 port，您可以使用 `killall` 指令來將其終止。

    ```bash
    killall -9 node
    ```

## 問題三：NPM 套件安裝失敗

**情境:** 在 `npm install` 時，出現 `EACCES: permission denied` 的錯誤。

**解決方案:**

這個問題通常是因為您在安裝 Node.js 時，使用了 `sudo`，導致 `npm` 的目錄權限不正確。建議您使用 [nvm](https://github.com/nvm-sh/nvm) 或 [NodeSource](https://github.com/nodesource/distributions) 來安裝 Node.js，而不是使用 `sudo apt install nodejs`。