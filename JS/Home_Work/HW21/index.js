const list = document.querySelector('.list')

async function fetchUsers() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    createCard(data)
  } catch (error) {
    console.log(error)
  }
}
//id, username, email, address.city, phone и company.name
function createCard(users) {
  console.log(users)
  users.forEach(user => {
    const li = document.createElement('li')
    const username = document.createElement('h3')
    const id = document.createElement('p')
    const email = document.createElement('p')
    const address = document.createElement('p')
    const phone = document.createElement('p')
    const company = document.createElement('p')

    id.innerText = user.id
    username.innerText = user.username
    email.innerText = user.email
    address.innerText = user.address.city
    phone.innerText = user.phone
    company.innerText = user.company.name

    list.append(li)
    li.append(username, id, email, address, phone, company)
  })
}

fetchUsers()
