---
title: "React createFactory"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-02-2018"
category: "front-end"
description: "how to use react createFactory"
tags:
    - programming
    - front-end
    - react
---

React.createFactory(type) creates and returns a function to create elements of a given type. Like React.createElement it is used when create components without JSX. It is actually returning a factory that does what createElement does.

```javascript
var div = React.createElement('div');
var reactDivElement = div(props, children);
```

It's recommended to write your components in JSX. If for any reason you do not prefer JSX.

<a href="/react-api">Back to API</a>