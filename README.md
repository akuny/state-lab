# State Lab

## Intent

This repository is a laboratory for DAWSON developers to try alternative
frontend state management implementations apart from the no-longer-maintained
[Cerebral](https://cerebraljs.com/) library using a stripped-down "Cerebral app"
as a functional baseline: every experimental implementation should work the same
from a user's point of view.

> **Note:**
> From this point forward, assume the term "Cerebral app" means "a React
> application that uses Cerebral for global state management".

## How to Start an Experiment

This repository contains a stripped-down React app that we can use as a template
to develop alternative implementations of the exact same functionality of the
Cerebral app. Just copy the experimental template and start trying out a new
approach!

Name your experiment something short and descriptive that communicates which
particular state management libraries/approaches/philosophies your experiment
uses. As an example, let's say we want to try out redux with thunks to handle
async work:

```bash
cp -r experiment-template redux-thunks
```

You will also need to create a new Webpack configuration file in the project
root to build and serve your experiment. In this case, we would create a file
called `webpack.redux-thunks.config.js`.

Next, define a constant in `shared/ports.js` and import into your Webpack
configuration file: that way we have an easy-to-reference registry of which
experiments use which ports. Here's how we would do that in our example:

```js
// shared/ports.cjs
module.exports = {
  // ...
  REDUX_THUNKS_PORT: 9999,
  // ...
};
```

```js
// webpack.redux-thunks.config.js
const { REDUX_THUNKS_PORT } = require('./shared/ports.js');
```

You can then add a script to the root directory's `package.json` to start your
experiment. For example:

```json
// package.json
"scripts": {
  // ...
  "start:redux-thunks": "webpack serve --config webpack.redux-thunks.config.js"
  // ...
},
```

All experiments use this file, so go ahead and `npm install` from the project's
root directory to install any dependencies you want to try out in your
experiment.

## What's Next?

1. Build out more complex functionality for the baseline Cerebral app. Ideally,
   we would create however many workflows it would take to account for all of
   the ways that DAWSON uses Cerebral so that our experiments comprehensively
   cover what we're currently using Cerebral for.

2. Start experimenting. What are some libraries/approaches/philosophies you'd
   like to try out? Everything is on the table at this stage, so go nuts.

3. Don't forget testing. While considering different approaches to state
   management, keep testing in mind.
