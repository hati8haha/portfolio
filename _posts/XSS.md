---
title: XSS (跨網站指令碼) 攻擊的原理與防範
date: 2022-08-28 10:00:00
tags:
- security
- xss
- web
categories:
- 資安
---

## 什麼是 XSS？

XSS (Cross-site Scripting)，全名為**跨網站指令碼**，是一種常見的網站安全漏洞。攻擊者可以利用這個漏洞，將惡意的 JavaScript 程式碼注入到您的網站中，當其他使用者瀏覽到被注入惡意程式碼的頁面時，這些程式碼就會在他們的瀏覽器上執行。

## XSS 的攻擊類型

XSS 攻擊主要可以分為三種類型：

1.  **儲存型 XSS (Stored XSS):** 惡意的程式碼被儲存在網站的資料庫中，例如文章、留言等。當使用者瀏覽到這些內容時，惡意的程式碼就會被執行。
2.  **反射型 XSS (Reflected XSS):** 惡意的程式碼被包含在一個 URL 中，當使用者點擊這個 URL 時，惡意的程式碼就會在他們的瀏覽器上執行。
3.  **DOM 型 XSS (DOM-based XSS):** 惡意的程式碼是透過修改頁面的 DOM (文件物件模型) 來執行的，這種攻擊不會經過伺服器。

## XSS 的防範方法

防範 XSS 攻擊的核心原則是：**永遠不要相信使用者的輸入**。

1.  **輸入驗證 (Input Validation):** 在接收到使用者的輸入時，應該要先進行驗證，過濾掉不合法的字元或格式。
2.  **輸出編碼 (Output Encoding):** 在將資料顯示在頁面上時，應該要對資料進行 HTML 編碼，將特殊字元 (例如 `<`、`>`、`"`、`'`) 轉換成 HTML 實體 (例如 `&lt;`、`&gt;`、`&quot;`、`&#39;`)，讓瀏覽器將它們當作純文字來顯示，而不是當作 HTML 標籤來解析。

**PHP 範例：**

```php
<?php

// 從使用者輸入中取得留言
$comment = $_POST['comment'];

// 將留言進行 HTML 編碼後再顯示
echo htmlspecialchars($comment, ENT_QUOTES, 'UTF-8');

?>
```

3.  **設定 `Content-Security-Policy` (CSP):** CSP 是一個 HTTP header，它可以讓您設定一個白名單，告訴瀏覽器只能載入來自哪些來源的資源 (例如 JavaScript、CSS、圖片等)。這可以有效地防止惡意程式碼的執行。

4.  **設定 Cookie 的 `HttpOnly` 屬性:** 如果您的 Cookie 中包含了敏感的資訊 (例如 session ID)，您應該要將它設定為 `HttpOnly`。這樣一來，這個 Cookie 就無法被 JavaScript 的 `document.cookie` API 所存取，可以有效地防止 XSS 攻擊竊取您的 Cookie。