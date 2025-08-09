---
title: HTTP 協定入門
date: 2022-09-09 10:00:00
tags:
- http
- web
- protocol
categories:
- 網路
- 後端
---

## 什麼是 HTTP？

HTTP (HyperText Transfer Protocol) 是一種用於在網路上傳輸超文本 (例如 HTML) 的**應用層協定**。它是全球資訊網 (World Wide Web) 的基礎。

## HTTP 的請求/回應模型

HTTP 是一個**客戶端-伺服器端 (client-server)** 的協定。客戶端 (通常是瀏覽器) 會發送一個 **HTTP 請求 (request)** 給伺服器，伺服器會回傳一個 **HTTP 回應 (response)**。

### HTTP 請求

一個 HTTP 請求包含了以下幾個部分：

-   **請求行 (Request Line):** 包含了請求的方法 (例如 `GET`、`POST`)、請求的 URL 和 HTTP 的版本。
-   **請求標頭 (Request Headers):** 包含了關於請求的額外資訊，例如 `Host`、`User-Agent`、`Accept` 等。
-   **請求主體 (Request Body):** 包含了要傳送給伺服器的資料，例如表單資料。

### HTTP 回應

一個 HTTP 回應包含了以下幾個部分：

-   **狀態行 (Status Line):** 包含了 HTTP 的版本、狀態碼 (例如 `200 OK`、`404 Not Found`) 和狀態訊息。
-   **回應標頭 (Response Headers):** 包含了關於回應的額外資訊，例如 `Content-Type`、`Content-Length`、`Set-Cookie` 等。
-   **回應主體 (Response Body):** 包含了伺服器回傳的資料，例如 HTML 文件、JSON 資料等。

## HTTP 方法

-   **`GET`**: 取得資源。
-   **`POST`**: 建立資源。
-   **`PUT`**: 更新資源。
-   **`DELETE`**: 刪除資源。

## HTTP 狀態碼

-   **`2xx` (成功):** `200 OK`, `201 Created`
-   **`3xx` (重新導向):** `301 Moved Permanently`, `302 Found`
-   **`4xx` (客戶端錯誤):** `400 Bad Request`, `401 Unauthorized`, `404 Not Found`
-   **`5xx` (伺服器端錯誤):** `500 Internal Server Error`, `503 Service Unavailable`
