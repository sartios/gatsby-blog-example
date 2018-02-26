---
title: "React cloneElement"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-02-2018"
category: "front-end"
description: "how to use react cloneElement"
tags:
    - programming
    - front-end
    - react
---

React.cloneElement(element, [props], [...children]) clones and returns at runtime, a new React element using element as starting point. The new element will replace existing children, key and ref from the original element.

The reason to use cloneElement is because you need to create a copy of a React element with different props from those of the original element. The new element exists only in React's Virtual DOM and won't add a new component to the DOM.

### Update the props of each child

```jsx
import React from 'react'

class MyComponent extends React.Component {
    // component implementation

    render() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return React.cloneElement(child, {
                            // Change the initial properties of the child
                        })
                    })
                }
            </div>
        )
    }
}
```

<a href="/react-api">Back to API</a>