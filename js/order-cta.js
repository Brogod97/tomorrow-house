const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderOverlay = document.querySelector('.overlay')

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderOverlay.classList.add('is-active')
})

orderOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open')
  orderOverlay.classList.remove('is-active')
})
