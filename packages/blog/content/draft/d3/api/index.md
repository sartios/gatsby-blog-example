---
title: "D3 API"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "12-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - d3
---

# D3 API

D3 is a JavaScript library used to create interactive visualizations in the browser. Data visualizations it is about mapping data to elements on the screen. Using D3 you can bind arbitrary data to DOM and then apply data-driven transformations.

D3 works in any modern browser on any device, but does not provide any prebuilt visualizations. You have to build your visualizations using HTML, SVG and CSS but there are many libraries that provide standard charts, so if your goal is to render a few standard charts as quickly as possible, you may consider using a library instead of writing D3 code.

The following sections analyze D3 API and provide snippets.

## Installation

D3 is a collection of modules that are designed to work together; you can use modules independently, or you can use them together as part of the default build.

To install d3 from npm:

``npm install --save d3``

To install a specific d3 module from npm:

``npm install --save d3-moduleName``

# Available Modules

## Selections

``npm install --save d3-selection``

Selections transform the DOM by selecting elements and joining to data. Selecting something in D3 produces a D3 selection, a managing object that references some set of elements in the DOM; it knows details about them, and can apply transformations to them. Keep in mind that selecting an element that doesn't exist, returns an array of representations for the elements.

### Selecting Elements

Manipulating DOM elements in the HTML document, creating a selection of a particular element, or a group of elements is necessary. Selection methods accept <a href="https://www.w3schools.com/cssref/css_selectors.asp">W3C selector strings</a> and come in two forms:

