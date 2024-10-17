/* const newEl = document.createElement('p')
const text = document.querySelector('.text')
//либо повторить тоже самое но через какое то условие

newEl.textContent = 'hello wolrd from new p'
text.innerHTML = ``
text.insertAdjacentElement('afterbegin', newEl)

for (let i = 0; i < 3; i++) {
  const btn = document.createElement('button')
  btn.textContent = 'Click'
  text.append(btn)
  btn.addEventListener('click', () => checkStatusBtn())
}
function checkStatusBtn() {
  newEl.classList.toggle('highlight')
} */
/* function checkStatusBtn() {
  if (!newEl.classList.contains('highlight')) {
    newEl.classList.add('highlight')
  } else {
    newEl.classList.remove('highlight')
  }
} */
/* const newEl = document.createElement('p')
// первый вариант добавления нескольких классов - через запятую
newEl.classList.add('hello', 'newClass', 'newItemElementClass')
//либо повторить тоже самое но через какое то условие
// if(newEl) {
//     newEl.classList.add('active')
// }
// newEl.textContent = 'hello wolrd from new p'
// text.innerHTML = ``
text.insertAdjacentElement('afterbegin', newEl)
console.log(newEl.classList.contains('hello'))
console.log(newEl.classList)
newEl.classList.remove('newItemElementClass') */

const container = document.querySelector('.container')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')

container.append(btn1, btn2, btn3)
btn1.innerText = 'Click'
btn2.innerText = 'Click2'
btn3.innerText = 'Toggle'
const p = document.createElement('p')
p.innerText = 'Доб. текста в елемент'
container.insertAdjacentElement('afterbegin', p)

const arr = ['stroka1', 'Stroka2', 'Stroka3', 'Stroka4 po bolshe']
const list = document.createElement('list')
p.insertAdjacentElement('afterend', list)

arrFn(arr)

function arrFn(randomArr) {
  for (let i = 0; i < randomArr.length; i++) {
    const listItem = document.createElement('li')
    listItem.textContent = randomArr[i]
    listItem.classList.add('listItem')
    list.append(listItem)
  }
}
const span = document.createElement('span')
btn1.addEventListener('click', () => {
  p.classList.add('content')
  document.body.style.background = 'magenta'
  span.innerHTML = ''
})
btn2.addEventListener('click', () => {
  p.classList.remove('content')
  document.body.style.background = 'unset'
  span.innerText = 'es ist schlim'
  span.classList.add('span')
  container.append(span)
})
// btn3.addEventListener('click', () => {
const listItem = document.querySelectorAll('.listItem')
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', () => {
    listItem[i].classList.toggle('active')
  })
}
// })
