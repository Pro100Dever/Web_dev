const inputName = document.querySelector('.name')
const inputPhone = document.querySelector('.phone')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const signupBtn = document.querySelector('.signup')
const notification = document.createElement('p')

const checkName = document.createElement('h5')
const checkEmail = document.createElement('h5')
const checkPhone = document.createElement('h5')
const checkPassword = document.createElement('h5')
inputName.insertAdjacentElement('afterend', checkName)
inputEmail.insertAdjacentElement('afterend', checkEmail)
inputPhone.insertAdjacentElement('afterend', checkPhone)
inputPassword.insertAdjacentElement('afterend', checkPassword)

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []

signupBtn.addEventListener('click', () => {
  chekNameValidation()
  chekEmailValidation()
  chekPhonValidation()
  chekPasswordValidation()
  if (
    chekNameValidation() &&
    chekEmailValidation() &&
    chekPhonValidation() &&
    chekPasswordValidation()
  ) {
    const userData = {
      name: inputName.value,
      phoneNumbers: inputPhone.value,
      email: inputEmail.value,
      password: inputPassword.value,
    }
    users.push(userData)
    localStorage.setItem('users', JSON.stringify(users))
    inputName.value = ''
    inputPhone.value = ''
    inputEmail.value = ''
    inputPassword.value = ''

    notification.innerText = 'You were successfully signup'
    notification.style.color = 'green'
  } else {
    notification.innerText = 'Error incorrect value(s)'
    notification.style.color = 'red'
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

//====================NAME

function chekNameValidation() {
  checkName.innerText = ''
  checkName.style.color = 'red'
  const re = /[a-zA-Z]/
  if (inputName.value.length < 2) {
    checkName.innerText = 'Имя должно быть длинее 2 символов'
  } else if (inputName.value.length > 24) {
    checkName.innerText = 'Имя должно быть короче 2 символов'
  } else if (!inputName.value.match(re)) {
    checkName.innerText = 'Имя должно быть только буквы'
  } else {
    return true
  }
}

//=======================EMAIL
function chekEmailValidation() {
  checkEmail.innerText = ''
  checkEmail.style.color = 'red'
  if (inputEmail.value.length < 7) {
    checkEmail.innerText = 'Должно быть минимум 7 сиволов'
  } else if (!inputEmail.value.includes('@')) {
    checkEmail.innerText = 'Должен быть символ "@"'
  } else {
    return true
  }
}

//=======================PHON
function chekPhonValidation() {
  checkPhone.innerText = ''
  checkPhone.style.color = 'red'
  const re = /[0-9+]+/
  if (inputPhone.value[0] !== '+') {
    checkPhone.innerText = 'Должен начинаться c "+"'
  } else if (inputPhone.value.length > 12) {
    checkPhone.innerText = 'Должен быть не больше 12 цифер'
  } else if (inputPhone.value.length < 8) {
    checkPhone.innerText = 'Должен быть минимум 8 цифер'
  } else if (!inputPhone.value.match(re)) {
    checkPhone.innerText = 'Должен быть только цифры'
  } else {
    return true
  }
}

//=======================PASSWORD
function chekPasswordValidation() {
  checkPassword.innerText = ''
  checkPassword.style.color = 'red'
  if (inputPassword.value.length > 26) {
    checkPassword.innerText = 'Должен быть не больше 12 цифер'
  } else if (inputPassword.value.length < 5) {
    checkPassword.innerText = 'Должен быть минимум 8 цифер'
  } else {
    return true
  }
}
