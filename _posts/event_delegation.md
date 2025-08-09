---
title: JavaScript 事件代理 (Event Delegation) 詳解
date: 2022-08-21 10:00:00
tags:
- javascript
- dom
- event-delegation
categories:
- 前端
- JavaScript
---

## 什麼是事件代理 (Event Delegation)？

事件代理是一種 JavaScript 的設計模式，它利用了 DOM 的**事件冒泡 (Event Bubbling)** 機制，讓我們可以將事件監聽器加在父層元素上，而不是在每個子層元素上都加上監聽器。

當子層元素的事件被觸發時，這個事件會向上冒泡到父層元素，父層元素的監聽器就會被觸發。我們可以透過事件物件的 `target` 屬性來判斷是哪一個子層元素觸發了事件。

## 為什麼要使用事件代理？

使用事件代理主要有以下兩個好處：

1.  **提升效能:** 如果我們有大量的子層元素需要監聽事件，例如一個很長的列表，為每個子層元素都加上監聽器會佔用大量的記憶體。使用事件代理，我們只需要一個監聽器，就可以管理所有子層元素的事件，大大地提升了效能。
2.  **動態新增的元素也能監聽到事件:** 如果我們在頁面上動態地新增了子層元素，我們不需要再為新的元素重新綁定事件監聽器。因為事件監聽器是加在父層元素上，所以新的子層元素觸發的事件一樣可以被監聽到。

## 範例

假設我們有一個 `<ul>` 列表，我們希望點擊每個 `<li>` 時，都能夠印出它的內容。

**不使用事件代理的寫法：**

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const listItems = document.querySelectorAll('#list li');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      console.log(item.textContent);
    });
  });
</script>
```

**使用事件代理的寫法：**

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const list = document.getElementById('list');
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      console.log(e.target.textContent);
    }
  });
</script>
```

在事件代理的寫法中，我們只在 `<ul>` 上加了一個事件監聽器。當 `<li>` 被點擊時，事件會冒泡到 `<ul>`，然後我們再透過 `e.target` 來判斷被點擊的元素是不是 `<li>`，如果是的話，才執行我們的程式碼。