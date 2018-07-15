[![Build Status][build-status-image]][build-status-url]
[![Dev Dependencies][dependency-status-image]][dependency-status-url]
[![NPM Version][npm-version-image]][package-url]
[![License][license-image]][license-url]

# Circulator

[![Greenkeeper badge](https://badges.greenkeeper.io/slikts/circulator.svg)](https://greenkeeper.io/)

Circular iteration for a list of values; step forward or backward with a simple API. Lightweight, ES2015 generator-based implementation.

## Installation

`npm install --save circulator`

## Usage

```js
const { Circulator } = require('circulator')

const c = new Circulator(['A', 'B', 'C'])

// Methods
c.current() // -> 'A'
c.next()    // -> 'B'
c.step(2)   // -> 'A' (wrap to start)
c.prev()    // -> 'C' (wrap to end)
c.step(-1)  // -> 'B'

// Properties
c.size // -> 3
c.cycle // The generator used for cycling

// Consuming the circulator returns elements starting from the current (last returned) position
[...c] // -> ['b', 'c', 'a']
```

The basic generator object can be used separately:
```js
const { Cycle } = require('circulator')
const g = Cycle([1, 2, 3])
g.next().value // -> 1
```

## Notes

 * Includes TypeScript type definitions
 * Requires [ES2015 generator support][kagax-es6-generators] to run without Babel (Node.js >= 5.x)

[license-url]: LICENSE
[license-image]: http://img.shields.io/npm/l/circulator.svg
[package-url]: https://npmjs.com/package/circulator
[npm-badge-png]: https://nodei.co/npm/circulator.png
[npm-version-image]: https://img.shields.io/npm/v/circulator.svg
[kagax-es6-generators]: https://kangax.github.io/compat-table/es6/#test-generators
[build-status-url]: https://travis-ci.org/slikts/circulator
[build-status-image]: https://travis-ci.org/slikts/circulator.svg?branch=master
[dependency-status-url]: https://david-dm.org/slikts/circulator#info=devDependencies
[dependency-status-image]: https://david-dm.org/slikts/circulator/dev-status.svg
