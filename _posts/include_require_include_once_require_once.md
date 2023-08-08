---
title: include、require、include_once、require_once 的差別
tags: PHP
---
`include` 與 `require` 都是用來引入既有的外部 php 檔案至目前檔案中執行。

兩者差別在於若引入的檔案執行出現錯誤時，`include` 會產生 E_WARNING（非致命的執行時錯誤，程式會繼續執行），而 `require` 則會產生 E_COMPILE_ERROR（程式會停止）

`include_once`、`require_once` 與 `include`、`require` 功能幾乎一樣，唯一的差別是 `include_once`、`require_once` 會先檢查要引入的檔案是否已經在該程式中被引入過，如果有的話就不會再次重複引入該檔案。
