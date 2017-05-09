'use strict'

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.
const getNormalizedWords = function (str) {
  const words = str.split(/\s+/)
  const normalizedWords = []

  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/\W+/, '')
    normalizedWords[i] = word.toUpperCase()
  }

  return normalizedWords
}

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (str) {
  const words = getNormalizedWords(str)

  const uniqueWordsAsKeys = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    uniqueWordsAsKeys[word] = true
  }

  return Object.keys(uniqueWordsAsKeys)
}

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
const wordCount = function (str, unique) {
  const getWords = unique ? getUniqueWords : getNormalizedWords
  return getWords(str).length
}

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount
}
