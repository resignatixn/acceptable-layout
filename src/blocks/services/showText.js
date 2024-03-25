const showTextBtn = document.querySelector('.about__show--more ')
const hiddenText = document.querySelector('.about__text--hidden')

showTextBtn.addEventListener('click', function () {
  hiddenText.classList.toggle('about__text--hidden')
  showTextBtn.classList.toggle('rotate')

  let text = showTextBtn.textContent

  if (text === 'Читать далее') {
    showTextBtn.textContent = 'Скрыть'
  } else {
    showTextBtn.textContent = 'Читать далее'
  }
})
