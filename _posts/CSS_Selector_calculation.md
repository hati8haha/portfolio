---
title: CSS 選擇器權重計算規則
date: 2022-09-16 10:00:00
tags:
- css
- selector
- specificity
categories:
- 前端
- CSS
---

在 CSS 中，當多個樣式規則同時應用到同一個元素時，瀏覽器會根據**選擇器權重 (Specificity)** 來決定要套用哪一個樣式。權重越高的樣式會覆蓋權重較低的樣式。

## 權重計算

CSS 權重可以用一個四位數的數字來表示：`(a, b, c, d)`

-   **a (inline style):** 如果是行內樣式 (inline style)，a 為 1，否則為 0。
-   **b (ID):** ID 選擇器的數量。
-   **c (Class, pseudo-class, attribute):** class 選擇器、偽類選擇器和屬性選擇器的數量。
-   **d (Type, pseudo-element):** 類型選擇器和偽元素選擇器的數量。

**範例：**

-   `h1`: (0, 0, 0, 1)
-   `.class`: (0, 0, 1, 0)
-   `#id`: (0, 1, 0, 0)
-   `div.class`: (0, 0, 1, 1)
-   `#id .class`: (0, 1, 1, 0)

## `!important`

`!important` 是一個特殊的規則，它可以覆蓋任何其他的樣式，即使是權重更高的樣式。但是，過度使用 `!important` 會讓您的 CSS 難以維護，所以應該盡量避免使用。

## 權重比較規則

1.  從 a 開始比較，a 比較大的權重較高。
2.  如果 a 相同，就比較 b，b 比較大的權重較高。
3.  如果 b 也相同，就比較 c，c 比較大的權重較高。
4.  如果 c 也相同，就比較 d，d 比較大的權重較高。

## 最佳實踐

-   **盡量使用 class 選擇器:** class 選擇器的權重適中，可以讓您的 CSS 更具彈性。
-   **避免使用 ID 選擇器:** ID 選擇器的權重太高，會讓您的 CSS 難以覆蓋。
-   **避免使用 `!important`:** `!important` 會破壞 CSS 的權重規則，讓您的 CSS 難以維護。
