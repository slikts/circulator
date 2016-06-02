[![License][license-image]][license-url]

[![npm badge][npm-badge-png]][package-url]

# Circulator

Circular iteration based on a generator; allows consuming the iterator from the current position, making it simple to update the values. Tiny implementation.

```js
const {Circulator} = require('circulator')

const c = new Circulator(['a', 'b', 'c'])

// Methods
c.current() // -> 'a'
c.next()    // -> 'b'
c.step(2)   // -> 'a' (wrap to start)
c.prev()    // -> 'c' (wrap to end)
c.step(-1)  // -> 'b'

// Properties
c.size // -> 3
c.cycle // The generator used for cycling

// Consuming returns elements starting from the current (last returned) position
[...c] // -> ['b', 'c', 'a']

// Updating
[...new Circulator([...c].concat(1, 2))] // -> ['b', 'c', 'a', 1, 2]
```

The basic generator function can be used alone:
```js
const {cycle} = require('circulator')
cycle([1, 2, 3])
cycle.next().value // -> 1
```

[license-url]: LICENSE
[license-image]: http://img.shields.io/npm/l/circulator.svg
[package-url]: https://npmjs.com/package/circulator
[npm-badge-png]: https://nodei.co/npm/circulator.png
