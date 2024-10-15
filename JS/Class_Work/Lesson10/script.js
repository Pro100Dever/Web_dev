const container = document.querySelector('.container')
console.log(container)
// innerHTML - перезаписывает все что есть внутри елемета
container.innerHTML = `
Hello world
<h3>Hello h3</h3>
`
const image = document.getElementById('image')
// 1-й это параметр атрибута
// 2-й это значение атрибута
image.setAttribute('src', './asets/image.png')

const img1 = document.querySelector('#img2')
img1.setAttribute('src', './asets/image.png')

const rand = document.querySelector('.box5')
rand.innerHTML = `<h3>Hello H3</h3>
random text`

// Создание елемента
const content = document.querySelector('.content')
const title2 = document.createElement('h5') // создаем елемент
title2.innerText = 'New title from JS' // задаем тект для елемента
content.append(title2) // вкладываем елементы в конец елемта к которому применяется
