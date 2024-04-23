/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch(array, target) {
  findId = -1;
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return (findId = i);
    }
  }
  return findId;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch(array, target) {
  low = 0;
  high = array.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    result = array[mid];
    if (result === target) {
      return mid;
    } else if (result < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

module.exports = {
  linearSearch,
  binarySearch,
};
