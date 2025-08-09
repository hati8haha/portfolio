---
title: SQL Injection 攻擊的原理與防範
date: 2022-09-01 10:00:00
tags:
- security
- sql-injection
- web
categories:
- 資安
- 後端
---

## 什麼是 SQL Injection？

SQL Injection (SQL 注入) 是一種常見的網站安全漏洞，攻擊者可以利用這個漏洞，將惡意的 SQL 查詢語法注入到您的網站中，從而讀取、修改、刪除您的資料庫中的資料。

## SQL Injection 的攻擊原理

SQL Injection 的攻擊原理是，當您的網站在處理使用者輸入的資料時，沒有對使用者的輸入進行充分的過濾和檢查，就直接將使用者的輸入拼接到 SQL 查詢語法中，從而讓攻擊者可以控制 SQL 查詢的語意。

**範例：**

假設您有一個登入表單，您的 SQL 查詢語法如下：

```sql
SELECT * FROM users WHERE username = '$username' AND password = '$password'
```

如果使用者在密碼欄位中輸入 `' OR 1=1 --`，那麼您的 SQL 查詢語法就會變成：

```sql
SELECT * FROM users WHERE username = 'admin' AND password = '' OR 1=1 --'
```

因為 `OR 1=1` 永遠為 true，所以這個查詢會回傳 `users` 表中的所有資料，攻擊者就可以成功登入。

## SQL Injection 的攻擊類型

-   **In-band SQLi:** 攻擊者可以直接在同一個通訊頻道中看到攻擊的結果。
-   **Blind SQLi:** 攻擊者無法直接看到攻擊的結果，但可以透過觀察伺服器的回應來判斷攻擊是否成功。
-   **Out-of-band SQLi:** 攻擊者可以透過其他的通訊頻道 (例如 DNS 或 HTTP) 來取得攻擊的結果。

## SQL Injection 的防範方法

防範 SQL Injection 的最好方法是使用**預備語句 (Prepared Statements)**。

預備語句是將 SQL 查詢語法和使用者輸入的資料分開處理。首先，您會先將 SQL 查詢語法的模板送到資料庫伺服器，然後再將使用者輸入的資料作為參數傳送過去。這樣一來，資料庫伺服器就不會將使用者輸入的資料當作 SQL 查詢語法的一部分來解析，從而可以有效地防止 SQL Injection 攻擊。

**PHP (PDO) 範例：**

```php
<?php

$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');

$stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$stmt->execute(['username' => $_POST['username']]);

foreach ($stmt as $row) {
    // ...
}

?>
```
