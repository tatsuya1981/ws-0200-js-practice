/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
const helloWorld = () => {
  console.log('Hello World');
}

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
const displayConst = () => {
  const text = 'hoge';
  console.log(text);
}

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let text = 'hoge';
  console.log(text);
}

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  console.log(arg);
}

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a + b;
}

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  const num = a - b;
  return num;
}

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
    const num = a / b;
    const result = num|0;
    if(result === 0) {
      return null
    } else {
      return result;
    };
  }

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  const num = a * b;
  return num;
}

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  const num = a % 2;
  return num;
}

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  const num = a % 2;
  if(num === 0) {
    return true;
  } else {
    return false;
  };
}

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  let text = a + b;
  return text;
}

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
