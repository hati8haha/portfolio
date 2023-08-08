---
title: React 的思考模式
tags:
- react
categories:
- 前端
- React
---

寫 React 時的思考模式與過往寫 HTML + JavaScript 的思考模式，個人認為最不一樣的兩點是：
- 以元件（Component）為基本元素建構網頁
- 由 state 來決定網頁的畫面
### 以元件（Component）為基本元素建構網頁
在 React 中，網頁是由大大小小的 Component 所組合而成。而這些 Component 的該如何切分，才能達到更好的重用性便是重點。

對於初學 React 的新手來說，這與過去先將 HTML 寫好，再透過 JavaScript 改變 HTML 元素的方式很不一樣。在寫 Component 的同時就會需要考慮到這個 Component 會透過哪些 State 改變，需要傳什麼 props 給下一層等等問題。
### 由 state 來決定網頁的畫面
React 中很重要的一點是資料與畫面的一致。只要透過改變 state，畫面就可以跟著改變。

我認為這是寫 React 時很方便的一點，只要事先將 Component 寫好，state 一改變，畫面就可以跟著改變，不需要額外的程式控制畫面。

### 火鍋跟烤肉
如果要比喻的話，傳統的 HTML + JavaScript 就像是火鍋，而 React 則是烤肉？？？（什麼意思）
<center>
<img src="https://images.unsplash.com/photo-1584509171119-9054d2d7d9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80" height=500 /><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" height=500 />
</center>
<center><font color=#A9A9A9>圖片來源：</font><a href="https://unsplash.com/photos/BlUxJx3eNp0">unsplash </a> <font color=#A9A9A9>&</font> <a href="https://unsplash.com/photos/UC0HZdUitWY">unsplash</a>
</center>

HTML 就像湯底，只能看沒得吃，要把食材（JavaScript）倒入才算是功能齊全、可以享用的美食。
React 則像是烤肉，每一種食材（Component）都可以直接吃，有著各自的風味（功能），不過要把這些烤好的食材通通端出來才算是像樣的烤肉啊！

比喻的不是很好，不過好餓喔...
