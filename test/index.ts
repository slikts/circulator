import test from 'tape'
import { Circulator } from '../'

test('init Base', function (t: any) {
  const b = new Circulator([1,2,3])
  t.equal(b.size, 3)
  t.deepEqual([...b], [1,2,3])
  t.end()
})

test('cycle forward', function (t: any) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.next(), b.next(), b.next(), b.next()], [2, 3, 1, 2])
  t.end()
})

test('get current', function (t: any) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.step(0), b.next(), b.prev()], [1, 2, 1])
  t.deepEqual([b.next(), b.step(0), b.next()], [2, 2, 3])
  t.end()
})

test('cycle back', function (t: any) {
  const b = new Circulator([1,2,3])
  t.deepEqual([b.prev(), b.prev(), b.prev(), b.prev()], [3, 2, 1, 3])
  t.deepEqual([...b], [3, 1, 2])
  t.end()
})

test('cycle arrays', function (t: any) {
  const list = [1,2,3]
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [2,3,1,2,3,2])
  t.end()
})

test('cycle iterables', function (t: any) {
  const list = new Set([1,2,3])
  const b = new Circulator(list)
  t.deepEqual([b.next(),b.next(),b.next(),b.next(),b.next(),b.prev()], [2,3,1,2,3,2])
  t.end()
})

test('consume Circulator repeatedly', function (t: any) {
  const a = new Circulator([1,2,3])
  t.equal(new Set([[...a], [...a], [...a], [...a]].map(x => ''+x)).size, 1)
  t.end()
})
