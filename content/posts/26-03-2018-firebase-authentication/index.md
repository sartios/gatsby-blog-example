---
title: "Firebase Authentication"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-03-2018"
category: "main"
description: "firebase authentication"
tags:
    - programming
    - front-end
    - react
---

Firebase Auth offers multiple methods to authenticate your users. It provides backend services, easy to use SDKs and ready made UI to authenticate users to your app.

You can sign in users to your Firebase app either by using FirebaseUI as a complete drop-in auth solution or by using the Firebase Authentication SDK to manually integrate one or several sign-in methods into your app. Standards like OAuth 2.0 and OpenID Connect are supported out of the box.

### Email Password Authentication

To sign in a user with email and password:

```javascript
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(user => {
    // ...
  })
  .catch(error => {
    const { code, message } = error;
    // ...
  });
```

To sign up a user with email and password:

```javascript
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(user => {
    // ...
  })
  .catch(function(error) {
    const { code, message } = error;
  });
```
