---
title: 資料庫的 ACID
tags:
- 資料庫
categories:
- 後端
---
### Transaction 交易
在以下情況中，會涉及多個以上的 query，而這些 query 必須確保所有動作都是成功且不受干擾。這類動作會被稱為 Transaction。
* 轉帳
* 購物（一次買多個品項）
* 其他一次牽扯到多個 query 的操作

#### php 範例程式碼
```php=
$conn->autocommit(FALSE);  
$conn->begin_transaction();  
$conn->query("update from money set amount = 20");  
$conn->query("update from money set sum = 10");  
$conn->commit();
```

### ACID

為了保證 Transaction 的正確性，要符合以下四個特性
1. **原子性 atomicity**：只能全部失敗或全部成功
2. **一致性 consistency**：維持資料的一致性（錢的總數相同）
3. **隔離性 isolation**：多筆交易不會互相影響（不能同時改同一個值）
4. **持久性 durability**：交易成功之後，寫入的資料不會不見

這四個特性的字首縮寫便是 ACID。
