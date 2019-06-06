'use strict'

// first task

function StringToArray (string) {
  let result = []
  let start = 0
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ' ' && start !==-1) {
      result.push(string.slice(start, i))
      start = -1
    }

    if(string[i+1] !== ' ' && start === -1){
        start = i + 1
      }
  }
  result.push(string.slice(start, string.length))
  return result
}

var MyString = 'one two   three   four'
console.log(MyString)
console.log(StringToArray(MyString))
