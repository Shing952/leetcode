/**
 * 二分搜索 从一个有序数组中搜索一个确定的数
 */
function BinarySearch(nums = [], target) {
  let len = nums.length;
  console.log(len);
  let left = 0;
  let right = len - 1;
  // 目标元素可能存在在区间 [left, right]
  while (left <= right) {
    // 推荐的写法是 int mid = left + (right - left) / 2;
    let mid = Math.floor((left + right) / 2);
    console.log(left <= right, left, mid, right);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      // 目标元素可能存在在区间 [mid + 1, right]
      left = mid + 1;
    } else {
      // 目标元素可能存在在区间 [left, mid - 1]
      right = mid - 1;
    }
  }
  return -1;
}

console.log(BinarySearch);
const arr = [1, 4, 6, 20, 99, 101, 102, 106];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(BinarySearch(arr, 102));
