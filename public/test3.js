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

// 呈現標題
dataTable.innerHTML = `<thead><tr><th>Name</th><th>Tel</th></tr></thead>`

let tableData = ''

for (let i = 0; i < data.length; i++) {
  tableData += `<tbody><tr><td> ${data[i].name} </td><td> ${data[i].tel} </td><tr></tbody>`
}

// 呈現資料
dataTable.innerHTML += tableData
