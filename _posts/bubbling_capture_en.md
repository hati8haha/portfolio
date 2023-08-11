---
title: "Event Propagation Mechanism: Bubbling and Capturing"
date: 2023-03-18
tags:
- DOM
categories: Frontend
---

When events propagate through the DOM, they travel from the root node downwards to the target, and then sequentially upwards. This downward propagation is known as the **Capture Phase**, while the upward propagation is called the **Bubbling Phase**. There is also a **Target Phase** when the event reaches the target element.

Hence, the order of event propagation is "**Capture first, then bubble**".

The diagram below, sourced from W3C, illustrates the entire event propagation mechanism. It starts with the capture phase, where the event travels downward from the root node. Once it reaches the target, the bubbling phase occurs, and the event travels upwards from the target back to the root node.

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
