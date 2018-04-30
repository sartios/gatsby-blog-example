---
title: "ReactDOM Hydrate"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "front-end"
description: "how to use reactdom hydrate"
tags:
    - programming
    - front-end
    - react
---

ReactDOM.hydrate(element, container) renders a React element like ReactDOM.render but it is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. Hydrate will preserve the markup and will only attach event handlers.

It works like <a href="/react-dom-render">ReactDOM.render</a> for SSR but keeps the generated markup:

* App.js

```jsx
import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return (
    <div className="app-content" onClick={props.onClick}>
      Hello world - {`${props.env}`} Side Rendered Component
    </div>
  );
};

const { func, string } = PropTypes;

App.propTypes = {
  onClick: func,
  env: string
};

App.defaultProps = {
  onClick: () => console.log("Hello World - SSR Content"),
  env: "SSR"
};

export default App;
```

* server.js

```javascript
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./components/App";

const PORT = 3000;
const server = express();

server.use("/", express.static("dist"));

server.get("/", (req, res) => {
  res.write("<!DOCTYPE html><html><head><title>App</title></head><body>");
  res.write('<div id="app">');
  res.write('<div id="loader">Loading...</div>');
  res.write(ReactDOMServer.renderToString(<App />));
  res.write('</div><script src="/browser.js"></script></body></html>');
  res.end();
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
```

* browser.js

```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

setTimeout(() => {
  ReactDOM.render(
    <App
      env="Client"
      onClick={() => console.log("Hello World - Client Side Content")}
    />,
    document.getElementById("app")
  );
}, 2000);
```

* resulted markup

```html
<div id="app">
  <div id="loader">
    Hello World - Client Side Rendered Content
  </div>
</div>
```

<a href="/react-dom-api">Back to API</a>
