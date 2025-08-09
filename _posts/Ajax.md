---
title: Ajax (非同步 JavaScript 與 XML) 入門
date: 2022-09-20 10:00:00
tags:
- ajax
- javascript
- fetch
- xhr
categories:
- 前端
- JavaScript
---

## 什麼是 Ajax？

Ajax (Asynchronous JavaScript and XML) 是一種在網頁中進行**非同步**請求的技術。它可以讓您在不重新載入整個頁面的情況下，與伺服器交換資料並更新部分的網頁內容。

## Ajax 的運作方式

傳統的網頁請求是**同步的**，也就是說，當瀏覽器發送一個請求時，它必須等待伺服器的回應，才能繼續執行其他的程式碼。這會導致頁面在等待回應的過程中，完全沒有反應，給使用者帶來不好的體驗。

而 Ajax 使用**非同步**的方式來發送請求。當瀏覽器發送一個 Ajax 請求時，它可以繼續執行其他的程式碼，而不需要等待伺服器的回應。當伺服器的回應回來時，瀏覽器會觸發一個事件，您可以在這個事件的處理函式中，來更新您的網頁內容。

## `XMLHttpRequest`

`XMLHttpRequest` (XHR) 是一個內建在瀏覽器中的物件，它可以讓您在 JavaScript 中發送 HTTP 請求。

**範例：**

```javascript
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();
```

## `fetch` API

`fetch` API 是一個現代的、基於 Promise 的 API，它可以讓您更容易地發送 HTTP 請求。

**範例：**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

`fetch` API 比 `XMLHttpRequest` 更簡單、更強大，是現在建議使用的 Ajax 技術。