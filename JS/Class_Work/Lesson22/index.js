const btn = document.getElementById('btn')
const btnStatus = document.createElement('button')
const fetch_btn = document.createElement('button')
const container = document.createElement('div')
const list = document.createElement('ul')

let status = true

// event for btn
btn.addEventListener('click', () => {
  localStorage.setItem('isLogin', status)
  render(status)
})

// даю параметры кнопке
btnStatus.innerText = `Change status`
fetch_btn.innerText = `Fetch users`
btn.after(btnStatus)
btnStatus.after(fetch_btn)

//event for receiveBtn
btnStatus.addEventListener('click', () => {
  localStorage.setItem('isLogin', !status)
  render(!status)
})

fetch_btn.addEventListener('click', () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  fetch(url)
    .then(a => a.json())
    .then(data => {
      data.forEach(item => {
        const listItem = document.createElement('li')
        const userName = document.createElement('h3')
        const userEmail = document.createElement('p')

        userName.innerText = item.username
        userEmail.innerText = item.email

        listItem.append(userName, userEmail)
        list.append(listItem)
        fetch_btn.after(list)
      })
    })
})

function render(isLogin) {
  container.innerHTML = ''
  const p = document.createElement('p')
  if (isLogin) {
    p.innerText = 'Passed accept'
  } else {
    p.innerText = 'Passed denied'
  }
  btnStatus.after(container)
  container.append(p)
}
