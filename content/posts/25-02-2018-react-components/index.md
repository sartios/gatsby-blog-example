---
title: "React Components"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "25-02-2018"
category: "front-end"
description: "React components"
tags:
    - programming
    - front-end
    - react
---

Components are the basic building blocks of a React application. React is a framework for developing the UI parts of an application, so a React component is any part of the UI that can contain React Node(s), a representation of a DOM node inside Virtual DOM. Usually, a component is written in JSX but pure JavaScript can be used as well.

## Class Components

React provides two basic classes which can be extended in order to create a component.

* ``React.Component``
* ``React.PureComponent``

The difference between these two classes is the implementation of ``shouldComponentUpdate`` method. On change of props or state, PureComponent will do a shallow comparison on both props and state where on the other hand Component will not do a comparison.

A class component can have ``props``, ``state`` and its own implementation of the ``lifecycle`` methods available to React components. Props is a set of read-only properties passed from the parent where state is a set of internal properties maintained by the component itself. As for the lifecycle methods, the ``render()`` method must be implemented because it is required.

<style>
  .api-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .api-item-container {
    width: 30%;
    min-height: 150px;
    margin-top: 5px;
    border: 1px solid lightgray;
    font-weight: bold;
    font-size: 1.3em;
  }

  .api-item {
    padding: 30px;
  }

  .api-description {
    padding-top: 15px;
    font-weight: normal;
    font-size: 0.7em;
  }

  .api-item-wrapper {
      width: 100%;
      text-decoration: none;
      color: inherit;
  }

  @media only screen and (max-width: 768px) {
    .api-container {
      flex-direction: column;
      align-items: center;
    }

    .api-item-container {
      width: 50%;
    }
  }

  @media only screen and (max-width: 480px) {
    .api-item-container {
      width: 80%;
    }
  }
</style>

<div class="api-container">
    <div class="api-item-container">
        <a class="api-item-wrapper" href="/react-lifecycle-hooks">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    Lifecycle
                </div>
                <div class="api-description">
                    Methods to be override in order to run code at particular times in the process.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    props
                </div>
                <div class="api-description">
                    A set of read-only properties defined by the parent.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    state
                </div>
                <div class="api-description">
                    A set of internal properties maintained by itself.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    propTypes
                </div>
                <div class="api-description">
                    An object defining the types for each property in props.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    defaultProps
                </div>
                <div class="api-description">
                    An object defining default values for each property in props.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    displayName
                </div>
                <div class="api-description">
                    A string used for debugging purposes.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    setState()
                </div>
                <div class="api-description">
                    Updates the internal state and re-renders this component and its children.
                </div>
            </div>
        </div>
    </div>
    <div class="api-item-container">
        <div class="api-item-wrapper">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    forceUpdate()
                </div>
                <div class="api-description">
                    Causes a call to the render() method while skipping the shouldComponentUpdate().
                </div>
            </div>
        </div>
    </div>
</div>

### Example

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // initialize state variables
        }
    }

    handleOnClick = () => {
        // Do something
        this.setState({ /* update state variables */ })
    }

    render() {
        const { numProp, stringProp } = this.props;
        const { numState, stringState } = this.state;

        return (
            <div className="wrapper-div">
                <div className="display-container">
                    <span>Hello World, this is a display container</span>
                    <span>{`this.props.numProp => ${numProp}`}</span>
                    <span>{`this.props.stringProp => ${stringProp}`}</span>
                    <span>{`this.props.numState => ${numState}`}</span>
                    <span>{`this.props.stringState => ${stringState}`}</span>
                </div>
                <button
                    onClick={this.handleOnClick}
                    type="button"
                />
                    Click Me
                </button>
            </div>
        )
    }
}

const { number, string } = PropTypes;

MyComponent.propTypes = {
    numProp: number,
    stringProp: string.isRequired
}

MyComponent.defaultProps = {
    numProp: 0
}

export default MyComponent;
```

## Functional Components

Functional components is a pure JavaScript function which takes as arguments the props set. Actually, it is only the implementation of the ``render()`` method and can not have internal state or implementations of the rest lifecycle methods.

### Example

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const handleOnClick = (e) => { /* Do something on click */}

const MyComponent = (props) => {
    const { numProp, stringProp } = props;
        return (
            <div className="wrapper-div">
                <div className="display-container">
                    <span>Hello World, this is a display container</span>
                    <span>{`this.props.numProp => ${numProp}`}</span>
                    <span>{`this.props.stringProp => ${stringProp}`}</span>
                    <span>Do NOT have state here</span>
                </div>
                <button
                    onClick={handleOnClick}
                    type="button"
                />
                    Click Me
                </button>
            </div>
        )
}

const { number, string } = PropTypes;

MyComponent.propTypes = {
    numProp: number,
    stringProp: string.isRequired
}

MyComponent.defaultProps = {
    numProp: 0
}

export default MyComponent;
```

## Composing Components

As said in the introduction, components are the building blocks of a React application. But how do you compose all the components together in order to build the application? First you have to import the component where you want to use it and then you can use it as a plain html tag.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

import MyComponent from './myComponent'; // relative or absolute path to myComponent.jsx file.

const MyParentComponent = (props) => (
    <div className="parent-component-wrapper">
        <MyComponent numProp={7} stringProp="hello friend" /> 
    </div>
)

export default MyParentComponent;
```

## Conclusion

As a conclusion I will answer the question *when to use functional components and when to use class components?*. The reason to use functional components is not the performance, because they are wrapped internally in a class, but because you do not need an internal state or to override a lifecycle hook. In case you need anything of these two, you have to go with class components.

<a href="/react-api">Back to API</a>