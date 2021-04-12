// 獲取元素介面物件
// icon
const dice = document.getElementById('dice')
//button
const start = document.getElementById('start')
// point
const point = document.getElementById('point')

start.addEventListener('click', function () {
  // 1. 產生1-6隨機數
  const rand = Math.floor(Math.random() * 6) + 1
  // 1代表要開始的數字,6是總共6種情況
  // .floor傳回小於或等於指定數字的最大整數值。(地板運算)
  // 2. 對照fontawesome的圖示
  // switch 在case後的狀態下執行程式碼,用break終止
  // default 不需要break終止程式碼
  let diceType = ''

  switch (rand) {
    case 1:
      diceType = 'one'
      break
    case 2:
      diceType = 'two'
      break
    case 3:
      diceType = 'three'
      break
    case 4:
      diceType = 'four'
      break
    case 5:
      diceType = 'five'
      break
    case 6:
      diceType = 'six'
      break
    default:
      diceType = 'six'
    //   預設值是沒有滿足case的條件時的預設選項
  }

  // 3. 呈現圖示 & 點數
  // ex. <i class="fas fa-dice-one"></i>
  //dice.innerHTML = '<i class="fas fa-dice-' + diceType + '"></i>'

  // 樣版字串的寫法
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals
  dice.innerHTML = `<i class="fas fa-dice-${diceType}"></i>`
  //用樣板字串改變標籤內文字,用innerHTML抓到標籤做更動
  // 透過改變成程式碼去抓fontawesome的圖示代碼,改變icon

  // 點數
  point.innerHTML = rand + ' 點'
})
