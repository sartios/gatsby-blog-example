---
title: "React API"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "23-02-2018"
category: "front-end"
description: "React API. An overview of the React API."
tags:
    - programming
    - front-end
    - react
---

React is the entry point of the React Library. The React global object defines the following API.

## API Overview

<style>
  .api-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .api-item-container {
    width: 30%;
    min-height: 150px;
    margin-top: 5px;
    border: 1px solid lightgray;
    font-weight: bold;
    font-size: 1.3em;
  }

  .api-item {
    padding: 30px;
  }

  .api-description {
    padding-top: 15px;
    font-weight: normal;
    font-size: 0.7em;
  }

  .api-link {
      width: 100%;
      text-decoration: none;
      color: inherit;
  }

  @media only screen and (max-width: 768px) {
    .api-container {
      flex-direction: column;
      align-items: center;
    }

    .api-item-container {
      width: 50%;
    }
  }

  @media only screen and (max-width: 480px) {
    .api-item-container {
      width: 80%;
    }
  }
</style>

<div class="api-container">
    <div class="api-item-container">
        <a class="api-link" href="/react-components">
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
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-components">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    PureComponent
                </div>
                <div class="api-description">
                    Similar to React.Component with different implementation for shouldComponentUpdate().
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-children">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    Children
                </div>
                <div class="api-description">
                    Utilities to work with components' children.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-fragment">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    Fragment
                </div>
                <div class="api-description">
                    Component to be used in order to return multiple elements in a render() method.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-create-element">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    createElement(type, props, children)
                </div>
                <div class="api-description">
                    Creates and returns a new React element of the given type.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-clone-element">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    cloneElement(element, props, children)
                </div>
                <div class="api-description">
                    Clones and returns a new React element using element as the starting.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-create-factory">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    createFactory(type)
                </div>
                <div class="api-description">
                    Returns a function that produces React elements of a given type.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-is-valid-element">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    isValidElement(object)
                </div>
                <div class="api-description">
                    Verifies that the object is a React element.
                </div>
            </div>
        </a>
    </div>