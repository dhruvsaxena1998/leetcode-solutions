const testcases = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 6 },
];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const sol = target - nums[i];
    if (obj[sol] !== undefined && obj[sol] !== i) {
      return [obj[sol], i];
    }
    obj[nums[i]] = i;
  }
};

console.log(twoSum(testcases[0].nums, testcases[0].target)); // [0, 1]
console.log(twoSum(testcases[1].nums, testcases[1].target)); // [1, 2]
console.log(twoSum(testcases[2].nums, testcases[2].target)); // [0, 1]
