---
title: display 的 inline, block 跟 inline-block 的差別是什麼？
tags:
- HTML
categories:
- 前端
- HTML
---
###### tags: `HTML`
### display: inline
指行內元素，Content 的寬高會依據內容顯示，無法調整。左右 margin 可以調整，上下無法。左右 padding 可以調整，上下只會顯示背景的改變，但元素位置不會動。

屬於 inline 的 html 元素包含 `<span>`、`<a>`、`<input>`、`<img>`
### display: block
會佔滿一整行，padding、border、margin 調整對整個元素都有影響。

屬於 block 的 html 元素包含 `<div>`、`<ul>`、`<li>`、`<p>`、`<h1>`
### display: inline-block
對外像 inline 可以併排，對內像 block 可以調整屬性。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
### position: static
預設的元素定位類型。
當該元素定位類型為 `position: static` 時，`top`、`right`、`bottom`、`left` 和 `z-index` 屬性皆無效。
### position: relative
設定為 `postion: relative` 的元素可以透過`top`、`right`、`bottom`、`left` 和 `z-index` 等屬性改變定位。
以此方式定位的元素不會影響其他的元素定位。
### position: absolute
`position: absolute` 會需要參考點進行定位，參考點會以最近的（上層）非 static 定位元素為參考點。
以絕對定位定位的元素會被排除在預設排版之外，原本的空間會被接續的元素替補上。
### position: fixed
相對於瀏覽器做定位，位置可以固定定位在瀏覽器（更精確的說法為 viewport）上的位置，在頁面滾動不會隨頁面而上升或下降。