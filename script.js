const modal = document.querySelector("button[data-behavior='modalButton']")
const modalView = document.querySelector("div[data-behavior='modalView']")
const closeModal = document.querySelector("button[data-behavior='closeModal']")
const continueModal = document.querySelector("button[data-behavior='continueModal']")

const openModal = (event) => {
  modalView.style.display = 'block'
}

const clear = (event) => {
  modalView.style.display = 'none'
}

const outsideClick = (event) => {
  if(event.target == modalView) {
    modalView.style.display = 'none'
  }
}

modal.addEventListener('click', openModal)
closeModal.addEventListener('click', clear)
window.addEventListener('click', outsideClick)