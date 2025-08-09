---
title: "HTML 語意化標籤：`<blockquote>`, `<object>`, `<code>`"
date: 2022-09-10 10:00:00
tags:
- html
- semantic-html
- blockquote
- object
- code
categories:
- 前端
- HTML
---

在 HTML 中，使用**語意化標籤 (Semantic Tags)** 可以讓您的網頁內容更具意義，不僅有助於搜尋引擎的理解，也可以讓您的程式碼更容易閱讀和維護。

本文將介紹三個常用的語意化標籤：`<blockquote>`、`<object>` 和 `<code>`。

## `<blockquote>`

`<blockquote>` 標籤用來表示一段引用的文字。瀏覽器通常會將 `<blockquote>` 的內容以縮排的方式呈現。

**屬性:**

-   **`cite`**: 可以用來提供引用的來源 URL。

**範例：**

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>
```

## `<object>`

`<object>` 標籤用來嵌入外部的資源，例如圖片、音訊、影片、PDF 等。

**屬性:**

-   **`data`**: 指定要嵌入的資源的 URL。
-   **`type`**: 指定資源的 MIME 類型。
-   **`width` / `height`**: 設定資源的寬度和高度。

**範例：**

```html
<object data="movie.swf" type="application/x-shockwave-flash" width="400" height="300"></object>
```

## `<code>`

`<code>` 標籤用來表示一段程式碼。瀏覽器通常會將 `<code>` 的內容以等寬字體來呈現。

為了保留程式碼的縮排和換行，`<code>` 標籤通常會和 `<pre>` 標籤一起使用。

**範例：**

```html
<pre><code>
function greet() {
  console.log("Hello, world!");
}
</code></pre>
```
