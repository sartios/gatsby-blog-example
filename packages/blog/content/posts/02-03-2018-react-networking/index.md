---
title: "React Networking"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "01-03-2018"
category: "front-end"
description: "invoking endpoints with fetch and react"
tags:
    - programming
    - front-end
    - react
---

React handles just the View part of an application and does not provide a built-in mechanism to communicate with APIs, which let you decide the tool to use for this purpose.

In this tutorial, you are going to use `isomorphic-fetch` an npm module to fetch URL contents and integrate it with Redux to update your store.

### Fetch

To install

`npm install --save isomorphic-fetch promise-polyfill`

Isomorphic fetch is a promised based module that's why you need the promise polyfill.

The create-react-app configuration, provides out of the box the fetch tool.

To GET data from an endpoint:

```javascript
fetch("/url-endpoint")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log("parsed json", json);
  })
  .catch(function(ex) {
    console.log("parsing failed", ex);
  });
```

To POST, PUT, DELETE data to an endpoint:

```javascript
fetch("/users", {
  method: "POST" || "PUT" || "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "username",
    login: "loginname"
  }).then(function(response) {
    // Implementation
  })
});
```

### Redux

Redux actions is the integration point of redux and fetch. From inside an action you can call an asynchronous API. Actually, it is not so simple because there two crucial moments, the moment the call started and the moment that server responded, but Async Actions came into play to solve this problem.

An Async Action is a redux action that will dispatch other actions which will be processed by reducers synchronously. Usually, for any API request you'll want to dispatch at least three different actions:

1. Request: inform the reducers that the request began.
2. Success: inform the reducers that the request finished successfully.
3. Error: inform the reducers that the request failed.

Using <a href="https://github.com/gaearon/redux-thunk" target="_blank">redux-thunk</a> you can write action creators that return function instead of an action.

To install

`npm install --save redux-thunk`

Then, to enable Redux Thunk, use applyMiddleware()

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

Redux Thunk now lets you create actions that return and dispatch other actions in the following way:

```javascript
const asyncActionRequest = () => ({
  type: ASYNC_ACTION_REQUEST
});

const asyncActionSuccess = res => ({
  type: ASYNC_ACTION_SUCCESS,
  ...res
});

const asyncActionError = err => ({
  type: ASYNC_ACTION_ERROR,
  err
});

const asyncAction = () => {
  return (dispatch, getState) => {
    dispatch(asyncActionRequest());

    return fetch("//url")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("an error message");
        }
      })
      .then(res => dispatch(asyncActionSuccess(res)))
      .catch(err => dispatch(asyncActionError(err)));
  };
};
```

# Conclusion

Handling network traffic with React can be done with isomorphic-fetch. In order to integrate it with redux you need to create async actions. A middleware solution for async actions is the redux-thunk module.

Async actions have to handle at least 3 stages, **request**, **success** and **error**.

Next, you are going to explore how to implement client side routing.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-complex-state-management">
  <i class="fas fa-angle-left"></i>
  React Complex State Management
</a>
<a class="btn-material next-btn" href="/react-routing">
  React Routing
  <i class="fas fa-angle-right"></i>
</a>
</div>
