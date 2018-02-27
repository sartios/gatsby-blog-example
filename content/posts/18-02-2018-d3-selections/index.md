---
title: "D3 Selections"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "18-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - d3
---

D3 provides methods to select DOM elements in order to do something with them. These methods work with CSS selectors and the result is an array of selections. A selection is an object that references DOM element; knows details about them and can apply transformations to them, like changing style, modifying attributes, performing data-joins or inserting/removing elements.

## API

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      d3.select(css-selector)
    </div>
    <div class="api-description">
      Returns the first matching element in the HTML document based on specified css-selector.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      d3.selectAll(css-selector)
    </div>
    <div class="api-description">
      Returns all the matching elements in the HTML document based on specified css-selector.
    </div>
  </div>
</div>

## How to use

### Select element by CSS selector

```html
<svg width="500" height="500">
  <circle id="circle1" class="svg-circle" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle2" class="svg-circle" cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle3" class="svg-circle" cx="200" cy="200" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

Selecting a circle by its tag name:

```javascript
/**
 * Construct a selection for the first circle.
 */
const circle = d3.select("circle");
```

Selecting a circle by its class name:

```javascript
/**
 * Construct a selection for the first circle.
 */
const circle = d3.select(".svg-circle");
```

Selecting a circle by its id:

```javascript
/**
 * Construct a selection for the first circle.
 */
const circle = d3.select("#circle1");
```

### Select elements by CSS selector

```html
<svg width="500" height="500">
  <circle id="circle1" class="svg-circle" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle2" class="svg-circle" cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle3" class="svg-circle" cx="200" cy="200" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

Selecting the circles by the tag name:

```javascript
/**
 * Construct a selection for the circles.
 */
const circles = d3.selectAll("circle");
```

Selecting the circles by the class name:

```javascript
/**
 * Construct a selection for the circles.
 */
const circles = d3.selectAll(".svg-circle");
```

Selecting the circles by id:

```javascript
/**
 * Construct a selection array with first circle as child.
 */
const circles = d3.selectAll("#circle1");
```

### Select nesting elements

```html
<svg width="500" height="500">
  <g class="group-1">
    <circle id="circle1" class="svg-circle" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    <circle id="circle2" class="svg-circle" cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="red" />
  </g>
  <g class="group-2">
    <circle id="circle3" class="svg-circle" cx="200" cy="200" r="40" stroke="black" stroke-width="3" fill="red" />
    <circle id="circle4" class="svg-circle" cx="200" cy="200" r="40" stroke="black" stroke-width="3" fill="red" />
  </g>
</svg>
```

```javascript
/**
 * Construct a selection for the circles in the 1st group.
 */
const group1Circles = d3.select(".group-1").selectAll("circles");
```

### Select non-existing elements

The selection will return an array with representations for the elements, in order to manipulate later (maybe insert them).

```html
<svg width="500" height="500">
  <circle id="circle1" class="svg-circle" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle2" class="svg-circle" cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="red" />
  <circle id="circle3" class="svg-circle" cx="200" cy="200" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

```javascript
/**
 * An array of representations for the rects.
 */
const rects = d3.selectAll("rect");
```

## Summary

D3 selections are a set of methods that construct arrays of DOM element(s) representation(s) in order to apply manipulations. When working with D3, selections is the first step in the workflow of creating visualizations.
