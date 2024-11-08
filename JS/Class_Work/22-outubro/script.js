// Находим все элементы с классом .accordion__top
const accList = document.querySelectorAll('.accordion__top')
const acceptCookieBtn = document.querySelector('#accept__cookie')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__container')
const closeModal = document.querySelector('.close__modal')
const formData = document.querySelector('.form__data')
const cookies = document.querySelector('.cookies')
// Функция для открытия/закрытия аккордеона
const toggleAccordion = accordionTop => {
  const accordionBottom = accordionTop.nextElementSibling // Содержимое аккордеона (accordion__bottom)
  accordionBottom.classList.toggle('accordion-active') // Переключаем класс для открытия/закрытия

  const arrow = accordionTop.querySelector('img') // Находим стрелку внутри заголовка
  if (arrow) {
    arrow.classList.toggle('accordion-active') // Переключаем класс для вращения стрелки
  }
}

// Добавляем обработчики событий для каждого элемента с классом .accordion__top
accList.forEach(accordionTop => {
  accordionTop.addEventListener('click', () => {
    toggleAccordion(accordionTop)
  })
})

acceptCookieBtn.addEventListener('click', () => {
  cookies.style.display = 'none'
})

// setTimeout(() => {
//     cookies.style.display = 'flex'
// }, 15000)

formData.addEventListener('submit', e => {
  e.preventDefault()
  const listData = []
  const target = e.target
  const name = target['0'].value
  const lastName = target['1'].value
  const mail = target['2'].value
  listData.push(name, lastName, mail)
  modal.style.display = 'flex'
  const ul = document.createElement('ul')
  ul.classList.add('list')
  console.log(listData)
  listData.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('item')
    li.innerHTML = `
            <p>Привет, ${item}!</p>
        `
    ul.append(li)
    console.log(item)
  })
  target['0'].value = ''
  target['1'].value = ''
  target['2'].value = ''
  modalContent.appendChild(ul)

  console.log(name, lastName, mail)
})
closeModal.addEventListener('click', () => {
  // const ul = document.querySelector('.list')
  // const li = document.querySelector('.item')
  modal.style.display = 'none'
  modalContent.innerHTML = ''
})
