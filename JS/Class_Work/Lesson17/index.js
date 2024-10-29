const arr = [1, 'dfh', 2, 'ggggg', 6, 'ttttt', 'eeee', 9]
console.log(arr.filter(a => typeof a === 'string').map(a => a.toUpperCase()))

// npm install nodemon -D

const numbers = [1, 2, -3, 4, 5]

console.log(
  numbers.some(i => i < 0),
  numbers.find(i => i > 4)
)
//=================================
const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [2, 4, 6, 8, 10]
const strings = ['apple', 'banana', 'orange', 'watermelon']

console.log(
  numbers1.every(i => i > 0), //  являются ли все элементы положительными
  numbers2.every(i => i % 2 === 0), // являются ли все элементы четными
  strings.some(i => i.length > 10) // содержит ли массив строку длиной более 10
)
//=================================

/* localStorage.setItem('username', 'Volodymyr')
localStorage.setItem('lastname', 'Berestenko')
const username = localStorage.getItem('username')
const lastname = localStorage.getItem('username')
// localStorage.removeItem('username')
// localStorage.clear()

const h3 = document.querySelector('.h3')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  h3.textContent = username + ' ' + lastname
}) */
// const form = document.querySelector('#form')
// const btn = document.querySelector('#btn__value')
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const target = e.target['input'].value
//   localStorage.setItem('inputValue', target)
// })
// btn.addEventListener('click', () => {
//   const value = localStorage.getItem('inputValue')
//   console.log(value)

//   document.querySelector('p').textContent = value
// })
