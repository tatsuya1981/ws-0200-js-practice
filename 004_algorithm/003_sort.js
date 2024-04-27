/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = array.length; i < j; j--) {
      if (array[j - 1] > array[j]) {
        let tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let tmp = array[i];
    while (j >= 0 && array[j] > tmp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = tmp;
  }
  return array;
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeArr(mergeSort(left), mergeSort(right));
}

function mergeArr(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result;
}

/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort(a, start = 0, end = a.length - 1) {
  if (start >= end) {
    return a;
  }
  const pivotNum = Math.floor((start + end) / 2);
  const pivot = a[pivotNum];
  let left = start;
  let right = end;

  while (left <= right) {
    while (a[left] < pivot && left <= end) {
      left++;
    }
    while (a[right] > pivot && right >= start) {
      right--;
    }
    if (left <= right) {
      const temp = a[left];
      a[left] = a[right];
      a[right] = temp;
      left++;
      right--;
    }
  }
  if (start < left - 1) {
    quickSort(a, start, right);
  }

  if (right + 1 < end) {
    quickSort(a, left, end);
  }
  return a;
}

module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
};
