const testcases = [121, -121, 10, -101];

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  let value = x;
  let rev = 0;

  while (value >= 1) {
    value = parseInt(value / 10);
    rev = rev * 10 + ( value % 10);
  }

  return rev === x;
};

// const isPalindrome = (x) => {
//   return x + "" === [...(x + "")].reverse().join("");
// };

testcases.forEach((input) => {
  console.log(input, isPalindrome(input));
});
