function pivotIndex(nums: number[]): number {
  const total = nums.reduce((prev, curr) => prev + curr);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left * 2 + nums[i] === total) return i;
    left += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
