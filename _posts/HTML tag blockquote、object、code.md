---
title: HTML tag blockquote、object、code
tags:
- HTML
categories:
- 前端
- HTML
---
###### tags: `HTML`
### 1. `<blockquote>`
#### 說明
`<blockquote>` 標籤可以用來套用在引用的內容上，會以縮排方式呈現。
要改變 `<blockquote>` 的縮排，需使用 CSS 的 margin 屬性。

若要表示段落內的引文，則可以使用 `<q>` 來進行引用。
#### 可用屬性
1. `cite`
可以用來描述來源的 URL。不會有超連結，僅會在 html 中具有表達語意的功能。

#### 範例
```htmlmixed=
<blockquote cite="https://hulitw.medium.com/variable-and-frontdesk-a53a0440af3c">
  <p>
    不知道大家有沒有去過一些有寄物櫃的地方？<br>
    我這邊講的不是健身房或是車站會看到的那種置物櫃，不是那種投幣以後讓你把東西放裡面，然後給你一個鑰匙的那種。那是自助式的置物櫃，我要談的不是那種。
</p>
</blockquote>
```

>不知道大家有沒有去過一些有寄物櫃的地方？
我這邊講的不是健身房或是車站會看到的那種置物櫃，不是那種投幣以後讓你把東西放裡面，然後給你一個鑰匙的那種。那是自助式的置物櫃，我要談的不是那種。

### 2. `<object>`
#### 說明
`<object>` 標籤可以用來嵌入外部資源，例如 pdf 檔案或是已經被宣告死亡的 flash 等等。

圖片、音檔、影片、網頁，分別有相對應的嵌入標籤（`<img>`、`<audio>`、`<video>`、`<iframe>`），較不適合以 `<object>` 嵌入。
#### 可用屬性
以下只列出 html5 以後所適用的屬性：
1. `type`
外部資源的 [MIME](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 類型。
2. `data`
外部資源的 URL。
3. `height`
嵌入資源顯示的高度，單位是 pixel。
4. `width`
嵌入資源顯示的寬度，單位是 pixel。
5. `name`
指定此 object 的名稱。
6. `form`
此 object 關聯的 `<form>` 元素。
7. `usemap`
指定與 object 關聯的 `<map>` 元素的 hash-name。


#### 範例
```htmlmixed=
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
```
![](https://i.imgur.com/nvcYd8P.png)


### 3. `<code>`
#### 說明
`<code>` 標籤用來表示程式碼的內容，常與 `<pre>` 一起使用，可以保留空白與縮排呈現。
#### 可用屬性
無
#### 範例
```htmlmixed=
<p>這是文字中的一段程式碼 <code>console.log("Hello World!")</code> 好耶！</p>
```
這是文字中的一段程式碼 `console.log("Hello World!")` 好耶！
