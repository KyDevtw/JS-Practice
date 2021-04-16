/* 
name:張小花  tel:02-29879998
name:吳阿寶  tel:02-29871172
name:陳天才  tel:02-29679991
*/

const data = [
  { name: '張小花', tel: '02-29879998' },
  { name: '吳阿寶', tel: '02-29871172' },
  { name: '陳天才', tel: '02-29679991' },
]
//取得介面
const dataTable = document.getElementById('dataTable')

// 將資料轉為字串
const dataString = data.join()

// 將字串轉為三個陣列
const dataArray = dataString.split(',')


let tableData = ''

for (let i = 0; i < dataArray.length; i++) {
  tableData += `<tr><th>${dataArray[i]}</th><tr>`
}

// 呈現資料
dataTable.innerHTML = tableData