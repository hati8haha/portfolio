---
title: Cookie 是什麼？如何設定？
tags:
- cookie
- web 基礎
categories:
- 前端
---
由於 HTTP 是無狀態的，因此每一個 Request 不相關，Server 會無法辨識是否為同個使用者。

而 Cookie 存在的目的就是為了讓 Server 能辨識使用者，透過 Cookie 這個**儲存在瀏覽器的小型文字檔案**，Server 便能辨識不同的 Request 是否來自同個使用者。

透過讓 Server 發送 Cookie 給瀏覽器，而瀏覽器將 Cookie 儲存起來，以便讓 Server 能辨識使用者。

在 Server 發送 設定 Cookie 的 response 給 Client 端之後，Client 發送到 Server 的 request 的 header 中會帶上 cookie。


```mermaid
graph LR
A[Client] -- rquest --> B[Server]
B -- Response with setCookie --> A
```
```mermaid
graph LR
A[Client] -- rquest with Cookie --> B[Server]
B -- 可以辨識使用者 --> A
```
在 php 實作中，可以用 `setcookie()` 來設定 cookie，可參考此範例：
`setcookie("cookie 名稱", cookie 參數, 失效時間)`
`time()` 會回傳現在時間
```php=
  <?php
  $expire = time() + 3600 * 24 * 30;  //沒設時間會很快失效
  setcookie("username", $username, $expire)
?>
```
