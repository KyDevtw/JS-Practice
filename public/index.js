const count = document.getElementById('count')
// 取得檔案內id為count的標籤

count.addEventListener('click', function () {
  count.innerText = Number(count.innerText) + 1
})
// addEventListener增加事件監聽者,第一個值為事件動作,第二個為函式
// html只有唯一資料類型為字串
// 透過Number()將字串轉為數字
// js回傳給html時會自動轉為字串回傳

const countable = document.getElementById('countable')
// 取得檔案內id為count的標籤

countable.innerText = 999

// button
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const theCount = document.getElementById('theCount')

add.addEventListener('click', function () {
  theCount.innerText = Number(theCount.innerText) + 1
})

sub.addEventListener('click', function () {
  theCount.innerText = +theCount.innerText - 1
})

const money = document.getElementById('money')
const twd2usd = document.getElementById('twd2usd')
const usd2twd = document.getElementById('usd2twd')
const moneyEX = document.getElementById('moneyEX')

// USD 2 TWD
// 1 USD 美金 = 28.53 TWD 新台幣
usd2twd.addEventListener('click', function () {
  // 1. 先運算好
  const finalResult = (Number(money.value) * 28.53).toFixed(0)
  // .value常用在表單上取表單上的值
  // numer.toFixed()可以決定小數點後留幾位,四捨五入,()等於(0)
  // 2. 再呈現在網頁上
  moneyEX.innerText = '美金->新台幣: ' + finalResult
})

twd2usd.addEventListener('click', function () {
  // 1. 先運算好
  const finalResult = (Number(money.value) / 28.53).toFixed(2)
  // numer.toFixed()可以決定小數點後留幾位,四捨五入,()等於(0)
  // 2. 再呈現在網頁上
  moneyEX.innerText = '新台幣->美金: ' + finalResult
})

// 獲取元件介面物件
// input
const bodyHeight = document.getElementById('bodyHeight')
const bodyWeight = document.getElementById('bodyWeight')
// button
const calculate = document.getElementById('calculate')
// h1
const bmiText = document.getElementById('bmiText')

// 處理按鈕按下事件
// BMI = 體重(公斤) / 身高(公尺平方)
// 身高的平方公尺：Math.pow(height/100, 2)
calculate.addEventListener('click', function () {
  // 1. 先得到身高和體重的數字值
  const h = +bodyHeight.value
  const w = +bodyWeight.value

  // 2. 計算bmi值, BMI = 體重(公斤) / 身高(公尺平方)
  const bmi = w / Math.pow(h / 100, 2)

  // 3. 呈現在網頁上(保留一位小數點)
  bmiText.innerHTML = bmi.toFixed(1)

  // // 以上三點寫在一起
  // bmiText.innerHTML = (
  //   +bodyWeight.value / Math.pow(+bodyHeight.value / 100, 2)
  // ).toFixed(1)
})
