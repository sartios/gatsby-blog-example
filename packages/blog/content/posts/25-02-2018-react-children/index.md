---
title: "React Children"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "25-02-2018"
category: "front-end"
description: "Render, manipulate and pass props to react children"
tags:
    - programming
    - front-end
    - react
---

React.Children provides utilities for dealing with the this.props.children data structure.

## Child Component

Child is a JavaScript expression inside a parent. Children in React don't have to be components, they can be anything. You can pass any JavaScript expression as children, including functions, arrays, object, etc.

Parents can decide not to render any children or to manipulate them before rendering. A parent can access its children from `props.children` and because can have one element, multiple elements, or none at all, this value is a single child node, an array of child nodes or undefined.

A React Child has the following key properties:

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      $$typeof
    </div>
    <div class="api-description">
      Used by React to verify the child is a valid element.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      key
    </div>
    <div class="api-description">
      A special string attribute you need to set when creating lists.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      props
    </div>
    <div class="api-description">
      The props being passed down to the child.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      ref
    </div>
    <div class="api-description">
      The ref function assigned to the child in order to be accessible outside of the typical dataflow.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      type
    </div>
    <div class="api-description">
      A function used to create the component or a string.
    </div>
  </div>
</div>

## API overview

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      map(children, function)
    </div>
    <div class="api-description">
      Similar to Array.prototype.map. Invokes a function on every immediate child and returns an array. If children is null or undefined returns null.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      forEach(children, function)
    </div>
    <div class="api-description">
      Similar to Array.prototype.forEach. Invokes a function on every immediate child and returns nothing.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      count(children)
    </div>
    <div class="api-description">
      Returns the total number of components in children.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      only(children)
    </div>
    <div class="api-description">
      Verifies that children has only one child and returns it, otherwise throws error.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      toArray(children)
    </div>
    <div class="api-description">
      Returns the children data structure as a flat array wth keys assigned to each child.
    </div>
  </div>
</div>

### Looping over children

```jsx
import React from "react";

class MyComponent extends React.Component {
  // component implementation

  render() {
    return (
      <div>
        {// Ignore the first child
        React.Children.map(this.props.children, (child, i) => {
          if (i < 1) return null;
          return child;
        })}
      </div>
    );
  }
}
```

### Counting children

```jsx
import React from "react";

class MyComponent extends React.Component {
  // component implementation

  render() {
    return (
      <div>
        {`This component has ${React.Children.count(
          this.props.children
        )} children.`}
      </div>
    );
  }
}
```

### Enforcing single child

```jsx
import React from "react";

class MyComponent extends React.Component {
  // component implementation

  render() {
    try {
      const child = React.Children.only(this.props.children);
      return <div>{child}</div>;
    } catch (err) {
      return null;
    }
  }
}
```

### Immutably cloning elements

```jsx
import React from "react";

class MyComponent extends React.Component {
  // component implementation

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, i) => {
          return React.cloneElement(child, {
            // Change the initial properties of the child
          });
        })}
      </div>
    );
  }
}
```

<a href="/react-api">Back to API</a>
