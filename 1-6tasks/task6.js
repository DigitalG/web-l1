'use strict'

// sixth task

function BubbleSort(array) {
  let n = array.length
  while (n >= 1) {
    let newn = 0
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]] // swap
        newn = i
      }
    }
    n = newn
  }
  return array
}

let array = [5, 7, 1, 3, 4, 8, 9, 0]
console.log(BubbleSort(array))
