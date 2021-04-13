// ES5的function寫法
function abc() {}

// ES6的function寫法
const abc2 = function (data) {
  console.log(data)
}

abc()
abc2()

// Arrow Function 把function省略跟函式內程式碼放在箭頭右邊
const abc3 = () => {
  console.log('abc3')
}
// 當參數只有一個時括號可以省略
const abc4 = (data) => {
  console.log('abc4', data)
}

// 省略括號寫法如下
const abc10 = (data) => {
  console.log('abc4', data)
}

abc4('hi')

// 多參數時括號不可省並用逗號隔開
const abc5 = (a, b) => {
  console.log('abc5', a + b)
}

abc5(10, 11)

const abc6 = function (a, b) {
  console.log('abc6', a + b)
}

abc6(10, 11)

// function的return
const abc7 = function (a, b) {
  // console.log('abc7', a+b);
  return a + b
}

// console.log('abc7', abc7(20,21));

let abc7Result = abc7(20, 21)
console.log('abc7Result', abc7Result)

// 箭頭函式的 return

const abc8 = (a, b) => {
  // console.log('abc7', a+b);
  return a + b
}

console.log('abc8', abc8(11, 11))

// 箭頭函式的 return 程式碼只有一行的時候可省略
// 不要加大括號
const abc9 = (a, b) => a + b

console.log('abc9', abc9(11, 11))
