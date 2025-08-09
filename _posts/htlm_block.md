---
title: "CSS Display 屬性：inline, block 與 inline-block 的比較"
date: 2022-08-18 10:00:00
tags:
- css
- display
- inline
- block
- inline-block
categories:
- 前端
- HTML
---

在 CSS 中，`display` 屬性是一個非常重要的屬性，它決定了元素在頁面上的呈現方式。其中，`inline`、`block` 和 `inline-block` 是最基本也最常見的三個值。

### display: block

`block` 元素會佔據其父元素的整個寬度，並且在前後都會換行。常見的 `block` 元素有 `<div>`、`<p>`、`<h1>`-`<h6>`、`<ul>`、`<li>` 等。

**特性：**

-   可以設定 `width` 和 `height`。
-   可以設定 `margin` 和 `padding` 的四個方向。
-   會自動換行。

**範例：**

```html
<div style="display: block; background-color: lightblue; width: 200px; height: 100px; margin: 10px; padding: 10px;">這是一個 block 元素</div>
<div style="display: block; background-color: lightgreen; width: 200px; height: 100px; margin: 10px; padding: 10px;">這是另一個 block 元素</div>
```

### display: inline

`inline` 元素不會換行，它會與其他 `inline` 元素在同一行上顯示。常見的 `inline` 元素有 `<span>`、`<a>`、`<img>`、`<input>` 等。

**特性：**

-   不可以設定 `width` 和 `height`，元素的寬高由其內容決定。
-   只能設定 `margin` 和 `padding` 的左右值，上下值無效。
-   不會自動換行。

**範例：**

```html
<span style="display: inline; background-color: lightblue; margin: 10px; padding: 10px;">這是一個 inline 元素</span>
<span style="display: inline; background-color: lightgreen; margin: 10px; padding: 10px;">這是另一個 inline 元素</span>
```

### display: inline-block

`inline-block` 元素是 `inline` 和 `block` 的結合體。它既可以像 `inline` 元素一樣在同一行上顯示，又可以像 `block` 元素一樣設定寬高和四個方向的 `margin` 和 `padding`。

**特性：**

-   可以設定 `width` 和 `height`。
-   可以設定 `margin` 和 `padding` 的四個方向。
-   不會自動換行。

**範例：**

```html
<div style="display: inline-block; background-color: lightblue; width: 200px; height: 100px; margin: 10px; padding: 10px;">這是一個 inline-block 元素</div>
<div style="display: inline-block; background-color: lightgreen; width: 200px; height: 100px; margin: 10px; padding: 10px;">這是另一個 inline-block 元素</div>
```

## 總結

| 特性 | `block` | `inline` | `inline-block` |
| :--- | :--- | :--- | :--- |
| 換行 | 是 | 否 | 否 |
| `width` / `height` | 可設定 | 不可設定 | 可設定 |
| `margin` 上下 | 可設定 | 不可設定 | 可設定 |
| `padding` 上下 | 可設定 | 不可設定 | 可設定 |