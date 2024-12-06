const nav = document.querySelector('.nav')
const notificationContainer = document.querySelector('.notifications')
const postsBtnLeft = document.querySelector('.left-toogle--post')
const postsBtnRight = document.querySelector('.right-toogle--post')
const catsBtnLeft = document.querySelector('.left-toogle--cats')
const catsBtnRight = document.querySelector('.right-toogle--cats')
const postContainer = document.getElementById('posts-container')
const catsContainer = document.getElementById('cats-container')
const containerContent = document.createElement('div')
containerContent.classList.add('container__content')

let counter = 1

async function fetchPostsAPI(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }
    const data = await response.json()
    createPost(data)
    createNotification(
      'success',
      'Данные успешно загружены!',
      `Status: ${response.status}`
    )
  } catch (error) {
    createNotification('error', 'Error!', error.message)
  }
}
async function fetchCatsAPI(id) {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100/${id}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }
    const data = await response.json()
    createCats(data)
    createNotification(
      'success',
      'Данные успешно загружены!',
      `Status: ${response.status}`
    )
  } catch (error) {
    createNotification('error', 'Error!', error.message)
  }
}
async function fetchKanye() {
  const url = `https://api.kanye.rest`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

function createPost(data) {
  containerContent.innerHTML = `
        <h3 class="container-content__title">
          ${data.title}
        </h3>
        <p class="container-content__description">
         ${data.body}
        </p>
  `
  postContainer.prepend(containerContent)
}
async function createCats(catsData) {
  const description = await fetchKanye()
  const [cat] = [...catsData]
  containerContent.innerHTML = `
    <div class='image-block'>
      <img src=${cat.url}>
    </div>
    <p class="container-content__description container-content__description--cats">
      ${description.quote}
    </p>
  `
  catsContainer.prepend(containerContent)
}

//////////////////////////////////////////////////////////
postsBtnLeft.addEventListener('click', () => {
  if (counter <= 1) {
    return
  } else {
    counter--
    fetchPostsAPI(counter)
  }
})
postsBtnRight.addEventListener('click', () => {
  counter++
  fetchPostsAPI(counter)
})
catsBtnLeft.addEventListener('click', () => {
  if (counter <= 1) {
    return
  } else {
    counter--
    fetchCatsAPI(counter)
  }
})
catsBtnRight.addEventListener('click', () => {
  counter++
  fetchCatsAPI(counter)
})

//////////////////////////////////////////////////

nav.addEventListener('click', e => {
  e.preventDefault()
  const curentItem = e.target.parentElement.id
  switch (curentItem) {
    case 'home':
      checkActive(curentItem)
      break
    case 'about':
      checkActive(curentItem)
      break
    case 'cats':
      checkActive(curentItem)
      break
    case 'posts':
      checkActive(curentItem)
      break
  }
})

function checkActive(id) {
  if (id === 'home') {
    for (let i = 1; i < nav.children.length; i++) {
      const itemNone = document.getElementById(
        `${nav.children[i].id}-container`
      )
      itemNone.classList.remove('aktive')
      itemNone.style.display = 'none'
    }
  } else {
    for (let i = 1; i < nav.children.length; i++) {
      if (nav.children[i].id === id) {
        continue
      }
      const itemNone = document.getElementById(
        `${nav.children[i].id}-container`
      )
      itemNone.classList.remove('aktive')
      itemNone.style.display = 'none'
    }
    const container = document.getElementById(`${id}-container`)

    const aktive = container.classList.toggle('aktive')
    if (aktive) {
      container.style.display = 'block'
      if (id === 'posts') {
        fetchPostsAPI(1)
      } else if (id === 'cats') {
        fetchCatsAPI(1)
      }
    } else {
      container.style.display = 'none'
    }
  }
}

function createNotification(status, title, description) {
  const notification = document.createElement('div')
  notification.className = `notification notification--${status}`
  notification.innerHTML = `
    <div class="notification__icon" >
    <img src=${
      status === 'success' ? './icon/confirm.svg' : './icon/error.svg'
    } alt="icon">
    </div>
    <div class="notification__data">
      <div class="notification__title">${title ? title : 'Error'}</div>
      <div class="notification__text">${
        description ? description : 'Bad request'
      }</div>
    </div>
    <img class="notification__close" src="./icon/close.svg" alt="icon-close">
  `
  notificationContainer.append(notification)

  notification
    .querySelector('.notification__close')
    .addEventListener('click', () => notification.remove())
  setTimeout(() => notification.remove(), 5000)
}
