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

function personalData(name,tel){
    
}

const dataArray = []

// 將姓名電話取出
for (let i = 0; i < data.length; i++) {
  dataArray.unshift(data[i])
  
}
