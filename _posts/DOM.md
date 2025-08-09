---
title: DOM (文件物件模型) 詳解
date: 2022-09-12 10:00:00
tags:
- javascript
- dom
- web
categories:
- 前端
- JavaScript
---

## 什麼是 DOM？

DOM (Document Object Model) 是 W3C 所制定的標準，它將整個 HTML 文件轉換成一個由**節點 (node)** 組成的樹狀結構。JavaScript 可以透過 DOM API 來存取和操作文件中的任何元素，例如改變元素的內容、樣式、結構等。

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/330px-DOM-model.svg.png)

## 選取 DOM 元素

-   `document.getElementById(id)`: 透過 ID 選取元素。
-   `document.getElementsByTagName(tagName)`: 透過標籤名稱選取元素。
-   `document.getElementsByClassName(className)`: 透過 class 名稱選取元素。
-   `document.querySelector(selector)`: 透過 CSS 選擇器選取第一個符合的元素。
-   `document.querySelectorAll(selector)`: 透過 CSS 選擇器選取所有符合的元素。

## 操作 DOM 元素

### 修改元素內容

-   `element.innerHTML`: 取得或設定元素的 HTML 內容。
-   `element.textContent`: 取得或設定元素的文字內容。

### 修改元素樣式

-   `element.style.property = value`: 設定元素的 CSS 樣式。

### 修改元素屬性

-   `element.getAttribute(attributeName)`: 取得元素的屬性值。
-   `element.setAttribute(attributeName, value)`: 設定元素的屬性值。

### 新增和刪除元素

-   `document.createElement(tagName)`: 建立一個新的元素。
-   `parentElement.appendChild(childElement)`: 將一個子元素附加到父元素的最後。
-   `parentElement.removeChild(childElement)`: 從父元素中移除一個子元素。

**範例：**

```html
<div id="container">
  <p>Hello</p>
</div>

<script>
  const container = document.getElementById('container');
  const newP = document.createElement('p');
  newP.textContent = 'World';
  container.appendChild(newP);
</script>
```