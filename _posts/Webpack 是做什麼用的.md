---
title: Webpack 是做什麼用的
tags:
- webpack
categories:
- 前端
---

Webpack 的官網是這樣介紹：
>At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

Webpack 是用來打包 JavaScript 應用程式的模組打包工具，它可以打包的範圍不僅限於 npm 等 JavaScript 模組，也包含 sass、圖片、壓縮工具等各種類型。
它的運作方式是透過將各模組打包，並且建立關係對應表，讓所使用的模組可以對應到打包後的功能。

在專案中常用會運用到的模組包含能轉換新語法為舊語法的 babel、程式碼最小化、壓縮、SCSS 或 npm packages 等。