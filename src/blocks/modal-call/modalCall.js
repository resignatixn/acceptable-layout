const modalOpenBtn = document.querySelector('.services__button:last-child')
const modalOpenBtnTablet = document.querySelector(
  '.header__button:nth-child(5)'
)
const modalCloseBtn = document.querySelector('.modal-call__close')
const modalFeedback = document.querySelector('.modal-call')
const modalFeedbackBg = document.querySelector('.modal-call-bg')

modalOpenBtn.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-call--active')
  modalFeedbackBg.classList.toggle('modal-call-bg--active')
})

modalCloseBtn.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-call--active')
  modalFeedbackBg.classList.toggle('modal-call-bg--active')
})

modalFeedbackBg.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-call--active')
  modalFeedbackBg.classList.toggle('modal-call-bg--active')
})

modalOpenBtnTablet.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-call--active')
  modalFeedbackBg.classList.toggle('modal-call-bg--active')
})

window.addEventListener('resize', function () {
  modalFeedback.classList.remove('modal-call--active')
  modalFeedbackBg.classList.remove('modal-call-bg--active')
})
