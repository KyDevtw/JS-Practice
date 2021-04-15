// csv檔內的內容
// ` `重音符號是唯一具有換行功能的文字符號
const rowData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

// table
const dataTable = document.getElementById('dataTable')

// 用split找出換行符號(\n)取得多行陣列切開成為新陣列
const rowDataArray = rowData.split('\n')

// replaceAll取代(")為空白字元分割成新的陣列,再用split以逗號切開成為新陣列
const headingArray = rowDataArray[0].replaceAll('"', '').split(',')

let headingDisplay = ''

for (let i = 0; i < headingArray.length; i++) {
  headingDisplay += `<th>${headingArray[i]}</th>`
}

// 呈現標題
dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`

// 呈現資料
let bodyDisplay = ''

for (let i = 1; i < rowDataArray.length; i++) {
  // ex. `"陳小花",90,65,77`
  const rows = rowDataArray[i].replaceAll('"', '').split(',')

  bodyDisplay += `<tr>`
  //會分行的原因是因為前面就已經把每個同學的資料切成array中的array
  for (let j = 0; j < rows.length; j++) {
    bodyDisplay += `<td>${rows[j]}</td>`
    // bodyDiplsy = '<tr><td>陳小花</td>'
    // bodyDiplsy = '<tr><td>陳小花</td><td>90</td>'
    // bodyDiplsy = '<tr><td>陳小花</td><td>90</td><td>65</td>'
    // bodyDiplsy = '<tr><td>陳小花</td><td>90</td><td>90</td><td>77</td>'
  }

  bodyDisplay += `</tr>`
  // bodyDiplsy = '<tr><td>陳小花</td><td>90</td><td>90</td><td>77</td></tr>'
}

dataTable.innerHTML += `<tbody>${bodyDisplay}</tbody>`
