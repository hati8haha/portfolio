---
title: BOM 與 DOM 的差異
date: 2022-08-22 10:00:00
tags:
- javascript
- bom
- dom
- browser
categories:
- 前端
- JavaScript
---

在 JavaScript 中，我們常常會聽到 BOM 和 DOM 這兩個名詞，它們都是用來讓我們可以透過 JavaScript 來操作網頁的 API，但它們的範疇和功能有所不同。

## DOM (Document Object Model)

DOM，全名為**文件物件模型 (Document Object Model)**，是 W3C 所制定的標準。它將整個 HTML 文件轉換成一個由節點 (node) 組成的樹狀結構，讓我們可以透過 JavaScript 來存取和操作文件中的任何元素，例如改變元素的內容、樣式、結構等。

**DOM 的核心是 `document` 物件。**

![](https://i.imgur.com/naahMeY.png)

## BOM (Browser Object Model)

BOM，全名為**瀏覽器物件模型 (Browser Object Model)**，是瀏覽器廠商自行實作的，沒有一個統一的標準。它提供了讓我們可以跟瀏覽器互動的 API，例如取得瀏覽器視窗的大小、導向到另一個頁面、跳出提示訊息等。

**BOM 的核心是 `window` 物件**，而 `document` 物件其實也是 `window` 物件下的一個屬性。

![](https://i.imgur.com/MrRBxof.png)

## 總結

| 特性 | DOM (Document Object Model) | BOM (Browser Object Model) |
| :--- | :--- | :--- |
| 標準 | W3C 標準 | 無統一標準 |
| 核心物件 | `document` | `window` |
| 功能 | 存取和操作 HTML 文件的內容 | 與瀏覽器視窗互動 |
| 範例 | `getElementById`, `querySelector` | `alert`, `location`, `screen` |