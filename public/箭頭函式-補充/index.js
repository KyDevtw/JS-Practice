function addOuter(a, b) {
  return function () {
    return a + b
  }
}


// function expression
const addOuter1 = function (a, b) {
  return function () {
    return a + b
  }
}

// 肥箭頭左邊拿掉function,右邊直接寫入函釋內容,不加{}表示帶有return
const addOuter2 =  (a, b) => function () {
    return a + b
  }
// fucntion可以再簡寫成arrow function
const addOuter3 = (a, b) => () => a + b
