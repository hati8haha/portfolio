---
title: "網路基礎：TCP/IP, IP, Port 與 RESTful API"
date: 2022-08-30 10:00:00
tags:
- tcp/ip
- http
- restful
- web
categories:
- 網路
- 後端
---

## 網路模型

在電腦網路中，我們使用模型來將複雜的網路通訊過程分層，每一層都負責不同的功能。最常見的兩個模型是 OSI 七層模型和 TCP/IP 四層模型。

-   **OSI 七層模型:** 應用層、表現層、會議層、傳輸層、網路層、資料連結層、實體層。
-   **TCP/IP 四層模型:** 應用層、傳輸層、網路層、網路介面層。

## IP (Internet Protocol)

IP 是**網際網路協定**的縮寫，它負責在網路上傳送資料封包。每個連上網路的裝置都會被分配一個 IP 位址，就像是門牌號碼一樣，讓資料可以被正確地送到目的地。

-   **IPv4 vs IPv6:** IPv4 是目前最廣泛使用的版本，由 32 位元組成 (例如 `192.168.1.1`)；而 IPv6 是為了解決 IPv4 位址不足的問題而推出的新版本，由 128 位元組成。
-   **固定 IP vs 浮動 IP:** 固定 IP 是永久分配給一個裝置的 IP 位址，通常用於伺服器；而浮動 IP 是每次連上網路時由 ISP (網際網路服務供應商) 動態分配的 IP 位址。
-   **虛擬 IP:** 在區域網路 (LAN) 中使用的 IP 位址，無法直接從網際網路上存取。

## Port (埠)

如果說 IP 位址是門牌號碼，那麼 Port 就是房間號碼。它用來區分同一台電腦上的不同服務。例如，HTTP 服務通常使用 80 Port，而 HTTPS 服務通常使用 443 Port。

## RESTful API

REST (Representational State Transfer) 是一種軟體架構風格，它定義了一組用於建立 Web 服務的約束。符合 REST 風格的 API 就稱為 RESTful API。

**RESTful API 的主要特點:**

-   **無狀態 (Stateless):** 伺服器不會儲存任何關於客戶端的狀態。
-   **資源導向 (Resource-Oriented):** 所有的東西都是資源，每個資源都有一個唯一的 URI (統一資源識別符)。
-   **使用標準的 HTTP 方法:** 使用 `GET`、`POST`、`PUT`、`DELETE` 等標準的 HTTP 方法來操作資源。

![](https://i.imgur.com/edivef1.png)