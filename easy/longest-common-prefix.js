/*
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

const testcases = [
  { input: ["flower", "flow", "flight"], result: "fl" },
  {
    input: ["dog", "racecar", "car"],
    result: "",
  },
];

const longestCommonPrefix = (strs) => {
  if (strs.length === 1) return strs[0];

  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0][i];
    if (currentChar && strs.every((s) => s[i] === currentChar)) {
      prefix += currentChar;
    } else return prefix;
  }
  return prefix
};

testcases.forEach((input) => {
  console.table({
    answer: input.result,
    result: longestCommonPrefix(input.input),
  });
});
