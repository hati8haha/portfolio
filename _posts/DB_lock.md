---
title: 資料庫鎖 (Lock) 與競爭條件 (Race Condition)
date: 2022-09-14 10:00:00
tags:
- database
- lock
- race-condition
categories:
- 後端
- 資料庫
---

## 什麼是競爭條件 (Race Condition)？

競爭條件是指當多個執行緒或行程同時存取和修改同一個共享資源時，最終的結果會因為它們的執行順序而有所不同，從而導致非預期的錯誤。

**範例：**

假設有一個網路商城的庫存系統，商品 A 的庫存只剩下 1。現在有兩個使用者同時下訂單購買商品 A。

1.  使用者 A 的請求進來，系統檢查庫存 (1 > 0)，準備要扣減庫存。
2.  在使用者 A 的請求還沒完成時，使用者 B 的請求也進來了，系統檢查庫存 (1 > 0)，也準備要扣減庫存。
3.  結果，兩個使用者都成功下訂單，但庫存卻變成了 -1，這就是一個競爭條件。

## 什麼是資料庫鎖 (Lock)？

為了解決競爭條件的問題，我們可以使用**資料庫鎖**。資料庫鎖是一種機制，它可以防止多個使用者同時修改同一個資料。

### 鎖的類型

-   **共享鎖 (Shared Lock):** 也稱為**讀鎖 (Read Lock)**。多個使用者可以同時讀取同一個資料，但不能修改。
-   **排他鎖 (Exclusive Lock):** 也稱為**寫鎖 (Write Lock)**。當一個使用者正在修改一個資料時，其他使用者不能讀取也不能修改。

### 在 MySQL 中使用鎖

在 MySQL 中，您可以使用 `SELECT ... FOR UPDATE` 來對一個資料列加上排他鎖。

**範例：**

```sql
START TRANSACTION;

SELECT quantity FROM products WHERE id = 1 FOR UPDATE;

-- 在這裡檢查庫存並更新

COMMIT;
```

當您執行 `SELECT ... FOR UPDATE` 時，MySQL 會將 `products` 表中 `id` 為 1 的資料列鎖定。在您提交 (commit) 或回滾 (rollback) 這個交易之前，其他的使用者都不能修改這個資料列。