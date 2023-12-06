let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      result.push(words[i])
    }
  }
  return result;
}


let filteredWords = words.filter(get5CharWords)

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
