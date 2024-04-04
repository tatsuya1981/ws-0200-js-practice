/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const obj = {
    name: "Bob",
    age: 32,
    gender: "male",
  };
  return obj;
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  person["name"] = "Mary";
  person["age"] = 37;
  person["gender"] = "female";
  return person;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

/** 6.3の課題で最初に書いたコード
function assignNumber(persons) {
  const min = 1;
  const max = 10;
  let num = Math.floor(Math.random() * (max + 1 - min)) + min;
  for (i = 0; i < persons.length; i++) {
    let obj = Object.assign({}, persons, [num]);
    return obj;
  }
}
*/
function assignNumber(persons) {
  for (i = 0; i < persons.length; i++) {
    a = persons[i];
    b = { [a]: 1 };
    const min = 1;
    const max = 10;
    const num = Math.floor(Math.random() * (max + 1 - min)) + min;
    c = {
      [persons[0]]: num,
      [persons[1]]: num,
      [persons[2]]: num,
      [persons[3]]: num,
    };
    return c;
  }
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

const isDuplicate = (array) => {
  const set = new Set(array);
  return set.size !== array.length
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
};
