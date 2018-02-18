---
title: "React Lifecycle Hooks"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "13-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - react
---

# React Lifecycle Hooks

React provides lifecycle methods that you can override into the Class Components. Methods prefixed with **will** are called right before something happens, and methods prefixed with **did** are called right after something happens.

## Lifecycle Methods

A React component has three phases during its lifecycle. It can be **mounting**, **updating**, **unmounting** and **error handling**.

### Mounting

During mounting you should set the state on ``constructor()`` and add DOM event handlers, timers (etc) or dispatch network requests on ``componentDidMount()``.These methods are called in the following order when a component is being created and inserted into the DOM:

#### constructor(props)
___
The ``constructor()`` method is invoked before it is mounted. When implementing the constructor, you should call super(props) before any other statement. Otherwise, this.props will be undefined.

* Initialize state, just assign an object to ``this.state``; don't try to call ``setState()``.
* Bind event handlers, ``this.handleOnClick = this.handleOnClick.bind(this);``.

```javascript
constructor(props){
  super(props);

  this.state = { /*Initialize your state properties.*/}

  this.handleOnClick = this.handleOnClick.bind(this);
}
```

#### componentWillMount()
___
The ``componentWillMount()`` method is invoked once before the initial rendering and is the only lifecycle hook called on server rendering.

* Load data asynchronously.
* Call ``setState()``. It will not trigger an extra rendering.
* Configure the root component (e.g.: setting up a Firebase connection).
* Avoid to use.

It's recommended to use the ``constructor()`` instead and avoid subscriptions in this method.

<a id="render"></a>

#### render()
___
The ``render()`` method is required and must return a single React Element which can contain children, null or false if nothing should be rendered. In newer React implementations (16.x), render method can return an array of React Elements as well as strings and React 16.2.0 introduced fragments to return React Elements without using an array.

The render method should be pure, it does not modify component state.

__single element__

```jsx
render() {
  return (<div>Hello World</div>);
}
```

__array of elements__

```jsx
render() {
  return (
    [
      <li key="A">Item 1</li>
      <li key="B">Item 2</li>
      <li key="C">Item 3</li>
    ]
  );
}
```

__strings__

```javascript
render() {
  return 'Hello world, no spans!';
}
```

__fragment__

```jsx
render() {
  return (
    <React.Fragment>
      <li key="A">Item 1</li>
      <li key="B">Item 2</li>
      <li key="C">Item 3</li>
    </React.Fragment>
  )
}
```


#### componentDidMount()
___
The ``componentDidMount()`` method is invoked immediately after a component is mounted. This lifecycle has access to DOM and it won't get triggered on server rendering.

* Setup subscriptions.
* Load data from a remote endpoint.
* Initialize third party libraries.

Notice that calling ``setState()`` in this method will trigger an extra rendering, but it will happen before the browser updates the screen, thus the user won't see the intermediate state.

### Updating
___

Updating takes place when parents change properties and .setState() is invoked. These methods are called in the following order when a component is being re-rendered because of props or state changes:

#### componentWillReceiveProps(newProps)

The ``componentWillReceiveProps()`` method is invoked when a component is receiving new props. React will call this method even if the props have not change.

* Update the state ``setState()``.

Make sure to check if the properties indeed changed.

```javascript
componentWillReceiveProps(newProps) {
  /**
   * Check if the name has changed. 
   */
  if(this.props.name !== newProps.name) {
    this.setState({
      name: this.props.name
    });
  }
}
```


#### shouldComponentUpdate(nextProps, nextState)

The ``shouldComponentUpdate()`` method is invoked when new props or state are being received. By default always returns true, but if an implementation will return false then ``componentWillUpdate()``, ``render()`` and ``componentDidUpdate()`` will not be invoked.

* Determine if render needed:
  * Compare ``this.props`` to ``nextProps``.
  * Compare ``this.state`` to ``nextState``.

``React.PureComponent`` class implements this method with a shallow prop and state compare and returns false to tell React the update can be skipped.


#### componentWillUpdate(nextProps, nextState)
___
The ``componentWillUpdate()`` method is invoked before new props or state are being received.

* Set/reset class properties before render.
* Can NOT use ``setState()`` or dispatch an action.

#### render() [>](#render)
___

#### componentDidUpdate(prevProps, prevState)
___
The ``componentDidUpdate()`` method is invoked immediately after updating occurs.

* Manipulate DOM.
* Dispatch network requests.

### Unmounting

The following method is called when a component is being removed from the DOM:

#### componentWillUnmount()
___
The ``componentWillUnmount()`` is invoked immediately before a component is unmounted and destroyed.

* Perform cleanup.
* Invalidating timers.
* Canceling network requests.
* Clean up subscriptions created in ``componentDidMount()``.

Notice that ``componentWillMount()`` and ``componentWillUnmount()`` are not synchronous. Meaning that if an error occurred in ``componentWillMount()`` and ``render()`` will never be invoked, ``componentWillUnmount()`` will never be invoked as well.

### Error Handling

#### componentDidCatch(error, info)
The ``componentDidCatch()`` method catches errors in the components below in a tree.

* Capture unhandled JavaScript errors in the below tree.
* Display a fallback UI.
* Use ``setState()`` to render a fallback UI when capture an error.