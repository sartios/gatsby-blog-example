---
title: "ReactDOM API"
cover: "https://sartios.com/images/react-dom-api.png"
date: "27-02-2018"
category: "main"
description: "reactdom api overview"
tags:
    - programming
    - front-end
    - react
---

ReactDOM provides DOM-specific methods and it has its own npm package.

`npm install --save react-dom`

## API Overview

<div class="api-container">
    <div class="api-item-container">
        <a class="api-link" href="/react-dom-render">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    render(element, container)
                </div>
                <div class="api-description">
                    Renders a React element into the DOM in the supplied container and returns a reference to the component.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-dom-hydrate">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    hydrate(element, container)
                </div>
                <div class="api-description">
                    Like render() but for server side rendering.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-dom-unmount-component-at-node">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    unmountComponentAtNode(container)
                </div>
                <div class="api-description">
                    Remove a mounted React component from the DOM and clean up its event handlers and state.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-dom-find-dom-node">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    findDOMNode
                </div>
                <div class="api-description">
                    Returns the DOM element if the component has been mounted.
                </div>
            </div>
        </a>
    </div>
    <div class="api-item-container">
        <a class="api-link" href="/react-dom-create-portal">
            <div class="api-item">
                <div>
                    <i class="fas fa-code"></i>
                    createPortal(child, container)
                </div>
                <div class="api-description">
                    Renders children into a DOM node that exits outside the DOM hierarchy of the parent component.
                </div>
            </div>
        </a>
    </div>
</div>

The provided methods are DOM-specific. Most of your components should not need to use this module.

<a href="/">Back to blogs</a>
