/* const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

btn.addEventListener('click', event => {
  console.log(event)
})

container.addEventListener('click', event => {
  console.log(event)
})

const value = document.getElementById('input')

value.addEventListener('click', e => {
  e.target.value++
})

const form = document.querySelector('.form')
form.addEventListener('click', e => {
  if (e.target !== 'imput') {
  }
  console.log(e.target)
})
 */
/* 
const form = document.querySelector('.form')
const button = document.querySelector('button')
const email = document.getElementById('input') */
/* email.setAttribute('type', 'email') */

/* form.addEventListener('submit', e => {
  e.preventDefault()
  const value = e.target['input'].value

  if (!value.includes('@')) {
    const title = document.createElement('h3')

    title.textContent = `Введите корректный email`
    e.target['input'].value = ''
    form.append(title)
  }
}) */

const lastName = document.getElementById('lastName')
const firstName = document.getElementById('firstName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submit')
const error = document.querySelector('.error')

const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const h5 = document.createElement('h5')
  error.innerHTML = ''

  if (checkEmail(h5) == true && checkPassword(h5) == true) {
    h5.textContent = 'Alles klar! Formular ist senden.'
    error.appendChild(h5)
    form.reset()
  }
})

function checkPassword(h5) {
  if (password.value.length < 6) {
    h5.textContent = 'Passord length muss uber 6 symbols been'
    error.appendChild(h5)
    return
  }
  return true
}

function checkEmail(h5) {
  if (!email.value.includes('@')) {
    h5.textContent = 'Введите корректный email'
    error.appendChild(h5)
    return
  }
  return true
}
