---
title: "React Lerna Monorepos"
cover: "https://unsplash.it/400/300/?random?BoldMage"
date: "26-03-2018"
category: "main"
description: "react lerna monorepos"
tags:
    - programming
    - front-end
    - react
---

Microservices achitecture is currently getting a lot of attention. Many projects use this style in the last few years with positive results.

In short, an application will consist of a suite of small services with each service run on its own process and been deployed independently.

Martin Fowler's Definition

The microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms. These services are built around business capabilities and independently deployable by fully automated deployment machinery.

In action: Break and distribute your application in modules.

Microservices Pros:

1. Technical flexibility.
2. Separation among the teams.
3. Deploy each module in isolation.
4. Easier migration to newer technologies.
5.

Solve modularity problems.

Modular: each feature is a standalone package.

Monorepo one repo many packages 1-many

Monorepos can simplify the development process of modular software projects

Lerna help to streamline the npm publishing workflow of Monorepo based projects

Monorepos vs Manyrepos

Monorepo definition: A single repository that holds the code of multiple projects which may or may not be related in some way.

Monorepo Cons

1. Learning curve
2. Source control system limitations
3. Migration to existing build process
4. Can not limit access to specific packages

Monorepo Pros

1. Reduce the maintaining overhead of maintaining a large amount of small package in separate repos
2. Reduce repeated boilerplate code like building and testing
3. Easily share and reuse code over multiple projects
4. Large scale refactoring > one PR
5. Easier collaboration > bugs affect diff projects one PR
6. Proved that it scales (Babel, Jest, Facebook)
7. Simplified organization
8. Easier to setup a dev environment
9. Better tooling support (static analysis, code search)

Manyrepos Pros

1. Give access to specific packages only NOT all the source
2. Each repo has its own process of being deployed

Manyrepos Cons

1. Clone each repo
2. Maintain each repo (maintain releases)
3. Commit to each repo
   meta to the rescue > git commands executed @ many repos > but not proved that is scaled
4. Complicated organization

Lerna cmd

1. lerna init > lerna.json, versioning
2. lerna import > import existing repos to lerna
3. lerna bootstrap > resolves dependencies, symlink
4. lerna publish > publish to npm
