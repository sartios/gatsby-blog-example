---
title: "Firebase Console Setup"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-03-2018"
category: "main"
description: "firebase console setup"
tags:
    - programming
    - front-end
    - react
---

In this post you are going to explore how to configure and initialize your React on Firebase application. As prerequisite the React application should already be initialized. If not, you can use create-react-app to generate a React application.

Integrating Firebase into your React application, you will need:

* Firebase project,
* Firebase SDK and
* initialization code snippet

### Create Firebase Project

To create a Firebase project navigate to <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>, sign in with a Google account and `Add project`.

### Install Firebase SDK

The Firebase SDK is available on npm:

`npm install firebase --save`

You should navigate at your React app and install the Firebase SDK.

### Initialize Firebase App

The initialization code snippet is application specific. You have to navigate on your Firebase app and click at `Add Firebase to your web app`. A configuration object will be generated:

```javascript
const config = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "https://<YOUR-DATABASE-NAME>.firebaseapp.com",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>.appspot.com",
  messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>"
};
```

Keep in mind that you should not expose this information, they should remain private.

Create a file `firebase.js` to initialize the Firebase application.

```javascript
import * as firebase from "firebase";

const config = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "https://<YOUR-DATABASE-NAME>.firebaseapp.com",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>.appspot.com",
  messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>"
};

const app = firebase.initializeApp(config);

export default app;
```

This file should remain private and imported where you need to use firebase services.

### Conclusion

First step on the integration of a Firebase app in a React app is the initialization. After that, you can access the multiple Firebase services.

Next, you are going to explore how to authenticate users with Firebase Authentication service.

<div class="post-btns-container">
<a class="btn-flatmaterial" href="/react-on-firebase">
  <i class="fas fa-angle-left"></i>
  Back to main
</a>
<a class="btn-material next-btn" href="/firebase-authentication">
  Authentication
  <i class="fas fa-angle-right"></i>
</a>
</div>
