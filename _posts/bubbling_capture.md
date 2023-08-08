---
title: 事件傳遞機制：冒泡 & 捕獲
tags:
- DOM
categories: 前端
---
DOM 的事件在傳遞時，是由根結點向下傳遞至目標，傳遞至目標後會依序向上傳遞。在這過程中，<font color=#FF0000>向下傳遞</font>的過程被稱為<font color=#FF0000>捕獲階段（Capture Phase）</font>，而<font color=#008000>向上傳遞</font>的過程則是<font color=#008000>冒泡階段（Bubbling Phase）</font>，在事件抵達目標時則會有目標階段（Target Phase）。

因此事件傳遞的順序必然是「**先捕獲，再冒泡**」。

下圖引用自 W3C，從下圖可看到整個事件的傳遞機制，是先發生捕獲階段，由根結點向下傳遞，抵達目標後，再發生冒泡階段，由目標向上傳遞回根節點。

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)