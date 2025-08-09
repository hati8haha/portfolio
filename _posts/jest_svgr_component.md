---
title: 解決 Jest 中無法讀取 SVGR Component 的問題
date: 2022-08-16 10:00:00
tags:
- react
- svg
- jest
categories:
- 前端
- React
---

## 問題背景

在使用 [SVGR](https://react-svgr.com/) 將 SVG 轉換為 React 元件時，我們可能會在執行 Jest 測試時遇到錯誤。這是因為 Jest 是一個基於 Node.js 的測試運行環境，它本身無法直接解析或處理非 JavaScript 的檔案，例如 SVG 圖片。當 Jest 嘗試引入由 SVGR 產生的元件時，會因為不理解該檔案格式而拋出錯誤。

常見的錯誤訊息如下：

```
Error: Uncaught [Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

Check the render method of `YourComponent`.]
```

## 解決方案

要解決這個問題，我們需要告訴 Jest 如何處理 SVG 檔案。一個常見的方法是建立一個 mock 檔案，讓 Jest 在遇到 SVG 檔案時，轉而引入這個 mock 檔案。

### 1. 建立 Mock 檔案

首先，在您的專案中建立一個 mock 檔案，例如 `/mocks/svg.js`：

```javascript
export default 'SvgrURL';
export const ReactComponent = 'div';
```

這個 mock 檔案會導出一個預設的字串和一個名為 `ReactComponent` 的 `div` 元件。這可以確保在測試中，任何被 SVGR 轉換的 SVG 檔案都會被一個有效的 React 元件所取代。

### 2. 設定 Jest

接下來，修改您的 `jest.config.js` 檔案，使用 `moduleNameMapper` 選項，將所有 `.svg` 結尾的檔案指向我們剛剛建立的 mock 檔案：

```javascript
const nextJest = require('next/jest');

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

const createJestConfig = nextJest({
  dir: './',
})(customJestConfig);

module.exports = async () => {
  const jestConfig = await createJestConfig();

  const moduleNameMapper = {
    '\\.svg$': '<rootDir>/mocks/svg.js',
    ...jestConfig.moduleNameMapper,
  };

  return { ...jestConfig, moduleNameMapper };
};
```

### 結論

透過以上設定，我們成功地讓 Jest 在測試過程中，將所有 SVG 檔案視為一個 mock 的 React 元件，從而解決了 SVGR 元件在 Jest 中無法被讀取的問題。

