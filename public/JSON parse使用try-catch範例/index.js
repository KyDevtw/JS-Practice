const a = '{"abbb": 1}'
console.log(a)

let result = ''

try {
  // JSON.parse會導致中斷錯誤，要用try-catch語句來測試\
  // 如果try中的程式無法執行,會跳catch執行
  // try中的錯誤不會中斷程式運行
  result = JSON.parse(a)
} catch (error) {
  console.log(error)
}

console.log(result)

console.log(123)
