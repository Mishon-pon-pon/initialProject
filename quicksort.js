var items = [5, 3, 7, 6, 2, 9];

// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }

// function partition(items, left, right) {
//   var pivot = items[Math.floor((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //sawpping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort(items, left = 0, right = items.length - 1) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

/*****************************************/
let swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

let partition = (arr, low, high) => {
  let q = low,
    i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swap(arr, i, q);
      q++;
    }
  }
  swap(arr, i, q);
  return q;
};

let quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
};

const arr = quickSort(items);

console.log("arr", arr);
/*****************************************/

/**
 * 5, 3, 7, 6, 2, 9
 * 9 ->
 *
 */
