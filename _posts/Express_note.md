---
title: Express.js 基礎入門
date: 2022-09-11 10:00:00
tags:
- nodejs
- express
- backend
categories:
- 後端
- Node.js
---

## 什麼是 Express.js？

Express.js 是一個基於 Node.js 平台的 web 應用程式框架，它提供了一系列強大的功能，可以讓您快速地建立 web 應用程式和 API。

## Express 與 Apache/PHP 的比較

-   **Express:** 是一個框架，您需要自己處理路由、中介軟體等。它非常彈性，可以讓您自由地組織您的應用程式。
-   **Apache/PHP:** Apache 是一個 web 伺服器，而 PHP 是一種腳本語言。它們的組合通常用於傳統的網站開發，路由是基於檔案系統的。

## MVC 設計模式

MVC (Model-View-Controller) 是一種軟體設計模式，它可以將您的應用程式分成三個部分：

-   **Model:** 負責處理資料和業務邏輯。
-   **View:** 負責呈現資料給使用者。
-   **Controller:** 負責接收使用者的輸入，並呼叫 Model 和 View 來完成請求。

## Express 基本架構

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### 視圖 (View)

Express 可以使用許多的樣板引擎 (template engine) 來呈現動態的 HTML 頁面，例如 EJS、Pug、Handlebars 等。

**使用 EJS 的範例：**

1.  安裝 EJS:
    ```bash
    npm install ejs
    ```
2.  設定樣板引擎:
    ```javascript
    app.set('view engine', 'ejs');
    ```
3.  在 `views` 資料夾中建立一個 `index.ejs` 檔案:
    ```html
    <h1><%= title %></h1>
    ```
4.  在路由中呈現樣板:
    ```javascript
    app.get('/', (req, res) => {
      res.render('index', { title: 'Hey', message: 'Hello there!' });
    });
    ```

### 資料庫

Express 可以與各種資料庫進行整合，例如 MySQL、MongoDB、PostgreSQL 等。您可以使用 [mysqljs](https://github.com/mysqljs/mysql) 或 [Sequelize](https://sequelize.org/) 等函式庫來操作 MySQL 資料庫。