'use strict'

const test = require('tape')
const {Circulator} = require('./lib')

test('init Base', function (t) {
  const b = new Circulator([1,2,3])
  t.equal(b.size, 3)
  t.deepEqual([...b], [1,2,3])
  t.end()
})

test('cycle arrays', function (t) {
  const list = [1,2,3]
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [1,2,3,1,2,1])
  t.deepEqual([...b], [1,2,3])
  t.end()
})

test('cycle iterables', function (t) {
  const list = new Set([1,2,3])
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [1,2,3,1,2,1])
  t.end()
})

test('empty params', function (t) {
  t.ok(new Circulator())
  t.end()
})
