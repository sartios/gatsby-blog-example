---
title: "React Container and Presentational Components"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "07-03-2018"
category: "front-end"
description: "react container and presentational components"
tags:
    - programming
    - front-end
    - react
---

Presentational and Container components is a React pattern to organize your components hierarchy. Separation of concerns and reusability are two important issues to take care of in order to scale your application.

## Presentational Components

The responsibility of presentational components is how the things look. Your DOM markup and the styles for it lives inside a presentational component.

The data your presentational component will display are injected through props from its parent. As props, you will pass the callbacks that should be invoked for accomplishing various tasks.

A presentational component should be as simple and as de-coupled of your application's architecture as possible. This means that should not have dependencies to Flux, Redux, GraphQL, etc and avoid the internal state if it is possible.

## Container Components

The responsibility of container components is how the things work and they are coupled with your architecture's dependencies.

A container component should not have markup or styles, this is a task for a presentational component.

You can imagine a container component as a data source for a presentational component. Its job is to feed data and callbacks to the presentational component.

## Workflow

In the next chapter, we are going to introduce Redux into our application, so I will speak in Redux terms. Though what is true about Redux, the same are true about Flux, GraphQL, etc.

So the workflow is the following:

1. Create a presentational component that displays data and invoke callbacks injected props.
2. Describe the redux store and the actions to update it.
3. Create a container component, read redux store and pass down to the presentational data and callbacks.

## Conclusion

The pattern of container components offers separation of concerns and reusability. You will use this pattern a lot when externalizing your application's state to Redux or Flux stores.

Next, we are going to explore how to integrate Redux into our application.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-components-tutorial">
  <i class="fas fa-angle-left"></i>
  React Components
</a>
<a class="btn-material next-btn" href="/react-complex-state-management">
  React Complex State Management
  <i class="fas fa-angle-right"></i>
</a>
</div>
