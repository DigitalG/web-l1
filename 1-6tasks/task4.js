'use strict'

// fourth task

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function BinarySearch (array, number) {
  let L = 0
  let R = array.length - 1
  while (L <= R) {
    let m = Math.floor((R + L) / 2)
    if (array[m] < number) {
      L = m + 1
    } else if (array[m] > number) {
      R = m - 1
    } else {
      return m
    }
  }
  return NaN
}

console.log(BinarySearch(numbers, 5))
console.log(BinarySearch(numbers, 18))
