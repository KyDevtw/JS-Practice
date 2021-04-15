const menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < menuItems.length; i++) {
  // .classList.add(classname)新增class屬性
  // childNodes是往子節點作用數字表示第幾個
  // menuItems被一個一個抓出來掛事件監聽器
  menuItems[i].addEventListener('mouseenter', function (event) {
    event.target.childNodes[1].classList.add('enter')

    console.log('mouseenter', event.target.innerText)
  })
  // .classList.remove(classname)移除class屬性
  menuItems[i].addEventListener('mouseleave', function (event) {
    event.target.childNodes[1].classList.remove('enter')

    console.log('mouseleave', event.target.innerText)
  })
}
