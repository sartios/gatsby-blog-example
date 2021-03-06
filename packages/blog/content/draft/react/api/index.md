---
title: "React API"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "23-02-2018"
category: "front-end"
tags:
    - programming
    - front-end
    - react
---

## API

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
  <a href="/d-3-dom-manipulation">
    <div class="api-item">
      <div>
        <i class="fas fa-code"></i>
        Component
      </div>
      <div class="api-description">
        Base class for React components.
      </div>
    </div>
  </a>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      PureComponent
    </div>
    <div class="api-description">
      Similar to React.Component with different implementation for shouldComponentUpdate().
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      Children
    </div>
    <div class="api-description">
      Utilities to work with components' children.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      Fragment
    </div>
    <div class="api-description">
      Component to be used in order to return multiple elements in a render() method.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      createElement(type, props, children)
    </div>
    <div class="api-description">
      Creates and returns a new React element of the given type.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      cloneElement(element, props, children)
    </div>
    <div class="api-description">
      Clones and returns a new React element using element as the starting
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      createFactory(type)
    </div>
    <div class="api-description">
      Returns a function that produces React elements of a given type.
    </div>
  </div>
  <div class="api-item">
    <div>
      <i class="fas fa-code"></i>
      isValidElement(object)
    </div>
    <div class="api-description">
      Verifies that the object is a React element.
    </div>
  </div>
</div>

