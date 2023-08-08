---
title: 建立 cesium React 專案
date: 2022-08-12 21:43:30
tags:
- react
- cesium
- resium
categories: 
- 前端
---


<details><summary>優缺點</summary>
<p>

* 優點：模組累積數個專案經驗，有已經客製好的功能模組可用。具備擴充彈性。
* 缺點：模組目前綁定固定功能，當模組持續擴充，可能會過於冗贅，如何管控和持續維護是要考量的點。

</p>
</details>

用原生 Cesium 寫的模組結合 React 元件使用，建議直接引用 GIAP `/core` 中的模組檔案。

## [Resium](https://resium.reearth.io/)


<details><summary>優缺點</summary>
<p>
* 優點：能以 React 元件方式寫 Cesium，與 React 整合度較高
* 缺點：社群使用量不多，需考慮是否有潛在 bug 或因封裝而功能受限。

</p>
</details>

Resium 是提供 Cesium React 元件函式庫，讓 Cesium 模組可以元件化使用。

[Resium 文件](https://resium.reearth.io)


## 流程

### create react app

* 缺點：開發時 hot reload 速度慢


1. 建立 react ts 專案

   ```bash
   yarn create react-app project-name --template typescript
   ```
2. 安裝 craco resium

   ```bash
   yarn add @craco/craco craco-cesium cesium
   ## 若採用 Resium 則新增
   yarn add resium
   ```
3. 修改 package.json

   ```json
   {
    // ...
    "scripts": {
      "start": "craco start", // react-scripts -> craco
      "build": "craco build", // react-scripts -> craco
      "test": "craco test",   // react-scripts -> craco
      "eject": "react-scripts eject"
    },
    // ...
   }
   ```
4. 建立 craco config

   在根目錄建立 `craco.config.js`

   ```javascript
   module.exports = {
     plugins: [
       {
         plugin: require("craco-cesium")()
       }
     ]
   };
   ```
5. `yarn start `啟動專案


### vite

* 優點：速度快
* 缺點：社群小，版本不穩定


1. vite 建立 react ts 專案

   ```bash
   yarn create vite project-name
   ```

   選擇 `react` ➡️ `react-ts`
2. 安裝 cesium、resium、必須插件

   ```bash
   yarn add cesium
   yarn add --dev vite-plugin-cesium
   
   ## 若採用 Resium 則新增
   yarn add resium
   ```
3. 完成

<details><summary>優缺點</summary>
<p>
如果跳出 error <code>The requested module xxx does not provide an export named 'default'</code>

可參考[此 issue](https://github.com/nshen/vite-plugin-cesium/issues/34)，將 cesium 版本降至 1.95.0 以下即可解決

> **2022/08/18 vite-plugin-cesium@1.2.20 + cesium@1.95.0 可運作**

</p>
</details>
