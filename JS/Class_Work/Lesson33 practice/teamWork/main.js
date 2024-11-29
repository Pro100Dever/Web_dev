// https://jsonplaceholder.typicode.com/users
// На странице async делаем подгрузку пользвоателей
async function fetchUserAPI() {
  const url = `https://jsonplaceholder.typicode.com/users`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Url not found')
    }
    const data = await res.json()
    renderData(data)
  } catch (error) {
    console.error(error)
  }
}

function renderData(users) {
  const container = document.querySelector('.container')
  container.innerHTML = ''
  users.forEach(user => {
    const userHTML = `
          <div class="userItem">
            <div class="userPhoto"><img src="./man.jpg" alt="User Image"></div>
            <div class="text"><p><span>name:</span>${user.name}</p>
            <p><span>username:</span>${user.username}</p>
            <p><span>email:</span>${user.email}</p>
            <div class="userAddress"><span class="line">address:</span>
              <ul>
                <li>street: ${user.address.street}</li>
                <li>suite: ${user.address.suite}</li>
                <li>city: ${user.address.city}</li>
                <li>zipcode: ${user.address.zipcode}</li>
              </ul>
            </div>
              </div>
          </div>
      
        `
    container.innerHTML += userHTML
  })
}

fetchUserAPI()

async function fetchCatAPI() {
  const url = `https://api.thecatapi.com/v1/images/search`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Cat API URL is not found')
    }
    const data = await res.json()
    return data[0].url
  } catch (error) {
    console.error(error)
  }
}

async function fetchKanyeAPI() {
  const url = `https://api.kanye.rest/`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Kanye url is not found')
    }
    const data = await res.json()
    return data.quote
  } catch (error) {
    console.error(error)
  }
}

async function renderCat() {
  const randomCatUrl = await fetchCatAPI()
  const randQuote = await fetchKanyeAPI()

  const names = [
    'Шарик',
    'Барон',
    'Белла',
    'Рекс',
    'Джек',
    'Молли',
    'Люси',
    'Чарли',
    'Софи',
    'Макс',
    'Марго',
    'Бублик',
    'Чапа',
    'Малыш',
    'Мерри',
    'Луна',
  ]
  const randomName = names[Math.floor(Math.random() * names.length)]

  const cat = document.querySelector('.cat')
  if (cat) {
    cat.innerHTML = `
        <div class="catImg"><img src="${randomCatUrl}" alt="Cat Image" width="900px" height="700px"></div>
        <p><span>Name:</span> ${randomName}</p>
        <p><span>Fun Fact:</span> ${randQuote}</p>
      `
  } else {
    console.error("Element with class '.cat' not found!")
  }
}

renderCat()
