// 執行順序

// js 單執行緒
// 一次只能執行一件事

function first() {
  console.log('first')
}

function second() {
  console.log('second')

  // API GET DATA (用 AJAX 技術 去呼叫後端伺服器的 API)
  // 不一定馬上回傳資料
  // 程式會先把這段先丟給 webapi 處理
  // 處理完進入task queue列隊等待返回js
  // 非同步取得資料資料fetch
  fetch('./3.callback.json')
    .then((result) => result.json())
    .then((jsonData) => {
      // js處理完之後才會呼叫返回
      console.log('jsonData', jsonData)
      third(jsonData)
    })

  console.log('second-2')
}

function third(jsonData) {
  console.log('third')
  let p = document.getElementById('myData')
  p.innerHTML = jsonData.key1
}

function forth(jsonData) {
  console.log('forth')
  let p = document.getElementById('myData2')
  p.innerHTML = jsonData.key2
}

first()

// 把 function2放到function1參數裡面傳進去
// 讓function1知道執行完之後要呼叫(call)function2
second(third)
second(forth)

// third();
