---
title: CSS 盒模型 (Box Model) 詳解
date: 2022-08-27 10:00:00
tags:
- css
- box-model
- margin
- padding
- border
categories:
- 前端
- CSS
---

在 CSS 中，每個 HTML 元素都可以被視為一個矩形的盒子，這個盒子包含了內容 (content)、內距 (padding)、邊框 (border) 和外距 (margin)。這個模型就稱為**盒模型 (Box Model)**。

![](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

### 盒模型的四個部分

1.  **內容 (Content):** 盒子的最內層，用來顯示文字、圖片等內容。我們可以使用 `width` 和 `height` 屬性來設定內容的寬高。
2.  **內距 (Padding):** 內容與邊框之間的空間。我們可以使用 `padding` 屬性來設定內距的大小。
3.  **邊框 (Border):** 包圍在內距外圍的線條。我們可以使用 `border` 屬性來設定邊框的樣式、寬度和顏色。
4.  **外距 (Margin):** 邊框與其他元素之間的空間。我們可以使用 `margin` 屬性來設定外距的大小。

### `box-sizing` 屬性

`box-sizing` 屬性可以讓我們改變盒模型的計算方式。

-   **`content-box` (預設值):** `width` 和 `height` 只包含內容的寬高，不包含內距和邊框。
-   **`border-box`:** `width` 和 `height` 包含內容、內距和邊框的寬高。這可以讓我們更容易地控制元素的總寬高。

**範例：**

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 10px solid black;
}

.content-box {
  box-sizing: content-box; /* 總寬度 = 200 + 20*2 + 10*2 = 260px */
}

.border-box {
  box-sizing: border-box; /* 總寬度 = 200px */
}
```

### `padding`、`border`、`margin` 的語法

這三個屬性都可以使用縮寫的語法來設定四個方向的值：

-   **四個值:** `padding: 10px 20px 30px 40px;` (上、右、下、左)
-   **三個值:** `padding: 10px 20px 30px;` (上、左右、下)
-   **兩個值:** `padding: 10px 20px;` (上下、左右)
-   **一個值:** `padding: 10px;` (四個方向皆同)
