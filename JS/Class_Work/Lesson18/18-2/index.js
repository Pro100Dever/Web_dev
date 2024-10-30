const obj = {
  a: 231,
  b: 'sf',
}
localStorage.setItem('obj', JSON.stringify(obj))
const storObj = localStorage.getItem('obj')
const parseObj = JSON.parse(storObj)
console.log(parseObj)

const arr = [
  { id: 1, title: 'hello', description: 'Hello desc' },
  { id: 2, title: 'hello2', description: 'Hello desc2' },
  { id: 3, title: 'hello3', description: 'Hello desc3' },
]

localStorage.setItem('arr', JSON.stringify(arr))
const storArr = localStorage.getItem('arr')
const parsArr = JSON.parse(storArr)
console.log(parsArr)

const form = document.querySelector('.form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const userName = e.target['username'].value
  const email = e.target['email'].value
  const data = {
    username: userName,
    email: email,
  }

  localStorage.setItem('dataObj', JSON.stringify(data))
  const pUsername = document.createElement('p')
  const pEmail = document.createElement('p')
  const storeObj = JSON.parse(localStorage.getItem('dataObj'))
  pUsername.innerText = `Your name: ${storeObj.username}`
  pEmail.innerText = `Your Email: ${storeObj.email}`
  document.body.prepend(pUsername)
  pUsername.insertAdjacentElement('afterend', pEmail)
})
