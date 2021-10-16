/*
 * Given a string *rjoooojkkuauulmll*. Calculate the character with it's continous pair count.
 *
 * Input: rjoooojkkuauulmll
 * Output :
 * {
 *  o: 2,
 *  k: 1,
 *  u: 1,
 *  l: 1
 * }
 */

const getContinousPairs = (str) => {
  // convert string to array of characters
  const characters = str.split("");

  // create a map to save pairs and it's count
  const pairs = new Map();
  
  for (let i = 0; i < characters.length;) {
    if (characters[i] === characters[i + 1]) {
      if (pairs.has(characters[i]))
        pairs.set(characters[i], pairs.get(characters[i]) + 1);
      else pairs.set(characters[i], 1);

      i += 2;
    } else {
      i += 1;
    }
  }

  return pairs;
};

console.log(getContinousPairs("rjoooojkkuauulmll"));
