---
title: JSONP
tags:
- JavaScript
categories:
- 前端
- JavaScript
---
## JSONP 是什麼？
JSONP 的全名是 JSON with Padding，是一種可以進行跨來源請求的方法。
原理是利用 `<script></script>` 標籤可以跨網域的特性，將遠端的資料利用 callback function 帶入本地端。
```htmlmixed=
<script href="https://another-origin.com/api/"></script>
<script>
  function receiveData (response) {
    console.log(response);
  }
</script>
```
若此時 `https://another-origin.com/api/` 返回的內容如下：
```javascript=
receiveData({
  data: 'test'
});
```
透過函式，那麼原本 html 中的 javascript 便可以存取來自其他網域的資料。

JSONP 的缺點是附加的參數（例如：client-ID 等）只能透過附加在 url 上傳送，也只能使用 GET 方法發送 request，無法使用 POST 或其他 request 方法。
