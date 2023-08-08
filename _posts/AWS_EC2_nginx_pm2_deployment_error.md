---
title: AWS EC2 nginx + pm2 部署踩雷紀錄
tags:
- 部屬
- AWS
- Nginx
categories:
- DevOps
---

## port 22: Connection refused 重啟 instance 後無法連線
` ssh -i "mykey.pem" ubuntu@ec2-3-144-77-50.us-east-2.compute.amazonaws.com`

=> 拿掉雙引號
` ssh -i mykey.pem ubuntu@ec2-3-144-77-50.us-east-2.compute.amazonaws.com`



## pm2 任務無法執行
### 查看 log
`sudo pm2 log` 
```log
ubuntu@ip-172-31-38-203:/var/www/hati8haha.tw/hati8haha.tw$ sudo pm2 log 0
[TAILING] Tailing last 15 lines for [0] process (change the value with --lines option)
/root/.pm2/logs/index-out.log last 15 lines:
0|index    | Example app listening on port 5001!
0|index    | Example app listening on port 5001!
0|index    | Example app listening on port 5001!
0|index    | Example app listening on port 5001!
0|index    | Example app listening on port 5001!

/root/.pm2/logs/index-error.log last 15 lines:
0|index    |     at listenInCluster (node:net:1363:12)
0|index    |     at Server.listen (node:net:1450:7)
0|index    |     at Function.listen (/var/www/hati8haha.tw/hati8haha.tw/node_modules/express/lib/application.js:61
0|index    |     at Object.<anonymous> (/var/www/hati8haha.tw/hati8haha.tw/index.js:52:5)
0|index    |     at Module._compile (node:internal/modules/cjs/loader:1101:14)
0|index    |     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
0|index    |     at Module.load (node:internal/modules/cjs/loader:981:32)
0|index    |     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
0|index    |     at Object.<anonymous> (/usr/lib/node_modules/pm2/lib/ProcessContainerFork.js:33:23) {
0|index    |   code: 'EADDRINUSE',
0|index    |   errno: -98,
0|index    |   syscall: 'listen',
0|index    |   address: '::',
0|index    |   port: 5001
0|index    | }

```
### 查看 port 
輸入 `netstat -lntp`
```log
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      -
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      -
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -
tcp6       0      0 :::5001                 :::*                    LISTEN      17643/node /var/www
tcp6       0      0 :::80                   :::*                    LISTEN      -
tcp6       0      0 :::22                   :::*                    LISTEN      -

```
### 嘗試 kill pid 失敗
```log
ubuntu@ip-172-31-38-203:/var/www/hati8haha.tw/hati8haha.tw$ lsof -i :5001
COMMAND     PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node\x20/ 17998 ubuntu   20u  IPv6  79493      0t0  TCP *:5001 (LISTEN)
ubuntu@ip-172-31-38-203:/var/www/hati8haha.tw/hati8haha.tw$ sudo kill -9 17998
ubuntu@ip-172-31-38-203:/var/www/hati8haha.tw/hati8haha.tw$ lsof -i :5001
COMMAND     PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME

```

### 可能解決方法
[參考自進度報告 8/10 ](https://learning.lidemy.com/users/201)
>同學遇到的 node 佔用 port 的問題今天我也遇到了，因為寫註冊資料感覺有成功但是 iTerm 上又沒有任何訊息跑出來，所以懷疑是 port 的問題。
解決方法用 kill PID 是殺不掉的，要用 killall -9 node ，stackoverflow 又再一次順利地解決我的問題＾＾

## 套件安裝失敗
```log
ubuntu@ip-172-31-2-168:/var/www/hati8haha.tw$ npm install express
npm WARN checkPermissions Missing write access to /var/www/hati8haha.tw/node_modules/express
npm WARN checkPermissions Missing write access to /var/www/hati8haha.tw/node_modules
npm WARN hw1@1.0.0 No description

npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /var/www/hati8haha.tw/node_modules/express
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/var/www/hati8haha.tw/node_modules/express'
npm ERR!  [Error: EACCES: permission denied, access '/var/www/hati8haha.tw/node_modules/express'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/var/www/hati8haha.tw/node_modules/express'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/ubuntu/.npm/_logs/2021-08-12T09_16_56_297Z-debug.log
ubuntu@ip-172-31-2-168:/var/www/hati8haha.tw$ sudo npm i bcryptjs


```

### 解決方法
不要用 ` sudo apt install npm`

用 `curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs` 安裝

網址：[NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions) 
