---
title: SQL Injection 的攻擊原理以及防範方法
tags:
- 資料庫
- 資安
- SQL Injection
categories:
- 前端
---
### 攻擊原理
輸入特定含有 sql 語法的資料，讓 sql query 內容被竄改，達到符合攻擊目的。
例如以下範例：
```sql=
SELECT * FROM hati8haha_users WHERE username = $username AND password = $password
```
正常情況下變數 `$username` 與 `$password` 會帶入使用者輸入的資料，若有符合條件才會列出。
但若將 `$password` 替換成 `' OR 1=1 #` 那麼就會執行以下 sql query
```sql=
SELECT * FROM hati8haha_users WHERE username = 'username' AND password = '' OR 1=1 #'
```
因為 `OR 1=1`，因此無論輸入任何帳號密碼都可以取得身分認證成功登入。

### 防範方法：Prepared statement
將傳進去的資料用編譯後的參數替代，不會直接用原始資料進行 sql query

php 的 prepared statement 範例：
```php=
$sql = "insert into comments(nickname, content) values(?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ss', $nickname, $content);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}
$result = $stmt->get_result()
```