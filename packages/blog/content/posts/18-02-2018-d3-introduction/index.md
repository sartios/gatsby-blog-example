---
title: "D3 Introduction"
cover: "https://sartios.com/images/d3-introduction.png"
date: "18-02-2018"
category: "main"
tags:
    - programming
    - front-end
    - d3
---

D3 is a JavaScript library used to create interactive visualizations in the browser. Data visualization is a general term that describes any patterns and techniques to help people understand the significance of data by placing it in a visual context. D3 provides the tools to build the visual context for data visualizations in the web browser.

## Why to use?

D3 works in any modern browser on any device, but does not provide any prebuilt visualizations. You have to build, using its API, your visualizations using HTML, SVG and CSS.

A good question to answer is "Do I really need D3?".

There are many libraries that provide standard charts, so if your goal is to render a few standard charts as quickly as possible, you may consider using a library instead of writing D3 code.

However, using standard charts does not always fullfil your needs in an advanced UI or a custom chart. In cases like these D3 provides all the necessary tools to build your data visualizations.

## D3 API overview

<div class="api-container">
  <div class="api-item">
    <div>DOM Selection</div>
    <div class="api-description">
      D3 provides methods to select a particular DOM element, or a group of DOM elements.
    </div>
  </div>
  <div class="api-item">
    <div>DOM Manipulation</div>
    <div class="api-description">
      D3 provides methods to manipulate DOM element(s).
    </div>
  </div>
  <div class="api-item">
    <div>Data Binding</div>
    <div class="api-description">
      D3 provides methods to bind data to DOM elements and create new elements based on your data.
    </div>
  </div>
  <div class="api-item">
    <div>Event Handling</div>
    <div class="api-description">
      D3 supports built-in events and custom events. You can bind an event listener to any DOM element.
    </div>
  </div>
  <div class="api-item">
    <div>Animations</div>
    <div class="api-description">
      D3 simplifies the process of animations with transitions.
    </div>
  </div>
  <div class="api-item">
    <div>Scales</div>
    <div class="api-description">
      D3 provides methods for mapping data values.
    </div>
  </div>
  <div class="api-item">
    <div>Axes</div>
    <div class="api-description">
      D3 provides methods to draw axes, ticks and labels.
    </div>
  </div>
  <div class="api-item">
    <div>Shapes</div>
    <div class="api-description">
      D3 provides methods to generate paths for various chart shapes.
    </div>
  </div>
  <div class="api-item">
    <div>Rest</div>
    <div class="api-description">
      D3 provides helper methods to handle data arrays, collections, etc...
    </div>
  </div>
</div>

## Installation

1. Download the latest version and use the script tag.
2. Download from npm `npm install --save d3` the whole library.
3. Download from npm specific modules `npm install --save d3-module-name`.

## D3 React integration

The challenge of integrating D3 with React is that both want to control the DOM.

One way is to use React to build the DOM structure and pass the DOM container to D3 and use D3 to create, update and destroy elements.

```jsx
class BarChart extends React.Component {
  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart = () => {
    // D3 code to create bar chart
    // by appending children in this.container
  };

  render() {
    return (
      <svg ref={node => (this.container = node)} width={500} height={500} />
    );
  }
}
```

Another technique is to use D3 as the visualization kernel and use React to create the actual DOM elements. There are challenges with this approach in creating animated transitions and draggable elements using D3 methods.

```jsx
class BarChart extends React.Component {
  getBars() {
    // Use D3 code to generate rects for the bars
  }

  renderBars() {
    const bars = this.getBars();

    return <g>{bars}</g>;
  }

  render() {
    return (
      <svg width={500} height={500}>
        {this.renderBars()}
      </svg>
    );
  }
}
```

## Summary

D3 is a data visualization library which provides an API for building data visualizations. Before using it you should consider your use cases and maybe research for libraries that already use D3 to provide basic charts. In cases of advanced UI and custom charts, D3 is a great fit in your project. And finally, D3 can be integrated with React to build data visualizations in a React app.
