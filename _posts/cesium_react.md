---
title: 在 React 專案中整合 Cesium
date: 2022-08-24 10:00:00
tags:
- react
- cesium
- resium
- vite
- craco
categories:
- 前端
- React
- GIS
---

[Cesium](https://cesium.com/) 是一個用於建立 3D 地球和地圖的開源 JavaScript 函式庫。在 React 專案中整合 Cesium，可以讓我們建立出功能強大且互動性高的地理資訊應用程式。

本文將介紹兩種在 React 專案中整合 Cesium 的方法：使用 [Resium](https://resium.reearth.io/)，以及直接使用原生的 Cesium API。

## 使用 Resium

Resium 是一個將 Cesium 的 API 封裝成 React 元件的函式庫。它可以讓我們用更 “React” 的方式來操作 Cesium，並且可以更好地與 React 的生命週期和狀態管理整合。

**優點:**

-   以 React 元件的方式操作 Cesium，與 React 整合度高。
-   程式碼更簡潔、易讀。

**缺點:**

-   社群規模較小，可能會遇到一些未知的 bug。
-   功能受限於 Resium 的封裝，可能無法使用到 Cesium 的所有功能。

## 使用原生 Cesium API

我們也可以直接在 React 專案中使用原生的 Cesium API。這種方式可以讓我們完全掌控 Cesium 的所有功能，但需要我們自己處理 Cesium 的初始化和與 React 的整合。

**優點:**

-   可以使用 Cesium 的所有功能，彈性最大。
-   可以累積自己的 Cesium 模組，方便在不同專案中重複使用。

**缺點:**

-   需要自己處理與 React 的整合，較為複雜。
-   如果模組設計不當，可能會變得過於冗贅，難以維護。

## 專案建立流程

### 使用 Create React App

1.  **建立專案:**
    ```bash
    yarn create react-app my-cesium-app --template typescript
    ```
2.  **安裝套件:**
    ```bash
    yarn add @craco/craco craco-cesium cesium resium
    ```
3.  **修改 `package.json`:**
    ```json
    {
      "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test"
      }
    }
    ```
4.  **建立 `craco.config.js`:**
    ```javascript
    module.exports = {
      plugins: [
        {
          plugin: require("craco-cesium")()
        }
      ]
    };
    ```

### 使用 Vite

1.  **建立專案:**
    ```bash
    yarn create vite my-cesium-app --template react-ts
    ```
2.  **安裝套件:**
    ```bash
    yarn add cesium resium
    yarn add --dev vite-plugin-cesium
    ```
3.  **修改 `vite.config.ts`:**
    ```typescript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import cesium from 'vite-plugin-cesium';

    export default defineConfig({
      plugins: [react(), cesium()],
    });
    ```