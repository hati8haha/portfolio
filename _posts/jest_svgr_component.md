---
title: svgr component 在 jest 無法被讀取
tags:
- react
- svg
- jest
categories:
- 前端
- React
---
## 問題

svgr 在 jest 中無法被讀取，執行測試時會報錯
:::spoiler **錯誤訊息** 
:::danger
Error: Uncaught [Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
    
Check the render method of `YourComponent`.]
:::

:::spoiler **套件版本**

:::info 
"next": "12.2.5",
"react": "18.2.0",
"jest": "^29.0.1",
"jest-environment-jsdom": "^29.0.1",
"@svgr/webpack": "^6.3.1",
:::


## 解決方法

建立 **`/mock/svg.js`**
```javascript
export default 'SvgrURL'
export const ReactComponent = 'div'
```

修改 **`jest.config.js`**
```javascript
const nextJest = require('next/jest')

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

const createJestConfig = nextJest({
  dir: './',
})(customJestConfig)

module.exports = async () => {
  const jestConfig = await createJestConfig()

  const moduleNameMapper = {
    '\\.svg$': '<rootDir>/mock/svg.ts',
    ...jestConfig.moduleNameMapper,
  }

  return { ...jestConfig, moduleNameMapper }
}
```