const modalOpenBtn = document.querySelector(
  '.menu__contact--button:nth-child(2)'
)
const modalOpenBtnTablet = document.querySelector(
  '.header__button:nth-child(2)'
)
const modalCloseBtn = document.querySelector('.modal-feedback__close')
const modalFeedback = document.querySelector('.modal-feedback')
const modalFeedbackBg = document.querySelector('.modal-feedback-bg')

modalOpenBtn.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-feedback--active')
  modalFeedbackBg.classList.toggle('modal-feedback-bg--active')
})

modalCloseBtn.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-feedback--active')
  modalFeedbackBg.classList.toggle('modal-feedback-bg--active')
})

modalFeedbackBg.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-feedback--active')
  modalFeedbackBg.classList.toggle('modal-feedback-bg--active')
})

modalOpenBtnTablet.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-feedback--active')
  modalFeedbackBg.classList.toggle('modal-feedback-bg--active')
})

window.addEventListener('resize', function () {
  modalFeedback.classList.remove('modal-feedback--active')
  modalFeedbackBg.classList.remove('modal-feedback-bg--active')
})
