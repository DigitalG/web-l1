'use strict'

// fifth task

console.log('Fifth task:')
let array = [new Date('September 12, 2017 11:10:11'),
  new Date('Oct 1, 2018 01:15:05'),
  new Date('Jan 6, 2018 15:43:09')]

function GetMaxDate (array) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i].getTime() > max.getTime()) {
      max = array[i]
    }
  }
  return max
}

console.log(GetMaxDate(array))
