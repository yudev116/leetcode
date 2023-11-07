/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const indexes = new Map();

  for (let index = 0; 0 < nums.length; index++) {
    const currentNum = nums[index];
    const diff = target - nums[index];

    if (indexes.has(diff)) {
      return [indexes.get(diff), index];
    }

    indexes.set(currentNum, index);
  }

  return [];
}
// @lc code=end
