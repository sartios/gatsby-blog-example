---
title: "React Routing"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "draft"
description: "how to use react router"
tags:
    - programming
    - front-end
    - react
---

Client side navigation allows to navigate between the html pages of the application. In React and generally in SPAs we have a single html page which loads the entire application. However, we usually need to navigate between the different parts of our application and load only a specific part in the screen.

React core library's responsibility is to handle the View part of the application. It is an engine for rendering and updating our UI, but does not provide a built-in mechanism for loading different parts for your application.

The React Router v4 is an engine for handling navigation in React applications. It provides a set of components which can be used to load specific components in specific routes.

React Router consists of a core package `react-router`, a router for the web `react-router-dom` and a router for the native `react-router-native`. For a web application we will install just the react-router-dom.

`npm install --save react-router-dom`

### The Router

React Router v4 has define an interface for the router it exports, the Router interface. For the web we usually use the BrowserRouter or the HashRouter implementation.

The BrowserRouter uses the HTML5 history API to synchronize the UI with the URL.

The HashRouter uses the hash portion of the URL to synchronize the UI with the URL.

Let's say that our server runs at https://example.app.com:

* BrowserRouter handles all the routes under https://example.app.com
* HashRouter handles all the routes under https://example.app.com#

### The Routes

To define a new route we can use the Route component that React Router v4 exports. It accepts the path and the component that should render as props.

For example, in our application we want to setup a route to display only the wall screen and another one to display the user settings.

```jsx
<Route path="/" component={WallScreen}>
<Route path="/user-settings" component={UserSettingsScreen}>
```

URL parameters can be defined as well. The following route will define a URL get a user's profile:

```jsx
<Route path="/:user" component={UserProfileScreen}>
```

Another important component that React Router v4 exports is the Switch, which renders the first child Route that matches the location.

Let's say that we have define the following routes:

```jsx
<Route path="/" component={WallScreen}>
<Route path="/user-settings" component={UserSettingsScreen}>
<Route path="/:user" component={UserProfileScreen}>
```

If the URL is /user-settings, then UserSettingsScreen and UserProfileScreen will all render because they match the path. Using Switch we can render only the first one that matches the path.

```jsx
<Switch>
    <Route path="/user-settings" component={UserSettingsScreen}>
    <Route path="/:user" component={UserProfileScreen}>
    <Route path="/" component={WallScreen}>
</Switch>
```

Now, if the URL is /user-settings, then only UserSettingsScreen will be rendered.

### The Links

React Router v4 exports a Link component which can be used to accomplish navigation through the application. We can define as props there to redirect on click and it updates the URL.

```jsx
<Link to="/user-settings" />
```

Using traditional anchor links will cause a page reload instead of just updating the URL.

## Conclusion

React Router v4 can be used to implement client side routing.

Router has been integrated in the application in the following <a class="link-flatmaterial" href="https://github.com/sartios/react-app-example/tree/react-project-structure" target="_blank">
<i class="fab fa-github-alt"></i>
GitHub Repo
</a>

For a deep dive into the full features you can read <a class="link-flatmaterial" href="/react-router-v4" target="_blank">
React Router v4
</a>

This is the end of the tutorial.

Share if you liked it!

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-networking">
  <i class="fas fa-angle-left"></i>
  React Networking
</a>
<a class="btn-material next-btn" href="/react-build-modern-apps">
  React Build Modern Apps
</a>
</div>
