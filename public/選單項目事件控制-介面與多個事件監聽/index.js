const menuItems = document.getElementsByClassName('menu-item')

// event是事件元素
// this是指觸發的對象,所以以下的this=event.target
// 理解方式,程式一打開就再跑迴圈,所以就會將menuItems的偽陣列一個一個抓出來掛上event
// event.target是讓程式知道事件的目標對象
// mouseenter在監聽後會執行後續的程式碼
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', function (event) {
    console.log(event.target.innerText)
    console.log(this.innerText)
  })
}
