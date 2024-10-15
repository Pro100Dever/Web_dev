// DOM -Document Object Model
console.log(document.body)
console.log(window)

// Работа с подтягиванием елементов из HTML
const paragraph = document.getElementById('elem') // Обращение к елементу по id
const box = document.querySelector('.box') // Обращение к елементу так же как в CSS (по селектору)

console.log(paragraph)
console.log(box)

const list = document.querySelector('.list')
const listItem = list.querySelectorAll('.list__item')
console.log(list)
console.log(listItem)

const box1 = document.getElementById('box1')
const paragraph1 = document.querySelectorAll('.paragraph')
const title = document.querySelector('.title')
console.log(box1)
console.log(paragraph1)
console.log(title)
// HTMLcolection коллекция только елементов
// NodeList колекция узлов

title.textContent = 'first try'
// title.innerText = 'Я не знаю что писать'
// title.innerHTML = ''
