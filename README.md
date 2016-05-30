[![view on npm](http://img.shields.io/npm/v/circulator.svg)](https://www.npmjs.org/package/circulator)

# Circulator

Circular iteration based on a generator; allows consuming the iterator from the
current position, making it easy to update. Tiny implementation.

```js
const {Circulator} = require('circulator')

const c = new Circulator([1, 2, 3])

// Basic methods
c.next() // -> 1
c.prev() // -> 3
c.step(2) // -> 2

// Properties
c.size // -> 3
c.cycle // The generator used for cycling

// Consuming returns elements starting from the current position
[...c] // -> [2, 3, 1]

// Updating
[...new Circulator([...c].concat('a', 'b'))] // -> [2, 3, 1, 'a', 'b']
```

The basic generator function can be used alone:
```js
const {cycle} = require('circulator')
cycle([1, 2, 3])
cycle.next().value // -> 1
```

## Installation

```
npm install circulator
```

## License

MIT
