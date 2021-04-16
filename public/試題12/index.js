// 取得介面
const teaText = document.getElementById('tea-text')
const teaRed = document.getElementById('tea-red')
const teaGreen = document.getElementById('tea-green')
const sugarText = document.getElementById('sugar-text')
const sugarNormal = document.getElementById('sugar-normal')
const sugarHalf = document.getElementById('sugar-half')
const iceText = document.getElementById('ice-text')
const iceNormal = document.getElementById('ice-normal')
const iceHalf = document.getElementById('ice-half')
const countText = document.getElementById('count-text')
const addOne = document.getElementById('add-one')
const subOne = document.getElementById('sub-one')
const addOrder = document.getElementById('add-order')
const resetOrder = document.getElementById('reset-order')
const orderList = document.getElementById('order-list')
const orderTotal = document.getElementById('order-total')

const teaSelect = 0
teaRed.addEventListener('click',function(event){
    teaSelect = 1
})
teaGreen.addEventListener('click', function (event) {
  teaSelect = 2
})
