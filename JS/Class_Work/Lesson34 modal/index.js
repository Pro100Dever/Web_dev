const openModal = document.querySelector('.open__modal')
// const closeModal = document.querySelector('#close')
// const closeDialog = document.querySelector('#closeDialog')
// const openDialogModal = document.querySelector('#openDialogModal')
const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.modal-content__form')
const renderBtn = document.querySelector('.modal-content__render-btn')

openModal.addEventListener('click', () => {
  modal.style.display = 'flex'
})
// //Реализовать закрытие по клику вне модального окна
// closeModal.addEventListener('click', () => {
//   modal.style.display = 'none'
// })
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})
// openDialogModal.addEventListener('click', () => {
//   document.querySelector('.dialog__modal').showModal()
// })

// closeDialog.addEventListener('click', () => {
//   document.querySelector('.dialog__modal').close()
// })
modalForm.addEventListener('submit', e => {
  e.preventDefault()
  const title = e.target['modal-content__form-title'].value
  const description = e.target['modal-content__form-description'].value
  const createList = document.querySelector('.modal-content__create-list')
  const listItem = document.createElement('li')

  listItem.className = 'list__item'
  listItem.innerHTML = `
    <div class="list-item__left-block">
      <h3 class="list-item__title">title: ${title}</h3>
      <p class="list-item__description">description: ${description}</p>
    </div>
    <div class="list-item__right-block">
      <img src="./post-icon.png" alt="post-icon" />
    </div>
  `
  createList.append(listItem)
  modalForm.reset()
})

async function fetcPost() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  try {
    const response = await fetch(url + '?_limit=4')
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
    renderPost(data)
  } catch (error) {
    console.log(error)
  }
}

function renderPost(posts) {
  const fetchList = document.querySelector('.modal-content__fetch-list')
  fetchList.innerHTML = ''

  posts.forEach(element => {
    const listItem = document.createElement('li')

    listItem.className = 'list__item'
    listItem.innerHTML = `
      <div class="list-item__left-block">
        <h3 class="list-item__title">title: ${element.title}</h3>
        <p class="list-item__description">description: ${element.body}</p>
      </div>
      <div class="list-item__right-block">
        <img src="./post-icon.png" alt="post-icon" />
      </div>
    `
    fetchList.append(listItem)
  })
}

renderBtn.addEventListener('click', () => {
  fetcPost()
})
