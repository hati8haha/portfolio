---
title: 什麼是資料庫的 lock
tags:
- 資料庫
categories: "後端"
---
### lock 是什麼

資料庫的 lock 是指鎖住資料庫的狀態，不讓在 lock 狀態下的資料庫，資料無法更動。

為了避免 race condition 發生，因此需要透過 lock 來將資料庫鎖定狀態。

#### php lock 範例程式碼
```php=
$conn->autocommit(FALSE);  
$conn->begin_transaction();  
$conn->query("SELECT amount from products where id = 1 for update");  
$conn->commit();  
```


### 什麼是 race condition

例如某網路商城的貨品 A 只剩下一件，小明和老王都同時下貨品 A 的訂單，而下訂單的程式邏輯為：
```
1. 確認庫存數量大於或等於下單貨品數量
2. 若結果為 false，則下單失敗；若為 true，繼續執行
3. 庫存數量 - 下訂單貨品數量
4. 購物車數量 - 下訂單貨品數量
5. 帳戶訂單 + 下訂單貨品數量
```

若小明訂單在步驟 1~2 結果為 「庫存數量大於或等於下單貨品數量」，還沒執行到步驟 3 時，老王的訂單就開始執行步驟 1~2，那麼就會造成兩人在步驟 1~2 結果都為 「庫存數量大於或等於下單貨品數量」。

結果就是會造成程式會執行兩筆訂單的 3~5 步驟，造成超賣現象。而這種情形稱作 race condition。


