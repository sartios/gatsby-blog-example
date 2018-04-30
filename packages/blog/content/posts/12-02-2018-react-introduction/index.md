---
title: "React Introduction"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "12-02-2018"
category: "main"
description: "react components, react virtual dom, react render"
tags:
    - programming
    - front-end
    - react
---

React is a JavaScript library for creating user interfaces with datasets that change over time. The basic React concepts are Components and Virtual DOM.

## Components

A React Component is any part of a UI that can contain React Nodes. A React Node is a representation of a DOM node inside Virtual DOM and can be created using JSX or JavaScript. A React Node can be either:

* ReactElement: This is the primary type in React. It's a light, stateless, immutable, virtual representation of a DOM element.
* ReactText: This is a string or a number. It's a virtual representation of a Text Node in the DOM.
* ReactFragment: This is an array of ReactNode elements.

A React Component can be either Functional Component or Class Component. A Functional Component is a pure JavaScript function that accepts props as its arguments, and returns a React Node. A Class Component is a JavaScript class which extends React.Component and must implement a ``render()`` method. In addition, a class based component can override the lifecycle hooks and have internal state.

Functional and Class Components have a set of read-only properties, which look like HTML attributes, called **props**. A component can access its properties but should never modify them. In addition, each component should declare **propTypes** for each property from **props** that will access and provide **defaultProps** from those that are not required. The following list summarize the props:

1. Props are passed into a component from above, either a parent component or from the starting scope where React is originally rendered.
2. Props are intended as configuration values passed into the component.
3. Props are immutable to the component receiving them.

Class Components can maintain internally a set of properties called state. The state of a component can change over time. React.Component provides ``setState()`` function which will update the internal state. The following list summarize the state:

1. State is a JavaScript data object at one point in time that typically is tied to UI.
2. State should always start with a default value and then the state is mutated internally by the component using ``setState()``.
3. State can only be mutated by the component that contains the state.
4. A component should never have shared mutable state.
5. State should not contain computed data, other React components, or duplicated date from props.
6. State should only contain the minimal amount of data needed to represent your UI's state.

__Functional Component__

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => (
  <div>
    Hello World
    {`The message prop is: ${props.message} and the count prop is ${props.count}`}
  </div>);

MyComponent.propTypes = {
  /**
   * A message prop.
   */
  message: PropTypes.string,
  /**
   * A count prop.
   */
  count: PropTypes.number.isRequired
}

MyComponent.defaultProps = {
  message: 'default prop value'
}

<MyComponent message="Hello" count="World" />
```

__Class Component__

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World',
      count: 0
    }
  }

  render() {
    return (
      <div>
        Hello world,
        {`The message prop is: ${this.props.message} and the count prop is ${this.props.count}.`}
        {`The message state is: ${this.state.message} and the count state is ${this.state.count}.`}
      </div>
    )
  }
}

MyComponent.propTypes = {
  /**
   * A message prop.
   */
  message: PropTypes.string,
  /**
   * A count prop.
   */
  count: PropTypes.number.isRequired
}

MyComponent.defaultProps = {
  message: 'default prop value'
}
```

## Virtual DOM

Virtual DOM is an in-memory and lightweight representation of the DOM. Instead of re-render the entire UI every time state data changes, using the Virtual DOM, React computes the most efficient DOM mutations and applies them.

DOM changes is a slow task but with Virtual DOM this task's performance will be increased. DOM is represented as a tree structure. Changes to a tree structure is pretty quick but the changed DOM element and its children has to go through <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Introduction_to_Layout_in_Mozilla">Reflow/Layout</a> stage and then the changes has to be Re-painted which are slow. Virtual DOM minimizes the Reflow and Layout stages. 

React uses a reconciliation algorithm that compares the Virtual DOM of the current and the previous state and applies the changes to the actual DOM. Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM.

Workflow Overview:

1. The entire Virtual DOM gets updated.
2. The Virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3. The changed objects, and the changed objects only, get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.

## React Renderers

React is decoupled from the web. You can used it to implement interfaces across multiple platforms. The most common renderer is known as <a href="https://www.npmjs.com/package/react-dom">react-dom</a> and it supports both client and server side rendering.

__Render in the browser__

````jsx
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, node);

````

__Render on the server__

````jsx
import React from 'react';
import ReactDOMServer from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOMServer.renderToString(<MyComponent />);
````

A list of alternative renderers:

* <a href="https://facebook.github.io/react-native/">React Native</a> - is a framework and renderer for mobile platforms including iOS and Android.
* <a href="https://github.com/Yomguithereal/react-blessed">react-blessed</a> - allows you to write terminal applications using React. It's even possible to animate them.
* <a href="https://projectseptemberinc.gitbooks.io/gl-react/content/">gl-react</a> - provides WebGL bindings for React.
* <a href="https://github.com/Flipboard/react-canvas">react-canvas</a> - provides React bindings for the Canvas element.

<a href="/">Back to Blogs</a>