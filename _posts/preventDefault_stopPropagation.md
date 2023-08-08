
---
title: event.preventDefault() 跟 event.stopPropagation() 差別
tags:
- DOM
- 瀏覽器
categories:
- 前端
---
### event.preventDefault()
取消事件的預設行為，例如避免送出表單或阻止超連結。
但是不會影響事件傳遞，事件的捕獲與冒泡會正常傳遞。
### event.stopPropagation()
可以取消事件的傳遞，可以透過 `target.addEventListener(type, listener, useCapture)`  的第三個參數來控制要在捕獲階段還是冒泡階段取消事件傳遞。
### 範例
![](https://i.imgur.com/l05Aoth.png)

今天有一個 html 文件，html 中有 box1 與 box2 兩個區塊，並且對兩個區塊增加監聽事件。

若 box1 事件被觸發，則會執行 `console.log()` 印出 `box1`。
若 box2 事件被觸發，則會送出表單，並會執行 `console.log()` 印出 `box2`。

#### 情況一：無 event.preventDefault() 也無 event.stopPropagation()
在此情況下 box1 與 box2 事件都被觸發，會送出表單並且同時印出 `box1` 與 `box2`。

#### 情況二：在 box2 中加上 event.preventDefault()
此時表單不會被送出，但 `box1` 與 `box2` 都會被印出來。這邊的預設行為是送出表單，因為 `event.preventDefault()` 因此被取消了。由於事件傳遞依然會繼續，因此 `box1` 仍會被印出。

#### 情況三：在 box2 中加上 event.stopPropagation()
此時表單會被送出，會印出 `box2` 但不會印出 `box1`。因為向上傳遞的事件被取消了，因此 box1 不會歷經冒泡階段，所以不會印出 `box1`。