---
title: HTTP
tags:
- web 基礎
categories:
- 前端
---
## 為甚麼需要協定（protocol）
標準 -> 規模化

## HTTP 是啥？
HTTP（HyperText Transfer Protocol）是全球資訊網資料通訊的基礎。

### HTTP request 的一生

Charles 可以看瀏覽器

瀏覽器 -> 製造 request -> 傳給 server
server -> 處理 -> 傳 response 回來

### DNS Domain Name System

![](https://i.imgur.com/RDqYXFe.png)

`nslookup github.com` 查看 github 的 IP 位置

### 瀏覽器
1. 發 request 到 DNS
2. 拿到 response 渲染
3. 根據回傳的 html 把資源下載

沒有瀏覽器一樣可以拿到 response
#### Request - Simplified HTTP client 
`npm install request`

### Header 與 Body
#### Header
額外資訊
#### Body
主要內容

### GET 與 POST
#### GET

#### POST
要執行一些動作（例如登入）
`GET`：GET 方法請求展示指定資源。使用 GET 的請求只應用於取得資料。
`HEAD`：HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。
`POST`：POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。
`PUT`：PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。
`DELETE`：DELETE 方法會刪除指定資源。
`PATCH`：PATCH 方法套用指定資源的部份修改。
[HTTP 請求方法](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Methods)

### HTTP 狀態碼
[HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)

301：永久移動到新位置
302：暫時