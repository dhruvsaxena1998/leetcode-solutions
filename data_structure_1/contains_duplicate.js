const testcases = [
  [1, 2, 3, 1], // false
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  // (time-complexity) O(2n)
  // sort (loop)
  // loop
    // if

  // Runtime: 84 ms, faster than 79.53% of JavaScript online submissions for Contains Duplicate.

  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++)
    if (sorted[i] === sorted[i + 1]) return true;

  return false;
  // (time-complexity) O(n)
  // map
  // loop
    // if

  // Runtime: 80 ms, faster than 88.49% of JavaScript online submissions for Contains Duplicate.
  const map = {};
  for (let i = 0; i < nums.length; i++)
    if (map[nums[i]]) return true;
    else map[nums[i]] = 1;

  return false;
};

testcases.forEach((testcase) => {
  console.log(containsDuplicate(testcase));
});
