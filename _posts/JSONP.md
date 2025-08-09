---
title: JSONP 跨來源請求詳解
date: 2022-09-08 10:00:00
tags:
- jsonp
- cors
- web-security
categories:
- 前端
- 網路
---

## 什麼是 JSONP？

JSONP (JSON with Padding) 是一種在 JavaScript 中進行跨來源請求的技術。它利用了 `<script>` 標籤不受**同源政策 (Same-origin Policy)** 限制的特性，來取得來自不同網域的資料。

## JSONP 的運作原理

1.  在您的網頁中，您會動態地建立一個 `<script>` 標籤，並將它的 `src` 屬性設定為您要請求的 API 的 URL，並在 URL 中加上一個 `callback` 參數，這個參數的值是您在網頁中定義好的一個函式的名稱。
2.  當伺服器收到這個請求時，它會將要回傳的 JSON 資料包裝在您指定的 `callback` 函式中，並將這個函式呼叫的 JavaScript 程式碼回傳給您的網頁。
3.  當您的網頁收到這個回應時，它會執行這個 JavaScript 程式碼，從而觸發您定義好的 `callback` 函式，並將 JSON 資料作為參數傳入。

**範例：**

```html
<script>
  function handleResponse(data) {
    console.log(data);
  }
</script>
<script src="https://api.example.com/data?callback=handleResponse"></script>
```

伺服器端的回應：

```javascript
handleResponse({"name": "John", "age": 30});
```

## JSONP 的缺點和安全風險

-   **只能使用 `GET` 方法:** JSONP 只能使用 `GET` 方法來發送請求。
-   **安全性問題:** JSONP 非常不安全，因為它會執行來自第三方伺服器的任意 JavaScript 程式碼。如果第三方伺服器被駭客入侵，駭客就可以在您的網頁上執行任意的惡意程式碼。

## CORS：現代的替代方案

由於 JSONP 的安全風險，現在建議使用 **CORS (Cross-Origin Resource Sharing)** 來進行跨來源請求。CORS 是一個 W3C 標準，它允許伺服器在回應的 header 中加上一個 `Access-Control-Allow-Origin` 的欄位，來指定哪些網域可以存取它的資源。CORS 比 JSONP 更安全、更彈性，並且支援所有的 HTTP 方法。