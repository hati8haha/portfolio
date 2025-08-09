---
title: CORS (跨來源資源共用) 詳解
date: 2022-09-18 10:00:00
tags:
- cors
- web-security
- http
categories:
- 前端
- 網路
---

## 什麼是 CORS？

CORS (Cross-Origin Resource Sharing)，全名為**跨來源資源共用**，是一個 W3C 標準，它允許伺服器在回應的 header 中加上一些額外的資訊，來告訴瀏覽器是否允許來自不同來源的請求。

## 為什麼需要 CORS？

出於安全考量，瀏覽器會實作**同源政策 (Same-origin Policy)**，它會限制來自不同來源的腳本如何存取資源。例如，如果您的網站在 `a.com`，那麼您的腳本就不能存取來自 `b.com` 的資源。

CORS 的出現，就是為了解決這個問題，讓您可以在安全的情況下，進行跨來源的請求。

## CORS 的運作方式

CORS 的運作方式是，當瀏覽器要發送一個跨來源的請求時，它會在請求的 header 中加上一個 `Origin` 的欄位，來告訴伺服器這個請求是來自於哪個來源。

當伺服器收到這個請求時，它會在回應的 header 中加上一個 `Access-Control-Allow-Origin` 的欄位，來告訴瀏覽器是否允許這個來源的請求。如果允許，瀏覽器就會繼續處理這個請求；如果不允許，瀏覽器就會拒絕這個請求。

### 簡單請求 (Simple Requests)

如果您的請求符合以下所有條件，它就是一個簡單請求：

-   方法是 `GET`、`HEAD` 或 `POST`。
-   除了 `Accept`、`Accept-Language`、`Content-Language`、`Content-Type` 之外，沒有其他的 header。
-   `Content-Type` 的值是 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain`。

### 預檢請求 (Preflighted Requests)

如果您的請求不符合簡單請求的條件，瀏覽器就會在發送實際的請求之前，先發送一個**預檢請求 (preflight request)**。

預檢請求是一個 `OPTIONS` 方法的請求，它會詢問伺服器是否允許實際的請求。如果伺服器允許，瀏覽器才會發送實際的請求。
