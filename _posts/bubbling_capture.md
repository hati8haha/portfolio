---
title: 事件傳遞機制：冒泡與捕獲
date: 2022-08-26 10:00:00
tags:
- javascript
- dom
- event
- bubbling
- capturing
categories:
- 前端
- JavaScript
---

當一個事件在 DOM 元素上被觸發時，它並不是只在該元素上發生。事件會經過一個稱為**事件傳遞 (Event Propagation)** 的過程，這個過程包含了兩個階段：**捕獲 (Capturing)** 和**冒泡 (Bubbling)**。

### 捕獲階段 (Capturing Phase)

事件會從文件的根節點開始，一路向下傳遞到觸發事件的目標元素。這個過程稱為**捕獲階段**。

### 冒泡階段 (Bubbling Phase)

當事件到達目標元素後，它會再從目標元素開始，一路向上傳遞回文件的根節點。這個過程稱為**冒泡階段**。這是大部分事件的預設行為。

### 目標階段 (Target Phase)

當事件到達目標元素時，這個階段稱為**目標階段**。

### 事件傳遞的順序

因此，事件傳遞的順序必然是「**先捕獲，再冒泡**」。

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

### 控制事件傳遞

我們可以使用 `addEventListener` 的第三個參數來控制要在哪個階段監聽事件。

-   **`false` (預設值):** 在冒泡階段監聽事件。
-   **`true`:** 在捕獲階段監聽事件。

**範例：**

```html
<div id="outer">
  <div id="inner">Click me</div>
</div>

<script>
  const outer = document.getElementById('outer');
  const inner = document.getElementById('inner');

  outer.addEventListener('click', () => {
    console.log('Outer div (capturing)');
  }, true);

  inner.addEventListener('click', () => {
    console.log('Inner div (capturing)');
  }, true);

  outer.addEventListener('click', () => {
    console.log('Outer div (bubbling)');
  });

  inner.addEventListener('click', () => {
    console.log('Inner div (bubbling)');
  });
</script>
```

當您點擊 "Click me" 的 `div` 時，您會在 console 中看到以下的輸出：

```
Outer div (capturing)
Inner div (capturing)
Inner div (bubbling)
Outer div (bubbling)
```
