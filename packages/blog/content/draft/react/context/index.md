---
title: "React 16 Context API"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "22-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - react
---

The context API makes easier to share state across components without having to pass the props down manually at every level, ``prop drilling``. Many times in prop drilling, the intermediate components don't even need to use the data that is being sent down. However, in the past using content has been discouraged but recently React core team made it officially available.

## Why not to use content?

React core team, before React 16, mentioned that context was an experimental API that would likely change in future releases of React and should use state management libraries like Redux or MobX instead.

The context is similar to using global variables to pass state through the application. This turned the code harder to understand because the data flow is less clear. In addition, the components are more coupled to a specific React subtree and less reusable, because they behave differently on where they are rendered.

Finally, there is a known limitation where if a context value gets updated, but an intermediate parent returns ``false`` from ``shouldComponentUpdate`` then the descendants won't get updated. 

## Why to use content?

Now, the problem that context is solving is getting state from the top of your react tree to bottom, without using ``prop drilling``.

State management libraries, like Redux, came into play to solve the same problem. They allow you to get data from the store anywhere in the tree, simple by use the a ``Provider`` component. But this ``Provider`` component it actually uses the context API to put the data into context and by using the ``connect`` HOC you can pull the data out of context.

In conclusion, you may not using directly the context API but the state management library that you use it already does. Also, react router and redux forms are using context as well.

## API

The context API has changed. Now there are two context APIs, the old and the new. The following section describes the new context API.

The new context API consists of three main parts:

<style>
  .api-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .api-item {
    padding: 30px;
    width: 30%;
    min-height: 150px;
    margin-top: 5px;
    border: 1px solid lightgray;
    font-weight: bold;
    font-size: 1.3em;
  }

  .api-description {
    padding-top: 15px;
    font-weight: normal;
    font-size: 0.7em;
  }

  @media only screen and (max-width: 768px) {
    .api-container {
      flex-direction: column;
      align-items: center;
    }

    .api-item {
      width: 50%;
    }
  }

  @media only screen and (max-width: 480px) {
    .api-item {
      width: 80%;
    }
  }
</style>

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      React.createContext
    </div>
    <div class="api-description">
      Returns an object with a Provider and Consumer.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      Provider
    </div>
    <div class="api-description">
      Component to be used higher in the tree. It accepts a prop called value which can be anything.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      Consumer
    </div>
    <div class="api-description">
      Component to be used anywhere below the provider in the tree and accepts a prop called children which is a function that accepts value and returns React.Node.
    </div>
  </div>
</div>

```javascript
interface React {
  createContext<T>(defaultValue: T): Context<T>;
}

type Context<T> = {
  Provider: Provider<T>,
  Consumer: Consumer<T>,
};

type Provider<T> = React.Component<{
  value: T,
  children?: React.Node
}>;

type Consumer<T> = React.Component<{
  children: (value: T) => React.Node,
}>
```

### Example

```jsx
const ThemeContext = React.createContext('light');

class ThemeProvider extends React.Component {
  state = { theme: 'light' }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          { val => <div>{val}</div> }
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

```