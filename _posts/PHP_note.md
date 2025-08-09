---
title: PHP 基礎入門筆記
date: 2022-09-04 10:00:00
tags:
- php
- mysql
- web-development
categories:
- 後端
- PHP
---

## 開發環境

要開始學習 PHP，您需要先建立一個開發環境。最簡單的方法是使用 [XAMPP](https://www.apachefriends.org/)，它是一個整合了 Apache、MySQL 和 PHP 的開發環境。

## 資料庫

資料庫是用來儲存和管理資料的系統。在網站開發中，最常使用的是**關聯式資料庫**，例如 MySQL。

### MySQL

MySQL 是一個開源的關聯式資料庫管理系統。您可以使用 [phpMyAdmin](https://www.phpmyadmin.net/) 這個網頁介面的工具來管理您的 MySQL 資料庫。

**基本 SQL 語法:**

-   `SELECT`: 查詢資料
-   `INSERT`: 新增資料
-   `UPDATE`: 修改資料
-   `DELETE`: 刪除資料

## PHP

PHP 是一個開源的伺服器端腳本語言，它非常適合用來開發動態網站。

### PHP 與 MySQL 的互動

在 PHP 中，您可以使用 `mysqli` 或 `PDO` 來連線到 MySQL 資料庫，並執行 SQL 查詢。

**使用 `mysqli` 的範例：**

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// 建立連線
$conn = new mysqli($servername, $username, $password, $dbname);

// 檢查連線
if ($conn->connect_error) {
  die("連線失敗: " . $conn->connect_error);
}

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // 輸出每筆資料
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 筆結果";
}
$conn->close();
?>
```

### 從前端傳送資料給後端

您可以使用 HTML 的 `<form>` 標籤來讓使用者輸入資料，並將資料傳送給後端 PHP 程式。

-   **`GET`**: 資料會附加在 URL 上傳送。
-   **`POST`**: 資料會放在請求的主體中傳送，較為安全。

**範例：**

```html
<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>
```

在 `welcome.php` 中，您可以使用 `$_POST['name']` 和 `$_POST['email']` 來取得使用者輸入的資料。