let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].length)
  }
  return result;
}

let wordArr = words.map(getWordLengths)

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
