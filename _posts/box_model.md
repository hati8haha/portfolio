---
title: 盒模型（box model）
tags:
- HTML
categories:
- 前端
- HTML
---
html 中的可以看到的每個元素，都可以將它看作是盒模型。

盒模型由四個部分組成，分別如下圖所示：
![圖片來源：MDN box-model 介紹](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)
1. Content （內容）
Content 為盒模型中置入內容的元素，元素中的文字會在此區塊呈現。
在預設（`box-sizing: content-box;`）情況下，可以透過 `width` 以及 `height` 控制寬高。

2. Padding（內邊距）
Padding 可以用來將 Content 往內推，背景色會與 Content 相同。
可以透過 `padding:` 控制邊距的上下左右距離，越增加會將元素越往內推。

3. Border（邊框）
Border 包在 Padding 的外層，若增加數值會向外延伸。
可以透過 `border:` 控制邊框的上下左右寬度。
設定 `box-sizing: border-box;` 時，`width` 與 `height` 控制的寬高會是以邊框為範圍。

4. Margin（外邊距）
Margin 的背景色永遠為透明。
如果是 inline 元素，margin 的垂直方向 ( 上、下 ) 沒有效果。
透過 `margin:` 設定的的外邊距上下左右寬度可以為負值。

`padding:`、`border:`、`margin:` 的語法如下：
- 單位可以設定為像素 px、百分比 % 或 em、rem 等。
- 四個值：上、右、下、左。範例：`padding: 36px 12px 24px 12px;`
- 三個值：上、左右、下。範例：`border: 36px 12px 24px;`
- 兩個值：上下、左右。範例：`margin: 36px 12px;`
- 一個值：上下左右。範例：`border: 12px;`