/* 
function getCurrentData() {
  const date = new Date()
  const year = date.getFullYear()
  //padstart - кладет в начало строки какое то определенное кол во символов работает со строкой только и в качестве аргумента принимает максимальную величину строки, какой она должна стать, а вторым аругументом - символ в начало
  const month = String(date.getMonth() + 1).padStart('2', 0)
  const day = String(date.getDate()).padStart('2', 0)
  return `сегодня: ${day}-${month}-${year}`
}
console.log(getCurrentData())
 */

//===============================TOGGLE THEME
const btn = document.getElementById('btn')
const input = document.getElementById('input')
const html = document.querySelector('html')

const theme = localStorage.getItem('theme')

if (theme) {
  html.setAttribute('data-theme', theme)
}

btn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme')
  if (currentTheme) {
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark')
      html.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
      html.setAttribute('data-theme', 'light')
    }
  } else {
    localStorage.setItem('theme', 'dark')
    html.setAttribute('data-theme', 'dark')
  }
})

//===============================CLICK AND CLEAR
const container = document.querySelector('.container')
const btnContainer = document.getElementById('btn2')
const clearBtn = document.querySelector('.clear-btn')
const username = localStorage.getItem('username')

if (username) {
  container.innerText = username
}
btnContainer.addEventListener('click', () => {
  localStorage.setItem('username', 'Volodymyr')

  const username = localStorage.getItem('username')
  if (username) {
    container.innerText = username
  }
})

clearBtn.addEventListener('click', () => {
  container.innerHTML = ''
  localStorage.removeItem('username')
})

//===============================LOGIN FORM
const displayBtn = document.querySelector('.displayLoginName')
const hideBtn = document.querySelector('.removeLoginName')
const container2 = document.querySelector('.container2')

const checkinput = localStorage.getItem('inputValue')
if (checkinput) {
  container2.textContent = checkinput
}
displayBtn.addEventListener('click', () => {
  localStorage.setItem('inputValue', input.value)
  container2.textContent = input.value
  input.value = ''
})
hideBtn.addEventListener('click', () => {
  container2.innerHTML = ''
  localStorage.removeItem('inputValue')
})
