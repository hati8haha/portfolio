---
title: CSRF (跨站請求偽造) 攻擊的原理與防範
date: 2022-09-17 10:00:00
tags:
- security
- csrf
- web
categories:
- 資安
- 後端
---

## 什麼是 CSRF？

CSRF (Cross-Site Request Forgery)，全名為**跨站請求偽造**，是一種常見的網站安全漏洞。攻擊者可以利用這個漏洞，誘騙使用者在不知情的情況下，發送一個他們不想要的請求到您的網站，例如修改密碼、轉帳等。

## CSRF 的攻擊原理

CSRF 的攻擊原理是，當使用者登入您的網站後，瀏覽器會儲存您的網站的 cookie。如果使用者在同一個瀏覽器中，又開啟了另一個惡意網站，惡意網站就可以在使用者不知情的情況下，向您的網站發送一個偽造的請求。因為這個請求會帶上使用者瀏覽器中儲存的 cookie，所以您的網站會以為這個請求是來自於使用者本人，從而執行了惡意的操作。

## CSRF 的防範方法

防範 CSRF 的最好方法是使用 **CSRF Token**。

CSRF Token 是一個由伺服器端產生，並儲存在使用者 session 中的隨機字串。當使用者要發送一個請求時，伺服器端會將這個 CSRF Token 放在表單的一個隱藏欄位中。當使用者提交表單時，瀏覽器會將這個 CSRF Token 一併送回伺服器端。伺服器端會比對使用者送回來的 CSRF Token 和儲存在 session 中的 CSRF Token 是否一致，如果一致，才會執行這個請求。

**PHP 範例：**

1.  在表單中加入 CSRF Token:

    ```php
    <?php
    session_start();
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    ?>

    <form action="/transfer" method="post">
      <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
      <input type="text" name="amount">
      <input type="submit" value="Transfer">
    </form>
    ```

2.  在伺服器端驗證 CSRF Token:

    ```php
    <?php
    session_start();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
      }

      // ... 處理轉帳邏輯
    }
    ```
