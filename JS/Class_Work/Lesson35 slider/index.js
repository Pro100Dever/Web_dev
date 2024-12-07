const root = document.querySelector('#root')
let slider_index = 0
const images = [
  'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg',
  'https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg',
  'https://i.pinimg.com/736x/da/83/aa/da83aa2ee523c9ca24d1a185686f8e2b.jpg',
  'https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg',
  'https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg',
]

const frame = document.createElement('div')
const cards = document.createElement('div')
const triggers = document.createElement('div')
frame.classList.add('frame')
cards.classList.add('cards')

images.forEach(item => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.style.backgroundImage = `url("${item}")`
  cards.append(card)
})

frame.append(cards)
root.append(frame)

function createRounds() {
  const container = document.createElement('div')
  container.classList.add('rounds')
  images.forEach((item, index) => {
    const button = document.createElement('button')
    if (index === 0) {
      button.classList.add('active')
    }
    container.append(button)
    button.addEventListener('click', () => {
      slider_index = index
      cards.style.left = `${-1 * slider_index * 500}px`
      const allButtons = button.parentElement.children
      console.log(allButtons)
      for (let j = 0; j < allButtons.length; j++) {
        allButtons[j].classList.remove('active')
      }
      button.classList.add('active')
    })
  })
  frame.append(container)
}

createRounds()
const leftBtn = document.createElement('button')
const rightBtn = document.createElement('button')

leftBtn.innerText = '<'
rightBtn.innerText = '>'

triggers.classList.add('trigger')
triggers.append(leftBtn, rightBtn)
frame.append(triggers)

function goLeft() {
  if (slider_index !== 0) {
    slider_index--
    cards.style.left = `${-1 * slider_index * 500}px`
  }
}

function goRight() {
  if (slider_index < images.length - 1) {
    slider_index++
    cards.style.left = `${-1 * slider_index * 500}px`
  }
}

leftBtn.addEventListener('click', goLeft)
rightBtn.addEventListener('click', goRight)

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
