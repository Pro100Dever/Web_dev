const form = document.querySelector('.form')
const loginForm = document.querySelector('#login-form')
const postForm = document.querySelector('.post-form')
const container = document.querySelector('#container')

const signupMessage = document.createElement('div')
const loginMessage = document.createElement('div')
const title = document.querySelector('.signup__title')


function showMassage(string, color){
    signupMessage.innerText = string
    signupMessage.style.color = color
    form.insertAdjacentElement('beforeend', signupMessage)
}

function showMassageLogin(string, color){
    loginMessage.innerText = string
    loginMessage.style.color = color
    loginForm.insertAdjacentElement('beforeend', loginMessage)
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const emailValue = e.target['email'].value
    const passwordValue = e.target['password'].value
   
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []
    const userExist = existingUsers.some((user) => user.email === emailValue)
    
    if(userExist){
        showMassage('User exists', 'red')
    } else {
        const newUser = {
            email: emailValue,
            password: passwordValue
        }
        existingUsers.push(newUser)
        localStorage.setItem('users', JSON.stringify(existingUsers))
        showMassage('User was registered', 'green')
        e.target.reset()
        form.style.display = 'none'
        loginForm.style.display = 'flex'
        title.textContent = 'You are logged in'
    }
})


loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const emailValue = e.target['loginEmail'].value
    const passwordValue = e.target['loginPassword'].value
   
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []
    const user = existingUsers.find((user) => user.email === emailValue)
    
    if(user && user.password === passwordValue) {
        localStorage.setItem('loggedInUser', emailValue)
        postForm.style.display = 'block'
        loginForm.style.display = 'none'
        showMassageLogin('Login is successful', 'green')
    } else {
        showMassageLogin('Invalid email or password', 'red')
    }
})


let todos = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []


postForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const titleValue = e.target['title'].value
    const descripValue = e.target['description'].value
   
    const newTask = { title: titleValue, description: descripValue }
    todos.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(todos))
    renderTasks()
    e.target.reset()
})


function renderTasks() {
    container.innerHTML = '' 
    todos.forEach(task => {
      const list = document.createElement('dl')
      const listTitle = document.createElement('dt')
      const listDescription = document.createElement('dd')
      listTitle.innerText = task.title
      listDescription.innerText = task.description
      list.append(listTitle, listDescription)
      container.append(list)
    })
}

renderTasks()
