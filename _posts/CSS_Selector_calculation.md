---
title: CSS Selector 權重的計算方式
tags:
- CSS
categories:
- 前端
- CSS
---
### 基本選擇器權重計算
CSS Selector 的權重計算方式如下：
1. 計算 ID 選擇器的數量（設想為變數 a）
2. 計算 Class 與 Attributes 選擇器（包含 Pseudo Class）的數量（設想為變數 b）
3. 計算標籤選擇器的數量（設想為變數 c）
4. 將 a、b、c 串接在一起，即可得到權重

範例：
```css=
*               /* a=0 b=0 c=0 -> 權重 =   0 */
LI              /* a=0 b=0 c=1 -> 權重 =   1 */
UL LI           /* a=0 b=0 c=2 -> 權重 =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> 權重 =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> 權重 =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> 權重 =  13 */
LI.red.level    /* a=0 b=2 c=1 -> 權重 =  21 */
#x34y           /* a=1 b=0 c=0 -> 權重 = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> 權重 = 101 */
```
其中，a、b、c 計算後所得的權重並不是代表百位數、十位數、個位數，而是會依照 a、b、c 的順序進行比較，見下方範例：
```css=
.pink.pink.pink.pink.pink.pink.pink.pink.pink ... .pink
/* 101 個 .pink，權重為 0-101-0 */
#login-button
/* 權重為 100-0-0 */
```
### inline style 與 !important
CSS Selector 權重也需要考慮到 inline style 與 !important，這兩者的權重計算可以視為優先於上述選擇器權重。

根據 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 所介紹

>Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

Inline styles 可以直接覆蓋過 stylesheets 中的樣式

>When an important rule is used on a style declaration, this declaration overrides any other declarations. Although technically !important has nothing to do with specificity, it interacts directly with it.

!important 則是不列入權重計算，有該註記的樣式會直接被套用

### 總結
CSS Selector 權重可以用以下一行簡單說明：

**!important > inline styles > ID 選擇器 > Class 選擇器 > Html 標籤選擇器**