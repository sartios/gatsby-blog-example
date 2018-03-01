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

ReactDOM.render(element, container) renders a React element into the DOM in the supplied container and return a reference to the component or null for stateless components. It does not modify the container node, it inserts a component to an existing DOM node without overwriting its children. This method can be used only in the browser.

## Usage

React.render(element, container) is mostly used to render the application into DOM.

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

**render different components in same root**

```javascript
const container = document.createElement("container");
document.body.appendChild(container);

ReactDOM.render(<div />, container);
expect(container.firstChild.nodeName).toBe("DIV");

ReactDOM.render(<span />, container);
expect(container.firstChild.nodeName).toBe("SPAN");
```

**reuse markup when rendering the same target twice**

```javascript
const container = document.createElement("container");
const instance1 = ReactDOM.render(<div />, container);
const instance2 = ReactDOM.render(<div />, container);

expect(instance1 === instance2).toBe(true);
```

## Server Side Rendering - SSR

On Server Side Rendering the components will be rendered at server and the server will respond an HTML page to the browser. In this case the markup should be generated with `ReactDOMServer.renderToString` and/or `ReactDOMServer.renderToStaticMarkup`. The responded HTML will not include event listeners but SSR is usually used to render an initial HTML either for SEO or UX and after use ReactDOM.render to mount the application.

* `renderToString` - renders a React Element to its initial content.
* `renderToStaticMarkup` - renders a React Element to its initial content excluding React specific attributes.

### SEO SSR Version

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

const server = express();

server.get("/", (req, res) => {
  res.send(
    ReactDOMServer.renderToStaticMarkup(
      <Html markup={ReactDOMServer.renderToString(<App />)} />
    )
  );
});

server.listen(3000, () => {
  console.log("listening on port 3000...");
});
```

### Browser SSR Version

The browser SSR version is a case where the container with some initial content will be rendered from the server and the injection of the app into the container will happen at browser. The app bundle will be served from the server as well.

You can find a working example at <a href="https://github.com/sartios/react-ssr-example">github</a>.

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
        <script src="/browser.bundle.js" />
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

const server = express();

server.get("/", (req, res) => {
  res.send(
    ReactDOMServer.renderToStaticMarkup(
      <Html
        markup={ReactDOMServer.renderToString(<div>Initial SSR content</div>)}
      />
    )
  );
});

server.listen(3000, () => {
  console.log("listening on port 3000...");
});
```

* browser.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App name="World" />, document.getElementById("app"));
```

<a href="/react-dom-api">Back to API</a>
