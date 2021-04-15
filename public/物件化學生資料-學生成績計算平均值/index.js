window.document.body.style.fontSize = 'large'

// CSV檔的內容
const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"陳小草",0,46,32
"李一百",100,60,85`

// 獲取dom元素介面物件
// table
const dataTable = document.getElementById('dataTable')

// 用分行符號取得多行陣列值
const rawDataArray = rawData.split('\n')

// 呈現標題
// headings = ["學生姓名", "國文", "數學", "英文"]
const headings = rawDataArray[0].replaceAll('"', '').split(',')

//使用for迴圈的語法

let headingDisplay = ''

for (let i = 0; i < headings.length; i++) {
  headingDisplay += `<th>${headings[i]}</th>`
}

dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`

/// 以下呈現學生資料

// 宣告學生空白陣列
const students = []



// 先物件化學生的資料
for (let i = 1; i < rawDataArray.length; i++) {
  // ex. `"陳小花",90,65,77`
  const rows = rawDataArray[i].replaceAll('"', '').split(',')
  // rows = ['陳小花', 90, 65, 77]

  // 建立學生物件
  const student = {
    name: rows[0],
    // 透過加號將數字字串轉成數字
    chinese: +rows[1],
    math: +rows[2],
    english: +rows[3],
  }

  // 放入學生陣列中
  students.push(student)
}

//console.log(students)

// 呈現字串
let bodyDisplay = ''
// 三科加總
let chineseTotal = 0
let mathTotal = 0
let englishTotal = 0

for (let i = 0; i < students.length; i++) {
  bodyDisplay += `<tr>
                  <td>${students[i].name}</td>
                  <td>${students[i].chinese}</td>
                  <td>${students[i].math}</td>
                  <td>${students[i].english}</td>
                  </tr>`

  // 計算各科加總分(注意需為數字加總)
  chineseTotal += students[i].chinese
  mathTotal += students[i].math
  englishTotal += students[i].english
  // 把students陣列內的第幾項物件拿出來,.屬性是物件內的對應的屬性值提出
}

// 加入各科平均欄位
bodyDisplay += `<tr>
              <td>各科平均</td>
              <td>${(chineseTotal / students.length).toFixed(0)}</td>
              <td>${(mathTotal / students.length).toFixed(0)}</td>
              <td>${(englishTotal / students.length).toFixed(0)}</td>
              </tr>`
              // toFixed把浮點數修正成整數(括弧內表小數點留幾位數,四捨五入)

// 呈現在網頁上
dataTable.innerHTML += `<tbody>${bodyDisplay}</tbody>`

// 篩選功能

search.addEventListener("click", function () {
  // 得到查詢字串
  const nameSearchWord = searchWord.value;

  console.log(nameSearchWord);

  // 以姓名過濾出符合條件字串的資料
  // 透過function抓出陣列中的物件,再透過value指的是陣列中的值(在這裡是一個物件)
  // 再把物件中的name抓出來透過.includes抓到文字(searchWord的值)
  const newStudents = students.filter(function (value, index, array) {
    return value.name.includes(searchWord.value);
  });

  console.log(newStudents);
});

