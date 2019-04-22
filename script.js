const modal = document.querySelector("button[data-behavior='modalButton']")
const modalView = document.querySelector("div[data-behavior='modalView']")
const closeBtn = document.querySelector("button[data-behavior='closeBtn']")
const continueBtn = document.querySelector("button[data-behavior='continueBtn']")

const openModal = (event) => {
  modalView.style.display = 'block'
}

const clear = (event) => {
  modalView.style.display = 'none'
}

const redirect = (event) => {
  window.location.href = "https://www.jet2.com";
}

const outsideClick = (event) => {
  if(event.target == modalView) {
    modalView.style.display = 'none'
  }
}

modal.addEventListener('click', openModal)
closeBtn.addEventListener('click', clear)
continueBtn.addEventListener('click', redirect)
window.addEventListener('click', outsideClick)