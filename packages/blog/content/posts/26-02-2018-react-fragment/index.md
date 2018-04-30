---
title: "React Fragment"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-02-2018"
category: "front-end"
description: "what is react fragments?"
tags:
    - programming
    - front-end
    - react
---

React 16 allowed the components to return more than a single element, now components can return React Nodes. A React Node can be either:

* ReactElement: This is the primary type in React. It's a light, stateless, immutable, virtual representation of a DOM element.
* ReactText: This is a string or a number. It's a virtual representation of a Text Node in the DOM.
* ReactFragment: This is an array of ReactNode elements.

Prior to React 16, each component had to return a single element. But how do you handle the use cases where you need to return more than one element? Imagine you want to return the only the list items, the children, of the following list:

<style>
    .list-container {
        display: inline-block;
        list-style: none;
    }

    .list-item {
        padding: 12px;
        border: 1px solid gray;
        margin-top: 4px;
    }
    
    .parent-item {
        border: 1px solid gray;
        padding: 12px;
        clear: both;
    }
</style>

<span class="parent-item" style="margin-top: 5px;">Parent - div</span>
<ul class="list-container">
    <li class="list-item">List Item 1 - div</li>
    <li class="list-item">List Item 2 - div</li>
    <li class="list-item">List Item 3 - div</li>
</ul>
<p>
    <span class="parent-item">Parent - div</span>
</p>

In React 15 you have to return their parent as well, otherwise you'd face a syntax error message reminding you to wrap the JSX elements into an enclosing tag.

```jsx
render() {
    const { arr } = this.props;

    return (
        /* Return the items inside a wrapper element */
        <div className="wrapper">
            {arr.map((item, index) => (
                <div className="list-item" key={`it-${index}`}>{item.name}</div>
            ))}
        </div>
    )
}
```

In React 16 you can use fragments to return an array of elements:

```jsx
render() {
    const { arr } = this.props;

    return (
        <React.Fragment>
            {arr.map((item, index) => (
                <div key={`it-${index}`}>{item.name}</div>
            ))}
        </React.Fragment>
    )
}
```

## Fragment Attributes

A Fragment can only have a key attribute and children. All other attributes that will be added to a React.Fragment will throw the following warning message:

``Invalid prop {propName} supplied to React.Fragment. React.Fragment can only have key and children props.``

Also, a warning message will be thrown in case two or more children of the fragment will have the same key attribute.

``Encountered two children with the same key, {key}.``

## New Syntax

In case you don't need to pass any attributes/keys, you can use empty tags to indicate a fragment.

```jsx
render() {
    const { arr } = this.props;

    return (
        <>
            {arr.map((item, index) => (
                <div key={`it-${index}`}>{item.name}</div>
            ))}
        </>
    )
}
```

## Conclusion

In conclusion I will answer why to use a React.Fragment. The reason of using React.Fragment is because it wraps an array of React Nodes without adding extra elements to DOM. Using fragments you results a smaller DOM tree.

<a href="/react-api">Back to API</a>