* [#](https://github.com/d3/d3-selection#select) d3.**select**(selector)

The d3.select(selector) returns the first element in the HTML document.

```javascript
  /**
   * Returns the first matching element or an empty selection.
   */
  var anchor = d3.select("a");
```

* [#](https://github.com/d3/d3-selection#selectAll) d3.**selectAll**(selector)

The d3.selectAll() method returns all the matching elements in the HTML document.

```javascript
  /**
   * Returns all the elements that matching the specified selector string or 
   * an empty selection.
   */
  var paragraphs = d3.selectAll("p");
```

In the following examples, if the current element has associated data, this data is propagated to the corresponding selected element(s).

```javascript
  /**
   * For each selected element, selects the first matching element that matches
   * the specified selector string or an empty selection.
   */
  var paragraphLink = d3.selectAll("p").select("a");
```

```javascript
  /**
   * For each selected element, selects all the mathing elements that matches
   * the specified selector string or an empty selection.
   */
  var paragraphLinks = d3.selectAll("p").selectAll("a");
```

### Manipulating DOM Elements

After selecting elements, use the selection's transformation methods to affect document content.

* [#](https://github.com/d3/d3-selection#selection_attr) selection.**attr**(name[,value])

The d3.attr("name", "value") method is used to get or set an attribute on the selected element(s).

```javascript
  /**
   * Sets the attribute with the specified name to value on the selected elements
   * and returns this selection.
   */
  d3.select("a")
    .attr("name", "fred");
```

```javascript
  /**
   * d - the current datum
   * i - the current index
   * nodes - the current group of nodes
   */
  function getNameValue(d, i, nodes) {
    return "value " + i;
  }

  /**
   * Sets the attribute with the specified name to value on the selected elements
   * and returns this selection.
   */
  d3.selectAll("a")
    .attr("name", getNameValue);
```

```javascript
  /**
   * Returns the name attribute of the selection.
   */
  d3.select("a")
    .attr("name")
```

* [#](https://github.com/d3/d3-selection#selection_classed) selection.**classed**(name[,value])

The d3.classed("css class", bool) method is used to get, set or remove a css class from the selection.

```javascript
  /**
   * Assigns the class list to the selection.
   */
  selection.classed("foo bar", true);
```

```javascript
  /**
   * Removes the class list to the selection.
   */
  selection.classed("foo bar", false);
```

* [#](https://github.com/d3/d3-selection#selection_style) selection.**style**(name[,value[,priority]])

The d3.style("name", "value") is used to get or set the style of the selected element(s).

```javascript
  /**
   * Sets the style property with the specified name to the specified value
   * and returns this selection.
   */
  selection.style("opacity", 0.5);
```

```javascript
  /**
   * Returns the current value of the specified style property.
   */
  selection.style("opacity");
```

```javascript
  /**
   * Removes the style property for the selection.
   */
  selection.style("opacity", null);
```

* [#](https://github.com/d3/d3-selection#selection_property)selection.**property**(name[,value])

The d3.property("name", "value") is used to get or set the style of the selected element(s).

```javascript
  /**
   * Sets the HTML element's special property to the specified value.
   */
  selection.property("checked", true);
```

```javascript
  /**
   * Returns the HTML element's special property.
   */
  selection.property("checked");
```

* [#](https://github.com/d3/d3-selection#selection_text) selection.**text**([value])

The d3.text("content") is used to get or set the text of the selected element.

```javascript
  /**
   * Sets the text content to the specified value on the selection(s).
   */
  selection.text("Hello World!");
```

```javascript
  /**
   * Clears the text content of the specified selection(s).
   */
  selection.text(null);
```

```javascript
  /**
   * Returns the text content of the specified selection(s).
   */
  selection.text();
```
* [#](https://github.com/d3/d3-selection#selection_html) selection.**html**([value])

The d3.html("content") is used to get or set the inner HTML of the selected element.

```javascript
  /**
   * Sets the inner HTML to the specified value on the selection(s), replacing
   * any existing child elements.
   */
  selection.html("<span>Hello World</span>");
```

```javascript
  /**
   * Returns the inner HTML of the selection(s).
   */
  selection.html();
```
* [#](https://github.com/d3/d3-selection#selection_append) selection.**append**(type)

The d3.append("element name") is used to add an element inside the selected element but just before the end of the selected element.

```javascript
  /**
   * Appends a new element of the specified type as the last child element,
   * or before the next following sibling is is an enter selection.
   */
  selection.append("div");
```
* [#](https://github.com/d3/d3-selection#selection_insert) selection.**insert**(type[,before])

The d3.insert("element name") is used to insert a new element in the selected element.

```javascript
  /**
   * Inserts a new element of this type before the first element matching the
   * specified selector.
   */
  selection.insert("div");
```

* [#](https://github.com/d3/d3-selection#selection_remove) selection.**remove**()

The d3.remove() is used to remove the specified element from the DOM.

```javascript
  /**
   * Removes the selected element(s) from the document and returns this selection
   * which are now detached from the DOM.
   */
  selection.remove();
```

### Joining Data

Joins is a tool to declare relationship between data and selection. D3 also provides the enter, update and exit states with which you can implement the declared relationship.

* [#](https://github.com/d3/d3-selection#selection_data) selection.**data**([data[,key]])

The d3.data() is used to join data to the selected element(s). When data is assigned to an element, it is stored in the property ``__data__`` and are available on re selections.

```javascript
  var matrix = [
    [1197, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
  ]

  /**
   * Joins the specified array of data with the selected elements and
   * returns a new selection that represents the updated selection.
   */
  var tr = d3.select("body")
    .append("table")
    .selectAll("tr")
    .data(matrix);

  /**
   * The updated selection has an enter method.
   */
  tr.enter();

  /**
   * The updated selection has an exit method.
   */
  tr.exit();
```

* [#](https://github.com/d3/d3-selection#selection_enter) selection.**enter**()

The d3.enter() method is used to create a selection of placeholder references for missing elements. The enter selection is only used to append elements.

```javascript
  var matrix = [
    [1197, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
  ]

  /**
   * Joins the specified array of data with the selected elements and
   * returns a new selection that represents the updated selection.
   */
  var tr = d3.select("body")
    .append("table")
    .selectAll("tr")
    .data(matrix);

  /**
   * Returns a placeholder node for each datum that had no corresponding
   * DOM element in the selection.
   */
  tr.enter().append("td")
    .text(function(d) { return d; })

  ```

* [#](https://github.com/d3/d3-selection#selection_exit) selection.**exit**()

The d3.exit() method is used to remove nodes and adds them to the exit selection which can be later removed from the DOM.

```javascript

  /**
   * Create a set of div inside a selection.
   */
  var div = selection
    .data([4, 8, 15])
    .enter()
    .append("div")
    .text(function(d) { return d; });

  /**
   * Specify a new data set for the previous created selection.
   */
  div.data([4, 8, 16, 32], function(d) { return d; })

  /**
   * Removes elements corresponding to old data. Element with value equals to
   * 15 will be removed.
   */
  div.exit().remove();
```

* [#](https://github.com/d3/d3-selection#selection_datum) selection.**datum**([value])

The d3.datum() method is used to inject data to the selected element without computing a join.

```javascript
  /**
   * A new data set.
   */
  var matrix = [19, 22, 94];

  /**
   * Sets the bound data for each selected element and 
   * clears the previous bounded data.
   */
  selection.datum(matrix)
```

### Handling Events

Selections allow listening for and dispatching events.

* [#]() selection.**on**(typenames[, listener[, capture]])

The d3.on("typename", listner) is used to add or remove event listeners to capture event types. The typenames is a string of any <a href="https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events">DOM event type</a> supported by the browser. To access the current event within a listener, use <a href="https://github.com/d3/d3-selection#event">d3.event</a>.

```javascript
  selection.on('click', function(d, i) {
    // Do something onClick event of the selection.
  })
```

* [#](https://github.com/d3/d3-selection#mouse) d3.**mouse**(container)

The d3.mouse(container) is used to get the x and y coordinates of the current mouse position in the specified DOM element.

```javascript
  selection.on('click', function(d, i) {
    /**
     * Returns the current coordinates as a two-element array of numbers [x, y].
     */
    const currentCoordinates = d3.mouse(this);
  })
```

## Animations

``npm install --save d3-transition``

A transition is a selection-like interface for animating changes to the DOM. Transitions support most selection methods but not all.

### Selecting Elements

* [#](https://github.com/d3/d3-transition#selection_transition) selection.**transition**([name])

The selection.transition() method is used to schedule a transition for the selected elements.

```javascript
  /**
   * Schedules a transition to change the style.
   */
  d3.selectAll(".apple")
    .transition()
    .style("fill", "red");
```

### Timing

* [#](https://github.com/d3/d3-transition#transition_delay) transition.**delay**([value])

The transition.delay() is used to specify the delay in animation in milliseconds for each element.


```javascript
  /**
   * Schedules a transition with delay of i * 10 milliseconds
   * for each element to change the style.
   */
  d3.selectAll(".apple")
    .transition()
    .delay(function(d, i) { return i * 10 })
    .style("fill", "red");
```

* [#](https://github.com/d3/d3-transition#transition_duration) transition.**duration**([value])

The transition.duration() method is used to specifiy the animation
s duration in milliseconds for each element.

```javascript
  /**
   * Schedules a transition with 750 milliseconds duration
   * for each element to change the style.
   */
  d3.selectAll(".apple")
    .transition()
    .duration(750)
    .style("fill", "red");
```

* [#](https://github.com/d3/d3-transition#transition_ease) transition.**ease**([value])

The transition.ease() method is used to specify the easing function. The value must be specified as a function.

```javascript
  /**
   * Schedules a transition with 750 milliseconds duration
   * in a linear way to change the style.
   */
  d3.selectAll(".apple")
    .transition()
    .duration(750)
    .ease(d3.linear)
    .style("fill", "red");
```

## Scales

``npm install --save d3-scale``

Scales are used to mapping a dimension of abstract data to a visual representation. Data values may not correspond to pixel values on the screen. Some data values may be too large while other too small to be used directly with pixel values.

Before moving to scales, you have to understand the concept of domain and range.

### Domain

Domain denotes minimum and maximum values of your input data.

### Range

Range is the output range that you would like your input values to map to.

### Continuous Scales

Map a continuous, quantitative domain to a continuous range.

* [#](https://github.com/d3/d3-scale#scaleLinear) d3.**scaleLiner**()

The d3.scaleLinear() method is used to construct a liner scale where input data maps to a specified output range.

```javascript
  /**
   * Create a continuous linear scale.
   */
  var x = d3.scaleLinear()
    .domain([10, 130])
    .range([0, 960]);

  x(20); //80
  x(50); // 320

```

* [#](https://github.com/d3/d3-scale#scaleIdentity) d3.**scaleIdentity**()

The d3.scaleIdentity() method is used to construct a linear scale where input data is the same as ouput.

* [#]() d3.**scaleTime**()

The d3.scaleTime() method is used to construct a linear scale where input data is in dates and output in numbers.

```javascript
  /**
   * Construct a time scale.
   */
  var x = d3.scaleTime()
    .domain([new Date(2000, 0, 1), new Date(2000, 0, 2)])
    .range([0, 960]);

  x(new Date(2000 0, 1, 5)); // 200
  x(new Date(2000, 0, 1, 16)); // 640
  x.invert(200); // Sat Jav 01 2000 05:00:00 GMT-0800 (PST)
  x.invert(640); // Sat Jav 01 2000 16:00:00 GMT-0800 (PST)
```

* [#](https://github.com/d3/d3-scale#scaleLog) d3.**scaleLog**()

The d3.scaleLog() method is used to construct logarithmic scale.

* [#](https://github.com/d3/d3-scale#scaleSqrt) d3.**scaleSqrt**()

The d3.scaleSqrt() method is used to construct a square root scale.

* [#](https://github.com/d3/d3-scale#scalePow) d3.**scalePow**()

The d3.scalePow() method is used to construct an exponential scale.

### Sequential Scales

* [#]() d3.**scaleSequential**()

The d3.scaleSequential() method is used to construct a sequential scale where output range is fixed by interpolator function.

### Quantize Scales

* [#]() d3.**scaleQuantize**()

The d3.scaleQuantize() method is used to construct a quantize scale with discrete output range.

### Quantile Scales

* [#]() d3.**scaleQuantile**()

The d3.scaleQuantile() method is used to construct a scale where arbitrary input data maps to discrete output range.

### Threshold Scales

* [#]() d3.**scaleThreshold**()

The d3.scaleThreshold() method is used to construct a scale where arbitrary input data maps to discrete output range.

### Band Scales

* [#]() d3.**scaleBand**()

The d3.scaleBand() method is used to create a scale with a continuous and numeric output range.

### Point Scales

* [#] d3.**scalePoint**()

The d3.scalePoint() method is used to construct a point scale.

### Ordinal Scales

* [#] d3.**scaleOrdinal**()

The d3.scaleOrdinal() method is used to construct ordinal scale where input data includes alphabets and are mapped to discrete numeric output range.