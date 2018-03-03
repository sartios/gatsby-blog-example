---
title: "React Primer"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "draft"
description: "introduction to react framework"
tags:
    - programming
    - front-end
    - react
---

React is a UI framework for building the UI part of an application. Developers from Facebook and Instagram created and support the React Framework in order to build these applications. React is a great fit for applications with large datasets that change over time.

A real world application usually has data that change over time. Usually the changes should be visible at the UI while user actively uses the app. A simple way to display the changes is to re render the application's DOM but it is not efficient. React provides a fast and efficient engine for taking care of updating the DOM when data changes occur.

## VirtualDOM

VirtualDOM is an in memory lightweight representation of the actual DOM. React uses VirtualDOM to find out what parts of the UI needs an update when data changes. Instead of re-render the entire UI on every data update, React computes the most efficient DOM mutations and applies them.

## Reconciliation

React uses a reconciliation algorithm that compares the VirtualDOM of the current and previous state and applies the changes to the actual DOM. Once React knows which VirtualDOM objects have changed, then it updates only those objects on real DOM.

**Workflow Overview**

1. A part of the data has changed.
2. The entire VirtualDOM gets updated.
3. The VirtualDOM gets compared to what it looked like before and React figures out which objects have changed.
4. The changed objects gets updated on the real DOM.
5. Changes on the real DOM cause the screen to change.

## Components

A React Component is a JavaScript function that contains markup, usually written in JSX and data. Component provides **encapsulation** because it bundles the data with the markup that operates on that data and prevents unauthorized parties to directly access them.

Components can be composable, which means that can contain zero or more React Components. Real world applications consist of a components hierarchy. A nice approach on how to design a system of components is the Atomic Design.

**ES6 Component Example**

```jsx
function ReactComponent(props) {
  return (
    <div>
      <span>Hello world</span>
      <br />
      <span>My name is: {props.name}</span>
    </div>
  );
}
```

* props - the data of the component.
* return - the markup of the component.

## Case Study: Create React Application

React provides all these nice things, but how do I create an application?

In the following example we are going to create a very simple application what displays a message on the browser. We are going to create non ES6 components in order to introduce React API methods.

<a href="/react-build-modern-apps">Back to main</a>
