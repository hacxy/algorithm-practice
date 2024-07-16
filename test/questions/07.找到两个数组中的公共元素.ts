// leetcode 2956
function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const answer1 = nums1.reduce((preValue, currentValue) => preValue + (set2.has(currentValue) ? 1 : 0), 0);
  const answer2 = nums2.reduce((preValue, currentValue) => preValue + (set1.has(currentValue) ? 1 : 0), 0);
  return [answer1, answer2];
}

console.log(findIntersectionValues([2, 3, 2], [1, 2]));
