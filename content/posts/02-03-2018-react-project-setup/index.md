---
title: "React Project Setup"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "front-end"
description: "react application project setup"
tags:
    - programming
    - front-end
    - react
---

Before you start crafting your application, you have to setup a system to compile and bundle your files. In React world, the preferred tools are Babel for compile ES6 to plain JavaScript and Webpack for bundling the files.

## Babel

Babel is a JavaScript compiler that can compile ES6 and JSX into plain JavaScript that the browser can understand.

You can write React components without ES6 and JSX but it is hard and does not worth the effort.

Integrating Babel with Webpack will compile your ES6/JSX components to plain JavaScript functions at building process.

## Webpack

Webpack is a module bundler which takes modules with dependencies and generates static asses by bundling them together based on some configuration.

At the minimum, you want to use webpack in order to bundle all your JavaScript files into one file, all your CSS files into another file and link them to the HTML that you will send to the browser.

```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/public/app.css">
    </head>
    <body>
        <div id="app"></div>
        <script src="/public/app.js" />
    </body>
</html>
```

## create-react-app

Babel and Webpack need configuration files in order to do their tasks. But most of the React projects have the same configuration.

`create-react-app` is a great tool that generates a React project with an optimized configuration for Babel and Webpack. In addition, it provides the option to `eject` the configuration and extend it as you like.

**Installation**

`npm install -g create-react-app`

**Usage**

* mkdir my-app
* cd my-app
* create-react-app .

The folder structure that it will create is the following:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

## Folder Structure

We are going to alter the initial structure that create-react-app generated. Specifically, we are going to modify src folder.

I suggest a structure that works for applications that have some screens and in these screens they display components.

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    │    └── app
    │        ├── app.css
    │        ├── app.js
    │        ├── app.test.js
    │        └── index.js
    │
    ├── screens
    │    └── homeScreen
    │        ├── components
    │        ├── state
    │        ├── homeScreen.css
    │        └── homeScreen.js
    ├── state
    ├── index.css
    ├── index.js
    └── registerServiceWorker.js
```

* Folder components - contains all the shared components of the current level.
* Folder screens - contains all the available screens.
* Folder state - contains the state of the current level.

<a class="link-flatmaterial" href="https://github.com/sartios/react-app-example/tree/react-project-structure" target="_blank">
  <i class="fab fa-github-alt"></i>
  GitHub Repo
</a>

## Conclusion

The project structure I described above is pretty extensible and can fit well in React world. Next, I am going to describe JSX and the rendering process of your components.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-primer">
  <i class="fas fa-angle-left"></i>
  React Primer
</a>
<a class="btn-material next-btn" href="/react-jsx-and-rendering">
  JSX and Rendering
  <i class="fas fa-angle-right"></i>
</a>
</div>
