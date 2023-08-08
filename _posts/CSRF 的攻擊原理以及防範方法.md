---
title: CSRF 的攻擊原理以及防範方法
tags:
- 資安
- CSRF
categories:
- 前端
---
### 攻擊原理
CSRF 的全名為 Cross Site Request Forgery，中文名為「跨站請求偽造」，也被稱為 one-click attack。

CSRF 的攻擊模式是在使用者連線至惡意網站時，以 client 端儲存的 cookie 或 session 偽造使用者發送的 request，達到攻擊目的。

例如小明在登入網路銀行之後，在開啟新分頁玩小遊戲，但小遊戲網頁卻有隱藏的惡意連結，會發送轉帳的 request，因為有網路銀行的 session 是登入狀態，因此小明的錢就莫名其妙被轉帳到駭客帳戶了。

### 防範方法：檢查 Referer、CSRF token
CSRF 的 reuqest 跟使用者本人發出的 request 的不同就在於發送 request 的 domain 一個是來自不同 domain，另一個則是來自同 domain。檢查 Referer、CSRF token 兩種方法都是透過此概念實行的防禦手段。
1. 檢查 Referer
   request 的 header 裡面會帶一個欄位是 referer ，可以從 referer 這個欄位看到該 request 是從哪發送的。因此可以透過此方式檢查是否為跨站 request。但有部分瀏覽器不會帶 referer 或使用者會關掉自動帶 referer 功能，同時檢查 referer 的程式若沒寫好可能會有漏洞。
2. CSRF token
   CSRF token 是產生一組只有使用者知道的隨機 token，在發送 request 時需要帶上這個 token 才能通過驗證。CSRF token 有儲存在 server 端或儲存在 client 端的作法。因為攻擊者的沒辦法讀寫目標網站的 cookie，所以可以用來驗證是否為跨 domain 的 request。