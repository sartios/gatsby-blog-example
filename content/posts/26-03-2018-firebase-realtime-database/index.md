---
title: "Firebase Realtime Database"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-03-2018"
category: "main"
description: "firebase authentication"
tags:
    - programming
    - front-end
    - react
---

Data is stored as JSON and synchronized to every connected client.

Declarative Language:

1. how your data should be structured
2. how it should be indexed
3. when data can be read from and written to

By default, read and write access is restricted.

The data it is a JSON tree, a cloud hosted JSON tree.

### Best practices

#### Avoid nesting data

Max. depth 32 levels

fetch data from a location => retrieve its children

Keep your data as flat as possible.

#### Flatten data structures

Denormalize your data

Think of getting the parts as separate calls

### API

To read and write data you need to attach an asynchronous listener to firebase.database.Reference.

Triggered:

1. retrieve the initial state
2. anytime the data changes

#### Create

set() add or replace

#### Read

To read data, on() and once()

on() -> read once and each time data changes
once() -> read once

#### Update

update() -> update specific child nodes

#### Delete

remove() -> remove a child node

#### Detach listeners

off()

#### Transactions

transaction()

#### Offline

Every client connected to a Firebase database maintains its own internal version of any active data. When data is written, it's written to the local version first. The Firebase client then synchronizes that data with the remote database and the other clients.
