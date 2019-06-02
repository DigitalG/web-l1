'use strict'

// third task

function Factorial (int) {
  return int !== 1 ? int * Factorial(int - 1) : 1
}

console.log(Factorial(12))
