---
title: NoSQL 與 SQL 的比較
date: 2022-09-05 10:00:00
tags:
- nosql
- sql
- database
categories:
- 後端
- 資料庫
---

在現代的應用程式開發中，我們有兩種主要的資料庫類型可以選擇：**SQL** 和 **NoSQL**。

## SQL (關聯式資料庫)

SQL (Structured Query Language) 資料庫，也稱為**關聯式資料庫**，是將資料儲存在由資料列和資料行組成的表格中。每個表格都有一個預先定義好的**綱要 (schema)**，它定義了表格的結構、欄位的資料類型和欄位之間的關係。

**代表性的 SQL 資料庫:**

-   MySQL
-   PostgreSQL
-   Microsoft SQL Server
-   Oracle

## NoSQL (非關聯式資料庫)

NoSQL (Not Only SQL) 資料庫，也稱為**非關聯式資料庫**，是將資料儲存在非表格的結構中。NoSQL 資料庫有許多不同的類型，例如：

-   **文件資料庫 (Document Databases):** 將資料儲存在類似 JSON 的文件中，例如 MongoDB。
-   **鍵值資料庫 (Key-Value Databases):** 將資料儲存在鍵值對中，例如 Redis。
-   **欄位資料庫 (Column-Family Databases):** 將資料儲存在欄位中，而不是資料列中，例如 Cassandra。
-   **圖形資料庫 (Graph Databases):** 將資料儲存在節點和邊的圖形結構中，例如 Neo4j。

## SQL vs NoSQL

| 特性 | SQL (關聯式資料庫) | NoSQL (非關聯式資料庫) |
| :--- | :--- | :--- |
| 資料模型 | 表格 (Table) | 文件、鍵值、欄位、圖形 |
| 綱要 (Schema) | 固定 (Fixed) | 動態 (Dynamic) |
| 擴展性 | 垂直擴展 (Vertical Scaling) | 水平擴展 (Horizontal Scaling) |
| 查詢語言 | SQL | 各有不同 |
| 適用場景 | 結構化資料、交易處理 | 非結構化資料、大數據、即時應用 |

## 何時使用？

-   **SQL:** 當您的資料是結構化的，並且需要進行複雜的查詢和交易時，例如電子商務網站、金融系統等，建議使用 SQL 資料庫。
-   **NoSQL:** 當您的資料是非結構化的，並且需要高擴展性和高效能時，例如社群媒體、物聯網、日誌分析等，建議使用 NoSQL 資料庫。
