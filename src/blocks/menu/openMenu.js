const menuOpenBtn = document.querySelector('.header__menu')
const menuCloseBtn = document.querySelector('.menu__button')
const menu = document.querySelector('.menu')
const bg = document.querySelector('.menu-bg')

menuOpenBtn.addEventListener('click', function () {
  menu.classList.toggle('menu--active')
  bg.classList.toggle('menu-bg--active')
})

menuCloseBtn.addEventListener('click', function () {
  menu.classList.toggle('menu--active')
  bg.classList.toggle('menu-bg--active')
})

bg.addEventListener('click', function () {
  menu.classList.toggle('menu--active')
  bg.classList.toggle('menu-bg--active')
})

window.addEventListener('resize', function () {
  menu.classList.remove('menu--active')
  bg.classList.remove('menu-bg--active')
})
