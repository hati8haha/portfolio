---
title: BOM DOM 差別
tags:
- DOM
- BOM
- 瀏覽器
categories:
- 前端
---

JavaScript 並沒有提供網頁的操作方法，前端開發者在網頁的操作方法都是「瀏覽器」（JavaScript 操作平台）提供的。

這些操作方法基本上會分別由這兩種物件所擁有：「BOM」與「DOM」。
![](https://i.imgur.com/ngwWqwX.png)
『BOM』完全依賴瀏覽器廠商實作本身沒有標準規範，『DOM』有W3C所制定的標準來規範。
## BOM
BOM (Browser Object Model，瀏覽器物件模型)
BOM 核心是 window 物件。
和網頁本身的內容無關。
![](https://i.imgur.com/MrRBxof.png)

## DOM
DOM (Document Object Model，文件物件模型)
![](https://i.imgur.com/naahMeY.png)

操作網頁內容時，就須透過 DOM。

如上圖所示，每一個 HTML 標籤就是一個節點。
DOM 提供的 API 就是讓 JavaScript 可以改變、存取 HTML 樣式、架構及內容的方法。
還有，對節點的綁定事件。

