const dataList = [
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
]
const modalDataList = [
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
]
const container = document.querySelector('.container')

createCard(dataList)

function createCard(arr) {
  for (let item of arr) {
    // создаем переменные
    const box = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h3')
    const aboutUser = document.createElement('p')
    const listBtn = document.createElement('button')

    // Добавляем классы и атрибуты
    box.classList.add('box')
    image.classList.add('image')
    title.classList.add('title')
    aboutUser.classList.add('text')
    listBtn.classList.add('list-btn')

    image.setAttribute('src', './img/image.png')
    listBtn.setAttribute('type', 'submit')

    //добавляем котент
    title.textContent = item.userName
    aboutUser.textContent = item.aboutUser
    listBtn.textContent = 'Submit'

    // Записываем друг в друга
    container.append(box)
    box.prepend(image, title, aboutUser, listBtn)
  }
}
// Создаем модальную кнопку

// const btnDiv = document.createElement('div')
// btnDiv.classList.add('btnDiv')
// document.body.append(btnDiv)

const modalBtn = document.createElement('button')
modalBtn.classList.add('modal-btn')
modalBtn.textContent = 'Modal window'
container.insertAdjacentElement('afterend', modalBtn)

const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close__modal')
modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

function createModallistitem(data) {
  const modalList = document.createElement('div')
  const modalItem = document.createElement('div')
  const modalImage = document.createElement('img')
  const modalParagraph = document.createElement('p')

  modalList.classList.add('modal__list')
  modalItem.classList.add('modal__item')
  modalImage.classList.add('modal__image')
  modalParagraph.classList.add('modal__paragraph')

  modalParagraph.textContent = data.aboutUser

  modalItem.append(modalImage, modalParagraph)
  modalList.append(modalItem)

  return modalList
}

function renderDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
    const listItem = document.createElement(dataList[i])
    container.appendChild(listItem)
  }
}
function renderModalDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
    const listItem = createModallistitem(dataList[i])
    container.appendChild(listItem)
  }
}
renderDataList(dataList, container)

renderModalDataList(dataList, modalContainer)
