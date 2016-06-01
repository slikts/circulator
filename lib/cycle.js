'use strict'
/* eslint-disable no-constant-condition */

/**
 * Generator for cycling an array in both directions
 * @param  {Array} arr
 * @return {Generator}
 */
function* cycle(arr) {
  let i = 0
  while (true) {
    i = (i + (yield arr[i])) % arr.length
  }
}

module.exports = cycle
