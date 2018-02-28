---
title: "ReactDOM Render"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "27-02-2018"
category: "front-end"
description: "how to use reactdom render"
tags:
    - programming
    - front-end
    - react
---

React.render(element, container) renders a React element into the DOM in the supplied container and return a reference to the component or null for stateless components. This method can be used only in the browser.

## Usage

The place that React.render(element, container) is mostly used to render the application into DOM.

### In the browser

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

const container = document.createElement("div");
const myComponentRef = ReactDOM.render(<App />, container);
```

## Server Side Rendering - SSR

This method can not be used for server side rendering. Instead, `ReactDOMServer.renderToString` and `ReactDOMServer.renderToStaticMarkup` should be used.

* App.js

```jsx
import React from "react";

const App = props => {
  return <div>Hello {props.name}</div>;
};

export default App;
```

* Html.js

```jsx
import React from "react";

const Html = props => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.markup }} />
        <script src="/static/bundle.js" />
      </body>
    </html>
  );
};
```

* server.js

```javascript
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import Html from "./Html";
import App from "./App";

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send(
    ReactDOMServer.renderToStaticMarkup(
      <Html markup={ReactDOMServer.renderToString(<App />)} />
    )
  );
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
```

<a href="/react-dom-api">Back to API</a>
