/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function replaceRomanToInt(str: string): number {
  switch (str) {
    case "I": {
      return 1;
    }
    case "V": {
      return 5;
    }
    case "X": {
      return 10;
    }
    case "L": {
      return 50;
    }
    case "C": {
      return 100;
    }
    case "D": {
      return 500;
    }
    case "M": {
      return 1000;
    }
    default: {
      return 0;
    }
  }
}

function isSubtractionTarget(str: string): boolean {
  switch (str) {
    case "IV":
    case "IX":
    case "XL":
    case "XC":
    case "CD":
    case "CM": {
      return true;
    }
    default: {
      return false;
    }
  }
}

function romanToInt(str: string): number {
  if (str.length === 1) {
    return replaceRomanToInt(str);
  }

  const intArr = str
    .split("")
    .reduce((acc: number[], currentStr, currentIndex): number[] => {
      if (
        acc.length !== 0 &&
        isSubtractionTarget(str[currentIndex - 1] + currentStr)
      ) {
        return acc;
      }

      if (isSubtractionTarget(currentStr + str[currentIndex + 1])) {
        const currentInt = replaceRomanToInt(currentStr);
        const nextInt = replaceRomanToInt(str[currentIndex + 1]);
        return [...acc, nextInt - currentInt];
      }

      return [...acc, replaceRomanToInt(currentStr)];
    }, []);

  return intArr.reduce((sum, item) => sum + item, 0);
}
// @lc code=end
