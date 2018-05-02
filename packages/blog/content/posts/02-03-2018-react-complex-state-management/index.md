---
title: "React Complex State Management"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "09-03-2018"
category: "front-end"
description: "react redux state management"
tags:
    - programming
    - front-end
    - react
---

React allows you to store state in the components and provides `setState` and `this.state` to read and write.

Keeping the state internal to components causes scalability and maintainability issues.

**Sharing the state**

The internal state is not sharable between components. If more that one component needs the same part of the internal state, you have to define workarounds in order to share and keep the internal state updated.

**Props drilling**

Parents can pass to their children data through props and you can use this technique to pass down parents' internal state. In cases that the children do not need the state but their nested children then we cause props drilling.

**Caching**

The internal state cannot be cached out of the box. Because it lives inside the components on unmount it will be lost. In order to maintain it on unmount you have to define workarounds to send it around on unmounts.

**Separation of concerns**

Internal state lacks separation of concerns because you have to define and maintain the components a mechanism to pass the state around.

An externalized state is a solution to all these problems. There are many tools for this purpose but here I will speak about redux.

## How redux works

To integrate redux in order to externalize your state, you have to think in redux way:

1. describe app state as plain objects and arrays,
2. describe changes in the system as plain objects,
3. describe the logic for handling changes as pure functions

### Actions

An **action** encapsulates the _what happened_, (e.g. a request to fetch the users).

Also, it carries and formats the message that you want to send, (e.g. fetch the users whose the first name starts with _jo_).

And finally, dispatching an action should fire a state change, (e.g. a request has been dispatch which will modify the state) but should NOT care how the state will be altered.

### Reducer

A **reducer** contains the logic of modifying the state when specific actions have been dispatched.

It listens to a set of actions and when they have been dispatched it copies the state and applies changes to it. Then it returns the updated state back to the root reducer.

#### Root Reducer

The **root reducer** just combines multiple reducers and communicates with the **store**.

When an action has been dispatched, the store provides to the root reducer the action and the current state tree. Then the root reducer will pass to the appropriate reducer the state and the action and will receive back the modified state. Finally, it returns the modified state back to store.

### Store

The **store** is a global object that encapsulates application's state and a chain of reducers. You can think of the store as the data source that contains the state.

## Workflow

The following workflow is what takes place when the view dispatches an action until it will run a re-render.

1. A View-Binding dispatches an action (e.g. fetch the users).
2. The Store receives the action that has been dispatched.
3. The Root Reducer receives the action and the current state tree from the Store.
4. A Reducer receives a slice of the state that handles and the dispatched Action.
5. The Reducer copies the state and applies the appropriate changes for the specific Action.
6. The RootReducer receives back the state slices and unites them into a state object.
7. The Store receives the altered state and will replace the current state.
8. The Store informs the View-Bindings that state has been modified.
9. The View-Bindings receive the new state and re-render.

Further reading <a class="link-flatmaterial" href="/redux-api">Redux API</a>

## Integration Steps

### Installation

Run the following command to install redux.

`yarn add redux react-redux`

All the rest files will live under `state/wall` folder.

### Create Action Types

We are going to create an action type which will load the posts into the state.

Create a file `types.js` and export constant strings for your types.

```javascript
export const FETCH_POSTS = "FETCH_POSTS";
```

### Create Action

We are going to create an action to fire loading posts state update.

Create a file `actions.js` and export pure functions for your actions.

An action must return an object with a type attribute and optionally the data you want to transfer, in our case the posts.

```javascript
import { FETCH_POSTS } from "./types";

export const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts
});
```

### Create Wall Reducer

We are going to create a reducer that will listen to loading posts into state action and the logic to update the state accordingly.

The reducer will have an object with the initial state and a function which will contain the logic of updating the state on different actions.

```jsx
import { FETCH_POSTS /* more actions can be imported*/ } from "./types";

// your initial state goes here.
export const initialState = {
  // a list with the posts
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    // implementations for more types
    default:
      return state;
  }
};
```

### Create Store

The function `createStore` is responsible for assembling your store.

```javascript
import { createStore } from "redux";

import wallReducer from "./wall/reducer";

const store = createStore(wallReducer);

export default store;
```

### Bindings

In order to access the store in the components, we will use the `Provider` and `connect()` from the `react-redux` package.

#### Provider

Provider component is a wrapper for your root component and its responsibility is to make the store available to the connect function.

In the `index.js` you have to import provider and wrap the app component.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import store from "./state/store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
```

#### connect

We are going to connect the wall screen component with the redux store in order to do the following:

1. on did mount to dispatch an action to load the posts into the state,
2. read the posts from state

First, we have to create a container component for the wall screen the `WallScreenContainer` and then use the container instead of the presentational component.

```javascript
import { connect } from "react-redux";

import WallScreen from "./wallScreen";
import { fetchPosts } from "../../state/wall/actions";

/**
 * Use this function to pass as props values from the state.
 */
const mapStateToProps = state => ({
  posts: state.posts
});

/**
 * Use this function to pass action creators as props.
 */
const mapDispatchToProps = dispatch => ({
  onMount: posts => dispatch(fetchPosts(posts))
});

/**
 * Use this function to bind your component with redux.
 */
export default connect(mapStateToProps, mapDispatchToProps)(WallScreen);
```

Finally, the presentational component has to invoke the onMount prop and iterate over the posts to render the appropriate data.

```jsx
import React from "react";
import PropTypes from "prop-types";

import Screen from "../../components/ui/screen";
import Column from "../../components/ui/column";
import Post from "./components/post";

import dummyData from "./dummyData";

/**
 * Wall screen component.
 */
class WallScreen extends React.Component {
  componentDidMount() {
    this.props.onMount(dummyData);
  }

  render() {
    return (
      <Screen title="Wall Screen">
        <Column>
          {this.props.posts.map((post, index) => (
            <Post key={`p-${index}`} user={post.user} imageUrl={post.photo} />
          ))}
        </Column>
      </Screen>
    );
  }
}

const { array, func } = PropTypes;

WallScreen.propTypes = {
  /**
   * An array with the posts
   */
  posts: array,
  /**
   * This function will be invoked in did mount
   */
  onMount: func.isRequired
};

WallScreen.defaultProps = {
  posts: []
};

export default WallScreen;
```

The code is available at the following <a class="link-flatmaterial" href="https://github.com/sartios/react-app-example/tree/integrate-redux" target="_blank"><i class="fab fa-github-alt"></i>GitHub Repo</a>

## Conclusion

Redux is a state management engine to externalize your state. Integrating Redux and using Container/Presentational Components pattern increases separation of concerns which leads to increased maintainability.

Next, we are going to explore how to navigate in the app using React Router.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-container-and-presentational-components">
  <i class="fas fa-angle-left"></i>
  Container and Presentational Components
</a>
<a class="btn-material next-btn" href="/react-networking">
  React Networking
  <i class="fas fa-angle-right"></i>
</a>
</div>
