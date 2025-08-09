---
title: PHP 中 include、require、include_once、require_once 的差別
date: 2022-08-17 10:00:00
tags:
- php
- include
- require
categories:
- 後端
- PHP
---

在 PHP 中，`include`、`require`、`include_once` 和 `require_once` 都是用來將一個檔案的內容引入到另一個檔案中。雖然它們的功能相似，但在錯誤處理和重複引入方面存在著重要的差異。

## `include` vs `require`

`include` 和 `require` 的主要區別在於它們如何處理引入檔案失敗的情況。

-   **`include`**: 如果引入的檔案不存在或發生錯誤，`include` 會產生一個 `E_WARNING` 級別的錯誤，但程式會繼續執行。
-   **`require`**: 如果引入的檔案不存在或發生錯誤，`require` 會產生一個 `E_COMPILE_ERROR` 級別的致命錯誤，並立即終止程式的執行。

### 範例

假設我們有一個 `config.php` 檔案：

```php
<?php

echo "設定檔載入成功！";

?>
```

現在，我們嘗試在另一個檔案中引入一個不存在的 `db.php`：

**使用 `include`:**

```php
<?php

include 'db.php'; // 這個檔案不存在
echo '程式繼續執行';

?>
```

**輸出:**

```
Warning: include(db.php): failed to open stream: No such file or directory in ...
Warning: include(): Failed opening 'db.php' for inclusion (include_path='...') in ...
程式繼續執行
```

**使用 `require`:**

```php
<?php

require 'db.php'; // 這個檔案不存在
echo '程式不會執行到這裡';

?>
```

**輸出:**

```
Warning: require(db.php): failed to open stream: No such file or directory in ...
Fatal error: require(): Failed opening required 'db.php' (include_path='...') in ...
```

## `include_once` vs `require_once`

`include_once` 和 `require_once` 的功能與 `include` 和 `require` 類似，但它們會先檢查要引入的檔案是否已經在程式中被引入過。如果已經被引入過，就不會再次重複引入。

這有助於避免因為重複引入同一個檔案而導致的函數或類別重複定義的錯誤。

### 範例

```php
<?php

include_once 'config.php';
include_once 'config.php'; // 第二次引入將被忽略

require_once 'config.php';
require_once 'config.php'; // 第二次引入將被忽略

?>
```

**輸出:**

```
設定檔載入成功！
```

## 總結

| | 檔案不存在時的錯誤 | 重複引入 |
| :--- | :--- | :--- |
| `include` | `E_WARNING` (程式繼續) | 允許 |
| `require` | `E_COMPILE_ERROR` (程式終止) | 允許 |
| `include_once` | `E_WARNING` (程式繼續) | 忽略 |
| `require_once` | `E_COMPILE_ERROR` (程式終止) | 忽略 |

## 最佳實踐

-   **`require_once`**: 當您引入的檔案對於程式的執行至關重要時，例如資料庫設定、核心函式庫或類別定義，建議使用 `require_once`。這可以確保檔案只被引入一次，並且在引入失敗時立即終止程式，避免更嚴重的錯誤。
-   **`include_once`**: 當您引入的檔案不是那麼重要，例如一個模板檔案或一個輔助函式庫，您可以使用 `include_once`。
-   **避免使用 `include` 和 `require`**: 在現代的 PHP 開發中，為了避免重複引入的問題，通常建議優先使用 `include_once` 和 `require_once`。