const form = document.querySelector('.form')
const loginForm = document.getElementById('login-form')
const postForm = document.querySelector('.post-form')
const container = document.getElementById('container')

const signupMessage = document.createElement('div')
const loginMessage = document.createElement('div')
const title = document.querySelector('.signup__title')

const emailValidMessage = document.createElement('span')
const passValidMessage = document.createElement('span')

// Регистрация
form.addEventListener('submit', e => {
  e.preventDefault()
  if (e.target['loginLink']) {
    form.style.display = 'none'
    loginForm.style.display = 'flex'
    title.textContent = 'Sign in'
  }
  const emailValue = e.target['email'].value
  const passwordValue = e.target['password'].value
  // записывает в переменную масив обьектов узерс из локал стораге. Если там ничего нет то достает пустой массив
  const existingUsers = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : []
  // Проверка находится ли в локал стораге, введеная в импуте почта
  const userExist = existingUsers.some(user => user.email === emailValue)
  // Валидация
  const chekEmailValid = chekEmailValidation(e.target['email'])
  const chekPassValid = chekPasswordValidation(e.target['password'])

  //Проверка существует ли такой пользователь. Если нет то создает объек пользователя и отправляет в локал стораге
  if (userExist) {
    showMassage('User exists', 'red')
  } else if (chekEmailValid && chekPassValid) {
    const newUser = {
      email: emailValue,
      password: passwordValue,
      userTasks: [],
    }
    existingUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(existingUsers))
    e.target.reset()
    form.style.display = 'none'
    loginForm.style.display = 'flex'
    title.textContent = 'You have registered'
    title.style.fontSize = '24px'
  } else {
    showMassage('Incorrect value(s)', 'red')
  }
})

// Авторизация
loginForm.addEventListener('submit', e => {
  e.preventDefault()
  const emailValue = e.target['loginEmail'].value
  const passwordValue = e.target['loginPassword'].value

  const existingUsers = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : []

  // запишет в переменную объект пользователя если будет сопадения по почте
  const user = existingUsers.find(user => user.email === emailValue)
  // Проверка на логин и пароль. Если все ок, то авторизация успешна
  if (user && user.password === passwordValue) {
    const text = document.querySelector('.text')
    text.style.display = 'none'
    localStorage.setItem('loggedInUser', emailValue)

    postForm.style.display = 'block'
    loginForm.style.display = 'none'

    renderTasks()
    title.textContent = 'You are logged'
  } else {
    showMassageLogin('Invalid email or password', 'red')
  }
})

postForm.addEventListener('submit', e => {
  e.preventDefault()
  let todos = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : []
  const loggedEmail = localStorage.getItem('loggedInUser')

  const titleValue = e.target['title'].value
  const descripValue = e.target['description'].value
  const newTask = { title: titleValue, description: descripValue }

  const loggedUser = todos.filter(a => a.email === loggedEmail)
  for (let item of loggedUser) {
    item.userTasks.push(newTask)
  }

  localStorage.setItem('users', JSON.stringify(loggedUser))
  renderTasks()
  e.target.reset()
})

function renderTasks() {
  container.innerHTML = ''
  let todos = JSON.parse(localStorage.getItem('users')) || []
  const loggedEmail = localStorage.getItem('loggedInUser')
  const loggedUser = todos.filter(a => a.email === loggedEmail)

  for (let item of loggedUser) {
    item.userTasks.forEach(task => {
      const list = document.createElement('dl')
      const listTitle = document.createElement('dt')
      const listDescription = document.createElement('dd')

      listTitle.innerText = task.title
      listDescription.innerText = task.description
      list.append(listTitle, listDescription)
      container.append(list)
    })
  }
}
// Выводит сообщение вконце формы
function showMassage(string, color) {
  signupMessage.innerText = string
  signupMessage.style.color = color
  form.insertAdjacentElement('beforeend', signupMessage)
}

// Выводит сообщение об авторизации
function showMassageLogin(string, color) {
  loginMessage.innerText = string
  loginMessage.style.color = color
  loginForm.insertAdjacentElement('beforeend', loginMessage)
}

//=======================EMAIL
function chekEmailValidation(email) {
  email.insertAdjacentElement('afterend', emailValidMessage)
  emailValidMessage.innerText = ''
  emailValidMessage.style.color = 'red'
  const re = /^(?=.*[A-Za-z])(?=.*@)[A-Za-z0-9@]+$/
  if (email.value.length < 5) {
    emailValidMessage.innerText = 'Должно быть минимум 5 сиволов'
  } else if (!email.value.includes('@')) {
    emailValidMessage.innerText = 'Должен быть символ "@"'
  } else if (!email.value.match(re)) {
    emailValidMessage.innerText =
      'Имя должно быть только латинские буквы и цифры и хотя бы одна буква'
  } else {
    return true
  }
}

//=======================PASSWORD
function chekPasswordValidation(password) {
  password.insertAdjacentElement('afterend', passValidMessage)
  passValidMessage.innerText = ''
  passValidMessage.style.color = 'red'
  if (password.value.length > 26) {
    passValidMessage.innerText = 'Должен быть не больше 12 символов'
  } else if (password.value.length < 8) {
    passValidMessage.innerText = 'Должен быть минимум 8 символов'
  } else {
    return true
  }
}
