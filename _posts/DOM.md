---
title: DOM
tags:
- DOM
- 瀏覽器
categories:
- 前端
---
DOM 為 Document Object Model 的縮寫，中文為文件物件模型。

透過 DOM，可以將 html 文件以**物件**的形式提供給程式進行存取，進而可以改變 html 的架構、style 以及內容。而這個物件是根據 html 中的標籤所建立出的樹狀結構，html 中的標籤在樹狀結構上會以**節點**表示。DOM 的樹狀結構可參考下圖：

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/330px-DOM-model.svg.png)

有了 DOM 之後，Javascript 便可以呼叫 DOM API 來對 html 文件內容進行操作。

如果要透過 DOM API 取得元素內容，可以使用以下幾種方式：
1. `document.getElementById("elementID")`
依據元素 ID 取得元素
2. `document.getElementsByTagName("elementTagName")`
依據標籤選取所有符合的元素
3. `document.getElementByClassName("elementClassName")`
依據 Class 選取所有符合的元素
4. `document.querySelector(".elementClass")`
使用 CSS 選擇器的方式選取元素，只會選取到符合的第一個元素
5. `document.querySelectorAll("div")`
使用 CSS 選擇器的方式選取所有符合的元素

