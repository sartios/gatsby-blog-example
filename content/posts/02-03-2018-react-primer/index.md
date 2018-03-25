---
title: "React Primer"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "front-end"
description: "introduction to react framework"
tags:
    - programming
    - front-end
    - react
---

React is a UI framework for building the View part of an application and has been created and maintained by Facebook and Instagram developers. It is a great fit for applications with large datasets that change over time.

Synchronizing efficiently the UI with data that change over time is a workflow that React does its best. The changes should be visible at the UI while user actively uses the app. A simple way to display the changes is to re-render the application's DOM but it is not efficient. React provides a fast and efficient engine for taking care of updating the DOM when data changes occur.

## VirtualDOM

VirtualDOM is an in-memory lightweight representation of the actual DOM. It uses VirtualDOM to find out what parts of the UI needs an update when data changes. Instead of re-render the entire UI on every data update, React computes the most efficient DOM mutations and applies them.

## Reconciliation

React uses a reconciliation algorithm that compares the VirtualDOM of the current and previous state and applies the changes to the actual DOM. Once React knows which VirtualDOM objects have changed, then it updates only those objects on real DOM.

**Workflow Overview**

1. A part of the data has changed.
2. The entire VirtualDOM gets updated.
3. The VirtualDOM gets compared to what it looked like before and React figures out which objects have changed.
4. The changed objects get updated on the real DOM.
5. Changes in the real DOM cause the screen to change.

## Components

A React Component is a JavaScript function that contains markup, usually written in JSX and data. The component provides **encapsulation**, it bundles the data with the markup that operates on that data and prevents unauthorized parties to directly access them.

Components can be **composable**, they can contain zero or more React Components. Real world applications consist of a components hierarchy. A nice approach on how to design a system of components is the Atomic Design.

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

## Create React Application

How do you create an application?

The following code creates a very simple application that displays a message on the browser. It is written with non ES6 components in order to make use of React API methods.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">

  <title>React Primer App</title>
  <meta name="description" content="basic react application">
  <meta name="author" content="sartios">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
</head>

<body>
  <div id="app"></div>
  <script>
    ReactDOM.render(
      React.createElement('div', null, 'Hello World'),
      document.getElementById('app')
    );
  </script>
</body>

</html>
```

* <a href="/react-dom-api">ReactDOM</a> - ReactDOM provides a set of DOM specific methods.
* <a href="/react-api">React</a> - React is the entry point of the React Framework.

The component is created using React.createElement method and it is rendered into the container using ReactDOM.render method.

<a class="link-flatmaterial" href="https://github.com/sartios/react-app-example/tree/react-primer" target="_blank">
  <i class="fab fa-github-alt"></i>
  GitHub Repo
</a>

## Conclusion

Components, VirtualDOM and Reconciliation are core concepts of React that should be understood in order to build React applications.

Building a React application is actually building a set of components into the VirtualDOM.

The next chapter proposes a folder structure for application's code.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-build-modern-apps">
  <i class="fas fa-angle-left"></i>
  Back to main
</a>
<a class="btn-material next-btn" href="/react-project-setup">
  Project Structure
  <i class="fas fa-angle-right"></i>
</a>
</div>
