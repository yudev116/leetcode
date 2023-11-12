/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x === 0) return true;

  // マイナス値
  if (Math.sign(x) === -1) return false;

  // 末尾が0
  const numStr = String(x);
  if (numStr[numStr.length - 1] === "0") return false;

  const reversedNum = parseInt(numStr.split("").reverse().join(""));

  return x === reversedNum;
}
// @lc code=end
