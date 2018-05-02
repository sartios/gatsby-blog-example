---
title: "ReactDOM API"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "23-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - d3
---

## API

<style>
  .api-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .api-item {
    padding: 30px;
    width: 30%;
    min-height: 150px;
    margin-top: 5px;
    border: 1px solid lightgray;
    font-weight: bold;
    font-size: 1.3em;
  }

  .api-description {
    padding-top: 15px;
    font-weight: normal;
    font-size: 0.7em;
  }

  @media only screen and (max-width: 768px) {
    .api-container {
      flex-direction: column;
      align-items: center;
    }

    .api-item {
      width: 50%;
    }
  }

  @media only screen and (max-width: 480px) {
    .api-item {
      width: 80%;
    }
  }
</style>

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      render(element, container)
    </div>
    <div class="api-description">
      Renders a React element into the DOM in the supplied container and returns a reference to the component.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      hydrate(element, container)
    </div>
    <div class="api-description">
      Like render() but for server side rendering.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      unmountComponentAtNode(container)
    </div>
    <div class="api-description">
      Remove a mounted React component from the DOM and clean up its event handlers and state.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      findDOMNode(component)
    </div>
    <div class="api-description">
      Returns the DOM element if the component has been mounted.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      createPortal(child, container)
    </div>
    <div class="api-description">
      Renders children into a DOM node that exists outside the DOM hierarchy of the parent component.
    </div>
  </div>
</div>


## How to use

### Modify text content

````html
<svg width="500" height="500">
  <text>Text Placeholder</text>
</svg>
````

```javascript
/**
 * Modify the text content.
 */
d3.select('text')
  .text('Hello World');
```

### Add a new DOM element at the end

````html
<svg width="500" height="500">
  <g class="group"></g>
</svg>
````

```javascript
/**
 * Append a new element inside group.
 */
d3.select('.group')
  .append('text')
  .text('Hello World');
```

Final markup:

````html
<svg width="500" height="500">
  <g class="group">
    <text>Hello World</text>
  </g>
</svg>
````

### Insert new DOM element before ending tag

````html
<svg width="500" height="500">
  <g class="group"></g>
</svg>
````

```javascript
/**
 * Insert a new element inside group.
 */
d3.select('.group')
  .insert('text')
  .text('Hello World');
```

Final markup:

````html
<svg width="500" height="500">
  <g class="group">
    <text>Hello World</text>
  </g>
</svg>
````

### Delete selected DOM elements

````html
<svg width="500" height="500">
  <g class="group">
    <text>Hello</text>
    <text>Another Text Content</text>
  </g>
  <g>
    <text>Hello World</text>
  </g>
</svg>
````

```javascript
/**
 * Remove the .group g.
 */
d3.select('.group')
  .remove();
```

Final markup:

````html
<svg width="500" height="500">
  <g>
    <text>Hello World</text>
  </g>
</svg>
````

### Set inner HTML

````html
<body>
  <div id="tooltip"></div>
</body>
````

```javascript
/**
 * Set the inner HTML of the tooltip.
 */
d3.select('body')
  .select('#tooltip')
  .html('<div>ToolTip Message</div>');
```

Final markup:

````html
<body>
  <div id="tooltip">
    <div>ToolTip Message</div>
  </div>
</body>
````

### Apply attributes on selected DOM elements

````html
<svg width="500" height="500">
  <g class="group">
  </g>
</svg>
````

```javascript
/**
 * Append a rect and set its width and height.
 */
d3.select('.group')
  .append('rect')
  .attr('width', 300)
  .attr('height', 100);
```

Final markup:

````html
<svg width="500" height="500">
  <g>
    <rect width="300" height="100" />
  </g>
</svg>
````

### Set properties of selected DOM elements

````html
<body>
  <div class="container">
    <input id="terms" type="checkbox" />
  </div>
</body>
````

```javascript
/**
 * Sets the checked property of #terms.
 */
d3.select('#terms')
  .property('checked', true);
```

### Apply styles to selected DOM elements.

````html
<svg width="500" height="500">
  <g class="bars">
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
  </g>
</svg>
````

```javascript
/**
 * Change the opacity of bars.
 */
d3.select('.bars')
  .selectAll('rect')
  .style('opacity', 0.5)
```

### Set the classList

````html
<svg width="500" height="500">
  <g class="bars">
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect width="300" height="100" style="fill:rgb(0,0,255);" />
  </g>
</svg>
````

```javascript
/**
 * Change the opacity of bars.
 */
d3.select('.bars')
  .selectAll('rect')
  .classed('bar', true);
```

Final markup:

````html
<svg width="500" height="500">
  <g class="bars">
    <rect class="bar" width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect class="bar" width="300" height="100" style="fill:rgb(0,0,255);" />
    <rect class="bar" width="300" height="100" style="fill:rgb(0,0,255);" />
  </g>
</svg>
````

## Summary

Selections allow powerful data-driven transformation of the DOM like setting attributes, styles, properties, inner HTML and more. While creating charts, the most used methods are ``.append()`` and ``.attr()``. The next step is to understand how to bind data and use DOM manipulating methods to create charts.