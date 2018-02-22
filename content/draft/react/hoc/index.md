---
title: "React HOC Pattern"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "22-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - react
---

A High Order Component is a function that takes an input component and returns an enhanced/modified version of that component. The HOC pattern transforms a component into another component. Usually, it adds props to the passed component after doing some work.

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

## Use cases

HOC pattern enables you to:

* Props Proxy
* Inheritance Inversion
* Naming
* Props manipulation

### Props Proxy

__manipulation props__

You can read, add, edit and remove the props that are being passed to the WrappedComponent.

__accessing the instance via Refs__

You can access this with a ref.

__state abstraction__

You can abstract state by providing props and callbacks to the WrappedComponent.

__wrapping with other elements__

You can wrap the WrappedComponent with other components and elements for styling, layout and other purposes.

### Inheritance Inversion

The returned HOC class extends the WrappedComponent. It allows the HOC to have access to the WrappedComponent instance via this, which means it has access to the state, props, component lifecycle hooks and render method.

__render highjacking__

* Read, add, edit, remove props in any of the React Elements outputted by render.
* Read, and modify the React Elements tree outputted by render.
* Conditionally display the elements tree.
* Wrapping the element's tree for styling purposes.

__manipulation state__

The HOC can read, edit and delete state of the WrappedComponent instance. You should limit the HOC to read or add state only.

## Naming

The WrappedComponent will lose the original name which might impact developing and debugging.

## API

<div class="api-container">
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      High-Order Component
    </div>
    <div class="api-description">
      Returns an enhanced/modified version of a component.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      Component
    </div>
    <div class="api-description">
      A component which should be enhanced or modified.
    </div>
  </div>
</div>

## Example

### Props Proxy

```jsx
  function withProxyProps(WrappedComponent) {
    return class extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
```

### Inheritance Inversion

```jsx
  function withInheritanceInversion(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
      render() {
        return super.render();
      }
    }
  }
```