---
title: "React createElement"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-02-2018"
category: "front-end"
description: "how to use react createElement"
tags:
    - programming
    - front-end
    - react
---

React.cloneElement(type, [props], [...children]) creates and returns a new React Element of the given type. The use case of this method is to create React Elements without JSX.

The components that are written in JSX will be transpilled in JavaScript, usually by using Babel. In order to create components this method will be invoked.

### Simple Component

Lets say you have create the following component in JSX:

```jsx
const MyComponent = props => (
    <div>Hello World</div>
);
```

The transpilled version in JavaScript will be the following:

```javascript
var MyComponent = function MyComponent(props) {
	return React.createElement(
		"div",
		null,
		"Hello World"
	);
};
```
### Component with Props

JSX Version

```jsx
const MyComponent = props => (
    <div className={props.className}>
    	Hello World
  	</div>
);
```

JavaScript Version

```javascript
var MyComponent = function MyComponent(props) {
  return React.createElement(
    "div",
    { className: props.className },
    "Hello World"
  );
};
```

### Component with Children

JSX Version

```jsx
const MyComponent = props => (
	<div className={props.className}>
    	<span>Hello World</span>
  	</div>
);
```

JavaScript Version

```javascript
var MyComponent = function MyComponent(props) {
  return React.createElement(
    "div",
    { className: props.className },
    React.createElement(
      "span",
      null,
      "Hello World"
    )
  );
};
```

## Conclusion

It's recommended to write your components in JSX. If for any reason you do not prefer JSX, then you have to create your components using React.createElement.

<a href="/react-api">Back to API</a>