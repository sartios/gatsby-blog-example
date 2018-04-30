---
title: "React JSX and Rendering"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "front-end"
description: "react components, jsx and rendering"
tags:
    - programming
    - front-end
    - react
---

JSX is a statically-typed, object-oriented programming language that compiles to JavaScript. In React, JSX provides syntactic sugar for `React.createElement(component, props, ...children)` function and Babel takes care the compilation.

It's recommended to use JSX to describe your UI components.

### HTML into JavaScript

React puts HTML into JavaScript with JSX.

#### Benefits

**Compile-time Errors**

JSX will be compiled to JavaScript. Making a typo error in JSX, it won't compile.

Forgot to close a div tag? The compiler will give you feedback about it.

**Power of JavaScript**

You can enjoy all the power of JavaScript when working with your markup.

Looping or conditional logic with your markup do not require extra tags, just simple JavaScript.

## JSX

Now that you know the benefits of JSX, let's describe JSX in depth:

* JSX looks like HTML:

```jsx
const element = <div>Hello World</div>;
```

* JSX and Styles:

```jsx
const styles = { backgroundColor: "#fff" };

// Element with inline styles
const element1 = <div style={styles}>Hello World</div>;

// Element with class name
const element2 = <div className="your-class-name">Hello World</div>;
```

* JSX and Event Handlers:

```jsx
const element1 = <div onClick={() => myOnClickHandler()}>Click Me</div>;
const element2 = <div onClick={myOnClickHandler}>Click Me</div>;
```

* JSX and JavaScript expressions:

```jsx
const formatName = name => `${name} - formatted`;

const element = <div>Hello, {formatName("John")}</div>;
```

* JSX and Looping:

```jsx
const persons = [
  { id: 1, name: "John" },
  { id: 2, name: "Mark" },
  { id: 3, name: "Peter" }
];

const element = (
  <div>
    {persons.map(person => (
      <div key={`p-${person.id}`}>Hello {person.name}</div>
    ))}
  </div>
);
```

* JSX and Conditional Logic:

```jsx
const element = <div>{isLoggedIn ? <div>Hello User</div> : null}</div>;
```

## Conclusion

JSX brings HTML into JavaScript and you can use plain JavaScript to accomplish conditional rendering and looping.

Next, you are going to explore React Components in details.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-project-setup">
  <i class="fas fa-angle-left"></i>
  Project Setup
</a>
<a class="btn-material next-btn" href="/react-components">
  React Components
  <i class="fas fa-angle-right"></i>
</a>
</div>
