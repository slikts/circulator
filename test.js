'use strict'

const test = require('tape')
const {Circulator} = require('./')

test('init Base', function (t) {
  const b = new Circulator([1,2,3])
  t.equal(b.size, 3)
  t.deepEqual([...b], [1,2,3])
  t.end()
})

test('cycle forward', function (t) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.next(), b.next(), b.next(), b.next()], [2, 3, 1, 2])
  t.end()
})

test('get current', function (t) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.step(0), b.next(), b.prev()], [1, 2, 1])
  t.deepEqual([b.next(), b.step(0), b.next()], [2, 2, 3])
  t.end()
})

test('cycle back', function (t) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.prev(), b.prev(), b.prev(), b.prev()], [3, 2, 1, 3])
  t.deepEqual([...b], [3, 1, 2])
  t.end()
})

test('cycle arrays', function (t) {
  const list = [1,2,3]
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [2,3,1,2,3,2])
  t.end()
})

test('cycle iterables', function (t) {
  const list = new Set([1,2,3])
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [2,3,1,2,3,2])
  t.end()
})

test('empty params', function (t) {
  t.ok(new Circulator())
  t.end()
})

test('consume Circulator repeatedly', function (t) {
  const a = new Circulator([1,2,3])
  t.equal(new Set([[...a], [...a], [...a], [...a]].map(x => ''+x)).size, 1)
  t.end()
})
