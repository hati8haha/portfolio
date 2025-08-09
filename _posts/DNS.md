---
title: DNS (網域名稱系統) 的運作原理
date: 2022-09-13 10:00:00
tags:
- dns
- networking
- web
categories:
- 網路
---

## 什麼是 DNS？

DNS (Domain Name System) 是**網域名稱系統**的縮寫，它就像是網際網路的電話簿。當您在瀏覽器中輸入一個網址 (例如 `www.google.com`) 時，DNS 會將這個網址轉換成一個 IP 位址 (例如 `172.217.160.142`)，讓您的電腦可以找到並連線到正確的伺服器。

## DNS 的運作流程

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-record-request-sequence-1.png)

1.  **遞迴解析器 (Recursive Resolver):** 當您在瀏覽器中輸入一個網址時，您的電腦會先向一個遞迴解析器 (通常是您的 ISP 或您自己設定的公共 DNS) 發出請求。
2.  **根伺服器 (Root Server):** 遞迴解析器會向根伺服器發出請求，根伺服器會告訴它要去哪一個 TLD 伺服器查詢。
3.  **TLD 伺服器 (Top-Level Domain Server):** TLD 伺服器會管理特定頂級網域 (例如 `.com`、`.org`、`.net`) 的 DNS 紀錄。它會告訴遞迴解析器要去哪一個權威伺服器查詢。
4.  **權威伺服器 (Authoritative Nameserver):** 權威伺服器是最終負責儲存特定網域的 DNS 紀錄的伺服器。它會將 IP 位址回傳給遞迴解析器。
5.  遞迴解析器會將 IP 位址回傳給您的電腦，並將它快取起來，以便下次查詢時可以更快地回應。

## 公共 DNS 的好處

除了使用您的 ISP 提供的 DNS 之外，您也可以使用公共 DNS，例如 Google 的 `8.8.8.8` 或 Cloudflare 的 `1.1.1.1`。

**優點:**

-   **速度更快:** 公共 DNS 通常有更好的基礎設施，可以更快地回應您的查詢。
-   **更安全:** 公共 DNS 通常會提供一些安全功能，例如防止 DNS 劫持和釣魚攻擊。
-   **隱私:** 一些公共 DNS (例如 Cloudflare) 承諾不會紀錄您的 DNS 查詢紀錄，可以保護您的隱私。