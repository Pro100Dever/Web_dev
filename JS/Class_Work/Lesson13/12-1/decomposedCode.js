// Функция для создания элементов списка
function createListItem(data) {
  const listItem = document.createElement('div')
  const title = document.createElement('h3')
  const paragraph = document.createElement('p')
  const image = document.createElement('img')
  const btn = document.createElement('button')

  // Добавление классов и атрибутов
  listItem.classList.add('listItem')
  btn.classList.add('btnS')
  image.setAttribute('src', '../Assets/opyat_rabota.jpg')

  // Добавление текста
  title.innerText = data.username
  paragraph.innerText = data.description
  btn.innerText = 'submit'

  // Вставка элементов в listItem
  listItem.append(image, title, paragraph, btn)

  return listItem
}

function createModalListItem(data) {
  const modalList = document.createElement('div')
  const modalItem = document.createElement('div')
  const modalImage = document.createElement('img')
  const modalParagraph = document.createElement('p')
  // Добавление классов и атрибутов

  modalList.classList.add('modalList')
  modalItem.classList.add('modalItem')
  modalImage.setAttribute('src', '../Assets/opyat_rabota.jpg')
  // Добавление текста
  modalParagraph.innerText = data.description
  // Вставка элементов в listItem
  modalItem.append(modalImage, modalParagraph)
  modalList.append(modalItem)

  return modalList
}

// Функция для отображения списка данных
function renderDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
    const listItem = createListItem(dataList[i])
    container.appendChild(listItem)
  }
}

function renderModalDataList(dataList, container) {
  for (let i = 0; i < dataList.length; i++) {
    const listItem = createModalListItem(dataList[i])
    container.insertAdjacentElement('afterbegin', listItem)
  }
}
// Функция для создания и добавления кнопки открытия модального окна
function createModalButton(container) {
  const btn2 = document.createElement('button')
  btn2.classList.add('btn2')
  btn2.innerText = 'Modal  Window'
  container.insertAdjacentElement('afterend', btn2)
  return btn2
}

// Функция для управления модальным окном
function setupModalHandlers(btn2, modal, closeModalBtn) {
  // Открытие модального окна
  btn2.addEventListener('click', () => {
    modal.style.display = 'flex'
  })

  // Закрытие модального окна
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}

// Основной код
const dataList = [
  {
    username: 'Stanley Cooper',
    description: 'lorem lorem lorem lorem lorem...',
  },
  {
    username: 'Stanley Cooper',
    description: 'lorem lorem lorem lorem lorem...',
  },
  {
    username: 'Stanley Cooper',
    description: 'lorem lorem lorem lorem lorem...',
  },
]

const container = document.querySelector('.container')
const modalContainer = document.querySelector('.modal__container')

// Отображаем список данных
renderDataList(dataList, container)

renderModalDataList(dataList, modalContainer)

// Создаем и добавляем кнопку для модального окна
const btn2 = createModalButton(container)

// Настраиваем модальное окно
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close__modal')
setupModalHandlers(btn2, modal, closeModalBtn)
