---
title: "ReactDOM findDOMNode"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "27-02-2018"
category: "front-end"
description: "how to use findDOMNode"
tags:
    - programming
    - front-end
    - react
---

ReactDOM.findDOMNode(component) returns the native browser DOM element. It is a useful method for reading values out of the DOM and performing DOM measurements. In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.

The components that you will try to access from findDOMNode must be already mounted, otherwise an error will be thrown. It will return an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a>.

**find dom element**

```jsx
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <span>My Component</span>
      </div>
    );
  }
}

const myComponentNode = ReactTestUtils.renderIntoDocument(<MyComponent />);
const myDiv = ReactDOM.findDOMNode(myComponentNode);
expect(myDiv.tagName).toBe("DIV");
```

**reject unmounted objects**

```jsx
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <span>My Component</span>
      </div>
    );
  }
}

const container = document.createElement("div");
const myComponentNode = ReactDOM.render(<MyComponent />, container);
ReactDOM.unmountComponentAtNode(container);

try {
  const myDiv = ReactDOM.findDOMNode(myComponentNode);
} catch (err) {
  expect(err).toBe("Unable to find node on an unmounted component.");
}
```

## Use refs

It is recommended avoid using findDOMNode and use refs instead in case of accessing DOM markup that rendered by the component. The ref is a special attribute that you can attach to any component. It can be a callback function that will be executed immediately after the component is mounted.

**do something within ref**

```jsx
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <span>My Component</span>
        <input
          type="text"
          ref={input => {
            // do something with the input
          }}
        />
      </div>
    );
  }
}
```

**access to parent**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    this.input.doSomething();
  }

  render() {
    return (
      <div>
        <span>My Component</span>
        <input
          type="text"
          ref={input => {
            this.input = input;
          }}
        />
      </div>
    );
  }
}
```

When attaching a ref to a DOM component like a div, you get the DOM node back but when attaching a ref to a composite component you will get the React class instance and you can call methods on that component.
