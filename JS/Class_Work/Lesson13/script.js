const dataList = [
  {
    userName: 'Stanley Cooper',
    userImg: './img/image.png',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    userImg: './img/image.png',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
  {
    userName: 'Stanley Cooper',
    userImg: './img/image.png',
    aboutUser:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  },
]
//создание елементов списка
function createCard(data) {
  // создаем переменные
  const box = document.createElement('div')
  const image = document.createElement('img')
  const title = document.createElement('h3')
  const aboutUser = document.createElement('p')
  const listBtn = document.createElement('button')

  // Добавляем классы и атрибуты
  box.classList.add('box')
  title.classList.add('title')
  aboutUser.classList.add('text')
  listBtn.classList.add('list-btn')

  image.setAttribute('src', data.userImg)
  listBtn.setAttribute('type', 'submit')

  //добавляем котент
  title.textContent = data.userName
  aboutUser.textContent = data.aboutUser
  listBtn.textContent = 'Submit'

  // Записываем друг в друга
  box.append(image, title, aboutUser, listBtn)

  return box
}

// то же самое но для модального окна
function createModallistitem(data) {
  const modalItem = document.createElement('div')
  const modalImage = document.createElement('img')
  const modalParagraph = document.createElement('p')

  modalItem.classList.add('modal__item')
  modalImage.setAttribute('src', data.userImg)

  modalParagraph.textContent = data.aboutUser
  modalItem.append(modalImage, modalParagraph)
  return modalItem
}

// Функция для отображения списка данных
//Функция принимает мосив обьектов - datalist и div класс: container
function renderDataList(dataList, container) {
  //Функция разбирает масив обьектов
  for (let item of dataList) {
    //Черех for in
    const listItem = createCard(item)
    // на каждый обьект массива создает карточку
    container.appendChild(listItem)
  }
}

// То же самое что и функция выше но для модального окна
function renderModalDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
    // обычный вариант for
    const listItem = createModallistitem(dataList[i])
    container.insertAdjacentElement('afterbegin', listItem)
  }
}

// Функция для создания и добавления кнопки открытия модального окна
function createModalButton(container) {
  const modalBtn = document.createElement('button')
  modalBtn.classList.add('modal-btn')
  modalBtn.textContent = 'Modal window'
  container.insertAdjacentElement('afterend', modalBtn)
  return modalBtn
}

// Функция для управления модальным окном
function setupModalHandlers(modalBtn, modal, closeModalBtn) {
  // Открытие модального окна
  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
  // евент закрытие
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

// див в котором весь свисок
const container = document.querySelector('.container')
// Кнопки открыть и закрыть модальное окно
const modalBtn = createModalButton(container)
const closeModalBtn = document.querySelector('.close__modal')
// дивы модального окна
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal__container')
// Отображаем список
renderDataList(dataList, container)
renderModalDataList(dataList, modalContainer)
// евент открыть и закрыть модальное окно
setupModalHandlers(modalBtn, modal, closeModalBtn)
