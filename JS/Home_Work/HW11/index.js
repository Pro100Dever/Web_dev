const form = document.querySelector('.form')
const box = document.querySelector('.box')

const user = {
  login: 'alerdings',
  password: '12345',
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const logRes = document.createElement('h3')

  box.innerHTML = ''
  if (
    e.target['login'].value !== user.login &&
    e.target['password'].value !== user.password
  ) {
    logRes.innerText = 'Incorect login and password'
  } else if (e.target['login'].value !== user.login) {
    logRes.innerText = 'Incorect login'
  } else if (e.target['password'].value !== user.password) {
    logRes.innerText = 'Incorect password'
  } else {
    logRes.innerText = 'Login confirm'
  }
  box.append(logRes)
})
