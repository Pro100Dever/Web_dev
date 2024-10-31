const inputName = document.querySelector('.name')
const inputPhone = document.querySelector('.phone')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const signupBtn = document.querySelector('.signup')
const notification = document.createElement('p')

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []

signupBtn.addEventListener('click', () => {
  if (
    inputName.value === '' ||
    inputPhone.value === '' ||
    inputEmail.value === '' ||
    inputPassword.value === ''
  ) {
    notification.innerText = 'All fields are required'
    notification.style.color = 'red'
  } else {
    let isError = false
    users &&
      users.forEach(item => {
        if (item.email === inputEmail.value) {
          isError = true
        }
      })
    if (isError) {
      notification.innerText = 'User with this email exists'
      notification.style.color = 'red'
    } else {
      const userData = {
        name: inputName.value,
        phoneNumbers: inputPhone.value,
        email: inputEmail.value,
        password: inputPassword.value,
      }
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))
      inputName.value === ''
      inputPhone.value === ''
      inputEmail.value === ''
      inputPassword.value === ''

      notification.innerText = 'You were successfully signup'
      notification.style.color = 'green'
    }
  }
  document.body.appendChild(notification)
})

const loginInputEmail = document.querySelector('.emailLogin')
const loginInputPassword = document.querySelector('.passwordLogin')
const loginBtn = document.querySelector('.login')

loginBtn.addEventListener('click', () => {
  let isLogErr = true
  users.forEach(item => {
    if (
      loginInputEmail.value === item.email &&
      loginInputPassword.value === item.password
    ) {
      isLogErr = false
    }
  })
  if (isLogErr) {
    if (loginInputEmail.value === '' || loginInputPassword.value === '') {
      notification.innerText = 'All fields are required'
      notification.style.color = 'red'
    } else {
      notification.innerText = 'Email and password is incorrect'
      notification.style.color = 'red'
    }
  } else {
    loginInputEmail.value = ''
    loginInputPassword.value = ''

    notification.innerText = 'You succsesfully login'
    notification.style.color = 'green'
    document.body.innerHTML = `<p>Hello, user)</p>`

    const btnLogout = document.createElement('button')
    btnLogout.innerText = 'Logout'
    document.body.append(btnLogout)
  }
  document.body.appendChild(notification)
})
