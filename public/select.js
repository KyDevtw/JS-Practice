const year = document.getElementById('year')

// 選擇的值
let selectedYear = 0 //相當於請選擇

// 準備要呈現的年字串
let yearOptions = '<option value="0">請選擇</option>'

// 產生選項，西元年1960~2010
for (let i = 1960; i < 2011; i++) {
  // yearOptions += '<option value="' + i + '">' + i + '</option>'
  yearOptions += `<option value="${i}">${i}</option>`
}

// 呈現字串
year.innerHTML = yearOptions

year.addEventListener('change', function () {
  selectedYear = year.value
  console.log(selectedYear)
})

const month = document.getElementById('month')

// 選擇的值
let selectedMonth = 0 //相當於請選擇

// 準備要呈現的年字串
let monthOptions = '<option value="0">請選擇</option>'

// 產生選項
for (let i = 0; i < 13; i++) {
  monthOptions += `<option value="${i}">${i}</option>`
}

// 呈現字串
month.innerHTML = monthOptions

month.addEventListener('change', function () {
  selectedMonth = month.value
  console.log(selectedMonth)
})

const day = document.getElementById('day')

// 選擇的值
let selectedDay = 0 //相當於請選擇

// 準備要呈現的年字串
let dayOptions = '<option value="0">請選擇</option>'

// 產生選項
for (let i = 0; i < 32; i++) {
  dayOptions += `<option value="${i}">${i}</option>`
}

// 呈現字串
day.innerHTML = dayOptions

day.addEventListener('change', function () {
  selectedDay = day.value
  console.log(selectedDay)
})