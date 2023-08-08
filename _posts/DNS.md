---
title: DNS
tags:
- web 基礎
categories:
- 前端
---
## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS 為 Domain Name System 縮寫，中文為網域名稱系統，是用來管理域名與 IP 位址對應關係的一項服務。

DNS 的運作方式像電話簿，裏頭有網域名稱與 IP 位址。當使用者在輸入網址時，url 會被傳到 DNS 解析為 IP 位址，讓使用者可以連上對應的主機。

若更深入理解 DNS，就會發現 DNS 的運作主要涉及 4 個部分，分別為：
- DNS 遞迴程式（DNS Recursive Resolver）
- 根名稱伺服器（DNS Root Nameserver）
- TLD 名稱伺服器（DNS TLD Namerserver）
- 權威名稱伺服器（Authoritative Nameserver）

![圖片來源：https://www.cloudflare.com/zh-tw/learning/dns/what-is-dns/](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-1.png)

### 公開的 DNS 好處
#### 對於使用者
- 更新速度快
- 安全性較好
- 上網速度較快
- 減少重新導向

#### 對於 Google
- 更容易掌握使用者的瀏覽的網頁
