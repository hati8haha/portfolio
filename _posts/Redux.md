---
title: Redux
tags:
- react
- redux
categories:
- 前端
- React
---

redux => 狀態管理工具

jQuery -> 資料與畫面分離
Vue、Angular -> 資料與畫面雙向綁定
React -> 只需要管資料

### flux 簡介

看 [facebook flux 影片](https://facebook.github.io/flux/docs/in-depth-overview)
![](https://i.imgur.com/LHEj84n.png)
原先可以直接從 View 去更改 Store(資料)
flux 讓 view 需要透過 action 到 dispatcher 去更改資料
好處是可以追蹤問題來源
若專案規模小可能會造成資源浪費

### redux 簡介
![](https://i.imgur.com/ckg5NnB.png)

react 把狀態放在 state
redux 把狀態放在 store

```javascript=
const {createStore} = require('redux')

const initialState = {
  value: 0
}

function counterReducer(stae = initialState, action) {
  if (action.type === 'plus') {
    return {
      value: state.value + 1
    }
  }
  return state
}
store.dispatch({
  type: 'plus'
})
```

訂閱 state 改變時要做的事情
```javascript=
store.subscribe(() => {
  console.log('changed!', store.getState())
})
```
action 中常會用的
- type => action 名稱
- payload => 想要傳的參數

避免 type 錯字難以 debug
=> 字串改成 object
```javascript=
const ActionTypes = {
  ADD_TODO: 'add_todo',
  DELETE_TODO: 'delete_todo'
}
```

action creattor
![](https://i.imgur.com/y79HAIB.png)

### react-redux

#### selector
```javascript=
const todos = useSelector((store) => store.todoReducer.todos)
```