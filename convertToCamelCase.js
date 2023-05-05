function toCamelCase(str) {
  // if empty str, return empty str
  if (str == "") {
    return "";
  } else {
    // split into array at delimiters
    const wordArr = str.split(/[-_]/);
    // check if 1st word uppercase
    if (wordArr[0][0] === wordArr[0][0].toUpperCase()) {
      const pascalCase = wordArr
        .map((word, index) => {
          // keep first word as is
          if (index === 0) {
            return word;
          } else {
            // convert the rest
            return word[0].toUpperCase() + word.substring(1);
          }
        })
        .join("");
      return pascalCase;
    } else {
      const camelCase = wordArr
        .map((word, index) => {
          if (index === 0) {
            return word
          } else {
            return word[0].toUpperCase() + word.substring(1);
          }
        })
        .join("");
      return camelCase;
    }
  }
}

toCamelCase("");
toCamelCase("the_stealth_warrior");
toCamelCase("The_stealth_warrior");
toCamelCase("A-B-C");
