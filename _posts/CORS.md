---
title: CORS
tags:
- 資安
- CORS
categories:
- 前端
---

CORS，全名為 Cross-origin resource sharing，中文為跨來源資源共用。
由於瀏覽器基於安全性的考量，因此會有[同源政策 Same Origin Policy](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy) 的限制，會阻止跨網域的 request。
為了解決存取跨網域的需求，因此有了 CORS 規範，告訴使用者若要進行跨網域的請求的話該如何進行。

若發送一個 request 至跨網域的 API，那麼回傳的 response 的 header 中會有 `acess-control-allow-origin:` 一欄。該欄會標示有哪些網域是允許可以存取的，若該欄的值為 `*`，代表所有網域都可以進行存取。