// leetcode 3096
/**
 *
 * 思路:
 */
function minimumLevels(possible: number[]): number {
  let A = 0;
  let count = 0;
  const total = possible.reduce((a, b) => a + (b ? 1 : -1), 0);
  // console.log(total);

  for (let i = 0; i < possible.length - 1; i++) {
    count++;
    A += possible[i] ? 1 : -1;
    if (A > total / 2) {
      return count;
    }
  }
  return -1;
}

// console.log(minimumLevels([1, 0, 1, 0]));
// console.log(minimumLevels([1, 1, 1, 1, 1]));
// console.log(minimumLevels([0, 0]));
console.log(minimumLevels([1, 1]));
