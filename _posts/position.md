---
title: "CSS Position 屬性：static, relative, absolute 與 fixed 的詳解"
date: 2022-08-19 10:00:00
tags:
- css
- position
- static
- relative
- absolute
- fixed
categories:
- 前端
- CSS
---

在 CSS 中，`position` 屬性用於指定元素的定位方式。它可以讓您將元素精確地放置在頁面的任何位置。`position` 屬性有五個主要的值：`static`、`relative`、`absolute`、`fixed` 和 `sticky`。

### position: static

`static` 是 `position` 屬性的預設值。`static` 定位的元素會遵循正常的文檔流，`top`、`right`、`bottom`、`left` 和 `z-index` 屬性對其無效。

**範例：**

```html
<div style="position: static; background-color: lightblue;">這是一個 static 定位的元素</div>
```

### position: relative

`relative` 定位的元素會相對於其正常位置進行定位。您可以使用 `top`、`right`、`bottom` 和 `left` 屬性來移動它，但它原本在文檔流中所佔據的空間仍然會被保留。

**範例：**

```html
<div style="position: relative; top: 20px; left: 20px; background-color: lightblue;">這是一個 relative 定位的元素</div>
```

### position: absolute

`absolute` 定位的元素會完全脫離文檔流，並相對於其最近的非 `static` 定位的祖先元素進行定位。如果沒有這樣的祖先元素，它會相對於 `<html>` 元素進行定位。

**範例：**

```html
<div style="position: relative; width: 200px; height: 200px; border: 1px solid black;">
  <div style="position: absolute; top: 20px; right: 20px; width: 100px; height: 100px; background-color: lightblue;">這是一個 absolute 定位的元素</div>
</div>
```

### position: fixed

`fixed` 定位的元素會相對於瀏覽器視窗進行定位，即使頁面滾動，它也會保持在相同的位置。`fixed` 定位的元素也會脫離文檔流。

**範例：**

```html
<div style="position: fixed; top: 20px; right: 20px; background-color: lightblue;">這是一個 fixed 定位的元素</div>
```

## 總結

| `position` 值 | 定位相對於 | 脫離文檔流 | `top`, `right`, `bottom`, `left` | `z-index` |
| :--- | :--- | :--- | :--- | :--- |
| `static` | 正常文檔流 | 否 | 無效 | 無效 |
| `relative` | 自身正常位置 | 否 | 有效 | 有效 |
| `absolute` | 最近的非 `static` 祖先 | 是 | 有效 | 有效 |
| `fixed` | 瀏覽器視窗 | 是 | 有效 | 有效 |