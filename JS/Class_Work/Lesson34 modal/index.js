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

////////////////////////////////Задачки
const company = {
  name: 'TechCorp',
  employees: [
    { name: 'Alice', position: 'Developer', salary: 80000 },
    { name: 'Bob', position: 'Manager', salary: 90000 },
    { name: 'Charlie', position: 'Designer', salary: 70000 },
  ],
}

function setProcent(arr) {
  arr.forEach(e => {
    e.salary += (e.salary / 100) * 10
  })
}
function getSum(arr) {
  const res = arr.reduce((acc, e) => acc + e.salary, 0)
  return res
}
function setArbeit(arr) {
  arr.push({ name: 'Diana', position: 'QA Engineer', salary: 75000 })
}
function getArbeit(arr) {
  arr.filter(a => {
    a.salary > 80000
    console.log(a)
  })
}
setProcent(company.employees)
console.log(getSum(company.employees))

console.log(company.employees)

setArbeit(company.employees)
getArbeit(company.employees)
console.log(company.employees)

// Задания:
// Увеличьте зарплату каждого сотрудника на 10%.
// Найдите сумму зарплат всех сотрудников.
// Добавьте нового сотрудника: { name: "Diana", position: "QA Engineer", salary: 75000 }.
// Отдельно вытащить всех сотрудников чья зарплата больше 80000
// Посчитать общие расходы на компании на затраты сотрудников
