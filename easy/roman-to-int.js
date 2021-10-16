/*
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
*/

/**
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written as IV.
 * Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.
 * 
 * There are six instances where subtraction is used:
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 */

const testcases = [
  { input: "III", result: 3 },
  { input: "IV", result: 4 },
  { input: "IX", result: 9 },
  { input: "LVIII", result: 58 },
  { input: "MCMXCIV", result: 1994 },
];

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s = "") => {
  const nums = s.split("").map(i => romanMap[i])
    
  return nums.reduce((sum, current, index, arr) => {
    if (current < arr[index+1]) return sum - current
    else return sum + current
  }, 0)
};

testcases.forEach((input) => {
  console.table({
    input: romanToInt(input.input),
    answer: input.result,
  });
});
