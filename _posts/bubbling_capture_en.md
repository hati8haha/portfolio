---
title: "Event Propagation: Bubbling and Capturing"
date: 2022-08-25 10:00:00
tags:
- javascript
- dom
- event
- bubbling
- capturing
categories:
- Frontend
- JavaScript
---

When an event is fired on an element, it doesn't just happen on that one element. The event actually travels through the DOM in a specific order. This process is called **event propagation**, and it consists of two phases: **capturing** and **bubbling**.

### The Capturing Phase

The event first travels from the root of the document down to the target element. This is called the **capturing phase**. You can listen for events in the capturing phase by setting the third argument of `addEventListener` to `true`.

### The Bubbling Phase

After the event reaches the target element, it then travels back up from the target element to the root of the document. This is called the **bubbling phase**. This is the default behavior for most events.

### The Target Phase

The phase when the event reaches the target element is called the **target phase**.

### Visualizing Event Propagation

The W3C provides a great diagram to visualize this process:

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

As you can see, the event travels down through the DOM (capturing phase), and then back up (bubbling phase).

### Controlling Event Propagation

You can control event propagation using the following methods:

-   **`event.stopPropagation()`**: This method stops the event from propagating further. It can be used in either the capturing or bubbling phase.
-   **`event.stopImmediatePropagation()`**: This method is similar to `stopPropagation()`, but it also prevents any other event listeners on the same element from being called.
