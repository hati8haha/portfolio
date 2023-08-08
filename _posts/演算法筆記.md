---
title: 演算法筆記
tags:
- 資料結構
- 演算法
categories:
- 演算法
---
#### What is Algorithm?
##### 演算法的定義
* Algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.
* Easy speaking, algorithm is a step-by-step procedure to solve a problem.

有限的連續性事情，有完整定義，電腦可以執行，是用來解決一個問題或計算某些值。
一步一步去解決問題的程序，就可叫做演算法。

##### 現實生活中的演算法:
- Google Maps 的路徑規劃
- YouTube 的推薦影片
- Excel 的數字排列

#### Comparing Algorithm
##### 為什麼要比較演算法？
比較速度、記憶體資源
- Time
- Space

現實情況中用計時方式來評估演算法時間效率並不實際，為什麼？
- 同個電腦上會得到不同的結果
- 不同電腦會給出不同的結果

#### Complexity 複雜度

需要用到多少 operations？ => 直接影響

$f(n) = n^2+3n+4$
n 為 input size
複雜度為

![](https://i.imgur.com/yXWn5c6.png)
![](https://i.imgur.com/NVyph3L.png)

$f(n)$ 與 $n$ have quadrctic relations.
有平方的關係

設計演算法時應考慮避免把時間複雜度太高。

#### Big O Notation
##### 定義
- Big O Notation is atool that describe the limiting behavior of a function when the argument tends towards a particular value or infinity.
- Big O Notation has a "worst case scenario", which means it shows the general trends of complexity when the size of inputs is extremely large.

Big O Notation 是用來描述 的工具
n 不斷擴大時，會走去哪裡
有一個最壞的情況的打算
Big O Notation 會展示演算法的趨勢，當 size 到極大時，它的趨勢是什麼

##### Calculating Big O Value
1. Constant doesn't matter 常數不重要
2. Small Terms don't matter 較小的
3. Longarithm Base doesn't matter 底數（log 的）不重要

$f(n) = 5n^2+3n+4$ => 只需要考慮 $5n^2$

#### Asymptotic Notation
Big O Omega 定義最低限度是多低
Big Theta

Big O 定義：
The function $f(n)=O(g(n)) iff  c, n0 s.t. 0 <= f(n)$ 

desmos 繪圖計算機
![](https://i.imgur.com/VL8viAa.png)

#### Analysis of Arrays and Objects
Object：
Insertion $O(1)$
Removal  $O(1)$
Searching $O(n)$
Acessing $O(1)$

hash Table  => 因此找到 Object 內的資料無論多龐大都是 $O(1)$

Array：
Insertion push = $O(1)$ unshift = $O(n)$
Removal  pop = $O(1)$ shift = $O(n)$
Searching $O(n)$
Acessing $O(1)$

因為 array 有 index，因此在最前面新增會需要更改所有的 index
## 