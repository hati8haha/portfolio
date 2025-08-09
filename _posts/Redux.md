---
title: Redux 狀態管理入門
date: 2022-09-03 10:00:00
tags:
- react
- redux
- state-management
categories:
- 前端
- React
---

## 什麼是 Redux？

Redux 是一個用於 JavaScript 應用程式的**可預測的狀態容器**。它可以讓您在應用程式的不同元件之間共享和管理狀態，並且可以讓您更容易地追蹤狀態的變化。

## Redux 的三大原則

1.  **單一資料來源 (Single source of truth):** 整個應用程式的狀態都儲存在一個稱為 **store** 的物件中。
2.  **狀態是唯讀的 (State is read-only):** 唯一可以改變狀態的方法是發送一個稱為 **action** 的物件。
3.  **使用純函式來進行修改 (Changes are made with pure functions):** 您需要撰寫稱為 **reducer** 的純函式，來指定如何根據 action 來更新狀態。

## Redux 的核心概念

![](https://i.imgur.com/ckg5NnB.png)

-   **Store:** 儲存整個應用程式的狀態。
-   **Action:** 一個描述發生了什麼事的物件，它必須有一個 `type` 屬性。
-   **Reducer:** 一個純函式，它會接收目前的狀態和一個 action，並回傳一個新的狀態。

## Redux 的運作流程

1.  當使用者在介面上進行操作時，會觸發一個 **action**。
2.  **store** 會將目前的狀態和這個 **action** 傳送給 **reducer**。
3.  **reducer** 會根據 **action** 的 `type` 來回傳一個新的狀態。
4.  **store** 會用新的狀態來取代舊的狀態。
5.  當狀態改變時，React 元件會重新渲染。

## 範例

```javascript
import { createStore } from 'redux';

// Action
const incrementAction = { type: 'INCREMENT' };

// Reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

// Store
let store = createStore(counter);

// 監聽狀態的變化
store.subscribe(() => console.log(store.getState()));

// 發送 action
store.dispatch(incrementAction);
// 輸出: 1
```
