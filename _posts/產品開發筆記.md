---
title: 產品開發筆記
tags: 產品開發
---

## 工程師的一天 / 兩周
Sprint Planning - 0.5 day
開發 + Daily Standup - 7.5 day
部署 - 1 day
Sprint demo + Sprint retrospective - 1 day
## 工程師怎麼知道要做什麼
PM 會告訴你 XDD

## 一個需求是怎麼產生的
1. stakeholder 提出需求
2. PM 開始撰寫 spec => 功能
3. 畫 wireframe
4. 交給 designer 產生 mockup => 畫面
5. 交給工程師開工

功能 + 畫面 = 工程師的工作

### Product Requirement Document 產品需求文件

### Product Specifications 產品規格書

規格盡可能與功能一致，工程師照規格做，有功能調整需請 PM 更新

[【SOP不藏私】系列＃EP1「連猴子也會的PRD指南」](https://medium.com/as-a-product-designer/sop-ep01-prd-3c6d33880c34)

[PRD到底该怎么写？更全面的文档范例来了：](http://www.woshipm.com/pmd/3327770.html)

[【產品經理 PM｜需求文檔 PRD】優惠券發放的產品設計，需求文檔怎麼寫？](https://medium.com/y-pointer/product-prd-ca0ea9b75b85)

### User Story 使用者故事

Task 任務 = Card 卡片 = Ticket 票 = Issue 問題

管理系統如 Jira

## 軟體開發方法論 - Waterfall 瀑布流
### Methodology 方法論
#### Waterfall 瀑布流
![](https://i.imgur.com/5lzyOJr.png)
從頭到下，比較不適合有新功能增加

### Agile 敏捷
![](https://i.imgur.com/QU7q981.png)
快速迭代、循環



【文思不藏私】@敏捷宣言 12 原則
- [什麼是敏捷?](https://www.youtube.com/watch?v=Z9QbYZh1YXY)
- [【敏捷系列 - 1】什麼是敏捷？敏捷實例分享](https://www.youtube.com/watch?v=HDmO7Ev7Mlc)

[What's the Difference? Agile vs Scrum vs Waterfall vs Kanban](https://www.smartsheet.com/agile-vs-scrum-vs-waterfall-vs-kanban)


[【Podcast EP03】敏捷或瀑布開發哪個好？流程用哪種重要嗎？](https://medium.com/3pm-lab/pm-podcast-ep03-waterfall-vs-agile-82b214853112)

協助開發實作敏捷方法論的產品
1. Kanban
   ![](https://i.imgur.com/2oczlDH.png)
2. Scrum
   ![](https://i.imgur.com/pKyYuvc.png)
   ![](https://i.imgur.com/ZEav2QM.png)
   角色：
   + Product Owner：產品所有權、決定權（PM）
   + ScrumMaster：協助 Scrum 進行（通常團隊不一定有，或可能 PM 兼）
   + Team：執行者
   與 Kanban 主要差異在 Scrum 有固定的 Sprint（衝刺）


協助做 retro 的工具：https://reetro.io/


[Introduction to Scrum - 7 Minutes](https://www.youtube.com/watch?v=9TycLR0TqFA)

[【敏捷系列 - 3】Scrum中的短衝 (Sprint)](https://www.youtube.com/watch?v=CQp0nGY4noo)


## 做完會部署到哪裡
1. local 環境（本機）
2. development 環境（dev）
3. staging 環境 / qa 環境（對外看不到的 production 環境，用來測試）
4. production 環境

每個環境是不同 Server
## QA 會怎麼測試
QA 只管功能出來有沒有錯

### SIT	系統整合測試
System Integration Testing	

只測試功能是否正確

### UAT	使用者可用性測試
User Acceptance Testing	


## 怎麼樣算是完成


想了解更多產品相關的知識，可以參考：做產品真是哭夭難！ — Marty Cagan 演講 70 分鐘中文逐字翻譯（附贈 YouTube 錄影）

https://medium.com/3pm-lab/marty-cagan-producttank-taipei-speech-933e7dfc13af
