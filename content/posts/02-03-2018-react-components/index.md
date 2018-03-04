---
title: "React Components"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "draft"
description: "introduction to react framework"
tags:
    - programming
    - front-end
    - react
---

Components are the basic building blocks of a React application.

A React component describes what you want to see on the screen. You can split the UI into independent components, think about it in isolation and reuse it in your application.

Do you remember VirtualDOM? Internally, a component is an object representation in VirtualDOM of an actual DOM node.

We are going to implement our components using ES6 and JSX.

## Imports

The required import in a component is the React entry point. In order the JSX compiles correctly you must import React.

`import React from 'react';`

The styles of the component can be imported as well if you implemented in an external CSS file.

`import './myComponent.css'`

Other components can be imported as well.

`import AnotherComponent from './components/anotherComponent';`

## Components

A component can be implemented as a function or as a class component. Both of this two implementations have props in common.

Props is a set of read-only properties passed from the parent. A component should describe the types of the props and default values in case of not required props.

**propTypes**

The special propTypes property is used to run type checking validations on props.

The `prop-types` package provides the available types that can be used for type checking.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => (/* Your component implementation */)

MyComponent.propTypes = {
    numProp: PropTypes.number,
    strProp: PropTypes.string,
    funcProp: PropTypes.func,
    ....
}
```

**defaultProps**

You can define default values for the properties that are not required by using the special defaultProps property.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => (/* Your component implementation */)

MyComponent.propTypes = {
    numProp: PropTypes.number,
    strProp: PropTypes.string,
    funcProp: PropTypes.func.isRequired,
    ....
}

MyComponent.defaultProps = {
    numProp: 0,
    strProp: 'default string'
}
```

**render()**

Render method is the only required method that both functional and class components must implement. Functional will return the render implementation and classes must define a render method.

### Functional Components

A functional component is a pure JavaScript function which takes as arguments the props set.

A functional component is actually the implementation of the render method and can not have internal state or custom implementation of the rest <a href="/react-lifecycle-hooks">Lifecycle Methods</a>.

```jsx
import React from "react";

const MyComponent = (props) => {
    return (
        // Your component implementation
    )
}
```

Or

```jsx
import React from "react";

const MyComponent = (props) => (/* Your component implementation */)
```

### Class Components

A class component has full access to React Lifecycle Methods and can maintain an internal state.

Follow the link for a complete guide on <a href="/react-lifecycle-hooks">Lifecycle Methods</a>.

React provides two basic classes which can be extended to create a component.

* React.Component
* React.PureComponent

The difference is the implementation of `shouldComponentUpdate` method. On a change of props or state, PureComponent will do a shallow comparison on both props and state. On the other hand, Component will not do a comparison.

**state**

The state is an internal set of properties which are maintained by the component itself.

The state must be initialized, can be accessed and updated.

**Initialize**

```jsx
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // initialize your state
    };
  }
}
```

Or

```jsx
import React from "react";

class MyComponent extends React.Component {
  state = {
    // Initialize your state
  };
}
```

**Accessed**

To access your state use `this.state`.

```jsx
import React from "react";

class MyComponent extends React.Component {
  ...

  render() {
      return (
          <div>{`My state value: ${this.state.myVar}`}
      )
  }
}
```

**Update**

To update your state use `this.setState(newState)` method. Please note that calling setState will invoke render method.

```jsx
import React from "react";

class MyComponent extends React.Component {
  ...
    handleClick = () => {
        this.setState({
            myVar: this.state.myVar + 1;
        })
    }

    render() {
      return (
          <div>{`My state value: ${this.state.myVar}`}
      )
  }
}
```

**Methods**

In a class component, you can define methods that have, or not, access to `this` keyword. Those that should have access must be bound.

```jsx
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}
}
```

Or

```jsx
import React from "react";

class MyComponent extends React.Component {
  handleClick = () => {};
}
```

## Conclusion

React components can be either stateless or stateful. Stateful is a good fit for custom lifecycle methods implementations and internal state. Stateless is a good fit when you need only the render method implementation.

Next, we are going to explore React Components in details.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-jsx-and-rendering">
  <i class="fas fa-angle-left"></i>
  JSX and Rendering
</a>
<a class="btn-material next-btn" href="/react-container-and-presentational-components">
  Container and Presentational Components
  <i class="fas fa-angle-right"></i>
</a>
</div>
