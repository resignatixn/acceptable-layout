const toggleButton = document.querySelector('.brands__button')
const expandButton = document.querySelector('.brands__button::before')
const elements = document.querySelectorAll('.brands__list .swiper-slide')

function applyClasses() {
  let hiddenElements = document.querySelectorAll('.brands__list .hidden')
  if (window.innerWidth >= 1120) {
    for (let i = elements.length - 1; i >= elements.length - 2; i--) {
      elements[i].classList.add('hidden')
    }
    for (let j = 0; j < elements.length - 2; j++) {
      elements[j].classList.remove('hidden')
    }
  } else {
    for (let k = elements.length - 1; k >= elements.length - 4; k--) {
      elements[k].classList.add('hidden')
    }
    for (let l = 0; l < elements.length - 4; l++) {
      elements[l].classList.remove('hidden')
    }
  }
  if (hiddenElements.length === 0) {
    toggleButton.textContent = 'Показать все'
    toggleButton.classList.remove('rotate')
  } else if (hiddenElements.length < 0) {
    toggleButton.textContent = 'Скрыть'
    toggleButton.classList.add('rotate')
  }
}

applyClasses()

window.addEventListener('resize', function () {
  applyClasses()
})

toggleButton.addEventListener('click', function () {
  let hiddenElements = document.querySelectorAll('.brands__list .hidden')
  if (window.innerWidth >= 1120) {
    if (hiddenElements.length > 0) {
      for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.remove('hidden')
      }
    } else {
      for (let i = elements.length - 1; i >= elements.length - 2; i--) {
        elements[i].classList.add('hidden')
      }
    }
  } else {
    if (hiddenElements.length > 0) {
      for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].classList.remove('hidden')
      }
    } else {
      for (let i = elements.length - 1; i >= elements.length - 4; i--) {
        elements[i].classList.add('hidden')
      }
    }
  }
  if (hiddenElements.length === 0) {
    toggleButton.textContent = 'Показать все'
    toggleButton.classList.remove('rotate')
  } else if (hiddenElements.length > 0) {
    toggleButton.textContent = 'Скрыть'
    toggleButton.classList.add('rotate')
  }
})
