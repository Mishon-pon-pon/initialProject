let countMergeSortFn = 0;
function mergeSort(array) {
  countMergeSortFn++;
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

let countMerge = 0;
function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    countMerge++;
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

const arr = [4, 2, 3, 1, 5, 2, 3, 7, 3, 234, 0, -1];
let sortedArray = mergeSort(arr);

console.log("sortedArray", sortedArray.join(", "));
console.log("arr.length", arr.length);
console.log("countMergeSortFn", countMergeSortFn);
console.log("countMerge", countMerge);
