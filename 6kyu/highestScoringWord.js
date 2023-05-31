// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const wordWorth = {};
  const wordArr = x.split(" ");

  for (let word of wordArr) {
    const letterValue = [];
    const letterArr = word.split("");
    letterArr.map((letter) => {
      letterValue.push(letter.charCodeAt(0) - 96);
    });
    const wordScore = letterValue.reduce((acc, value) => acc + value, 0);
    wordWorth[word] = wordScore;
  }

  const highestWord = Object.entries(wordWorth).reduce((maxEntry, entry) => {
    if (entry[1] > maxEntry[1]) {
      return entry;
    } else {
      return maxEntry;
    }
  })[0];

  return highestWord;
}

