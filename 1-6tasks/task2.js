'use strict'

// second task
function StrContains (pattern, text) {
  if (pattern.length === 0) {
    return 0
  }

  let lsp = [0]
  for (let i = 1; i < pattern.length; i++) {
    let j = lsp[i - 1]
    while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
      j = lsp[j - 1]
    }
    if (pattern.charAt(i) === pattern.charAt(j)) {
      j++
    }
    lsp.push(j)
  }

  let j = 0
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
      j = lsp[j - 1]
    }
    if (text.charAt(i) === pattern.charAt(j)) {
      j++
      if (j === pattern.length) {
        return i - (j - 1)
      }
    }
  }
  return -1
}

let Text = 'ABCDEFGH'
let MatchingPattern = 'CDEF'
let RandomString = 'AEFGH'
console.log(StrContains(MatchingPattern, Text))
console.log(StrContains(RandomString, Text))
