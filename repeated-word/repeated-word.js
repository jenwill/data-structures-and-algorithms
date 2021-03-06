'use strict';

const words = module.exports = {};

words.repeatedWord = (inputString) => {
  const hashmap = {};

  const len = inputString.length;
  let currentWord = '';
  let currentChar = '';
  let charCount = 0;

  if (!inputString) {
    return 'Error: empty input string.';
  }
  currentChar = inputString[charCount].toLowerCase();

  while (charCount < len - 1) {
    while (!currentChar.match(/[a-zA-Z]/) && charCount < len - 1) {
      charCount += 1;
      currentChar = inputString[charCount].toLowerCase();
    }

    while (currentChar.match(/[a-zA-Z]/) && charCount < len - 1) {
      currentWord += currentChar;
      charCount += 1;
      currentChar = inputString[charCount].toLowerCase();
    }
    if (hashmap[currentWord]) {
      return currentWord;
    }
    hashmap[currentWord] = true;
    currentWord = '';
  }
  return 'No repeated words.';
};
