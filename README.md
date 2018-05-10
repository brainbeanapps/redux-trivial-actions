# redux-trivial-actions utility library by [Brainbean Apps](https://brainbeanapps.com)

[![Build Status](https://img.shields.io/travis/brainbeanapps/redux-trivial-actions.svg)](https://travis-ci.org/brainbeanapps/redux-trivial-actions)
[![Coverage Status](https://img.shields.io/coveralls/github/brainbeanapps/redux-trivial-actions.svg)](https://coveralls.io/github/brainbeanapps/redux-trivial-actions?branch=master)
[![npm version](https://badge.fury.io/js/redux-trivial-actions.svg)](https://badge.fury.io/js/redux-trivial-actions)
[![Dependency Status](https://img.shields.io/librariesio/github/brainbeanapps/redux-trivial-actions.svg)](https://libraries.io/github/brainbeanapps/redux-trivial-actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7bc1d042685cb025fb9e/maintainability)](https://codeclimate.com/github/brainbeanapps/redux-trivial-actions/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/redux-trivial-actions.png?downloads=true)](https://nodei.co/npm/redux-trivial-actions/)

Objectified [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for Redux.

# Getting Started

## Installation

```bash
$ npm install --save redux-trivial-actions
```

or

```bash
$ yarn add redux-trivial-actions
```

## Usage

### `actions.js`

```js
import { createTrivialAction } from 'redux-trivial-actions'

export const demoAction = createTrivialAction('DEMO_ACTION')
```

### `reducer.js`

```js
import { demoAction } from './actions'

const initialState = { demoValue: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case demoAction.PERFORM:
      return { ...state, demoValue: true }
    default:
      return state
  }
}

export default reducer;
```

### `component.js`

```js
import { demoAction } from './actions'

// ...
dispatch(demoAction.perform())
// or
dispatch(demoAction())
// ...
```
