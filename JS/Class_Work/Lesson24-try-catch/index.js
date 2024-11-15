const urlsObj = {
  posts: 'https://jsonplaceholder.typicode.com/posts',
  comments: 'https://jsonplaceholder.typicode.com/comments',
  albums: 'https://jsonplaceholder.typicode.com/albums',
  photos: 'https://jsonplaceholder.typicode.com/photos',
  todos: 'https://jsonplaceholder.typicode.com/todos',
  users: 'https://jsonplaceholder.typicode.com/users',
}

async function fetchCommentsApi(url) {
  const response = await fetch(url.comments)
  const data = await response.json()
  console.log(data)
}
// fetchCommentsApi(urlsObj)

// try {
//   if (!response.ok) {
//     throw new Error('error') // throw - оператор что генерит ошибки
//   }
// } catch (error) {
//   // Объект ошибки
//   console.log(error)
// }

async function fetchCommentsApiTry(url) {
  try {
    const response = await fetch(url.comments)
    console.log(response)
    if (!response.ok) {
      throw new Error('Url is broken')
    }
    const data = await response.json()
    console.log(datascas)
  } catch (error) {
    console.log(error)
  }
}
// fetchCommentsApiTry(urlsObj)

async function fetchPostApi(url) {
  try {
    const response = await fetch(url.posts)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchPostApi(urlsObj)

async function fetchPostId(url, id) {
  try {
    const response = await fetch(url.posts + (id ? '/' + id : ''))
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// fetchPostId(urlsObj, 1)

async function fetchApiComment(url, id) {
  const response = await fetch(url.comments + (id ? '/' + id : ''))
  try {
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchApiComment(urlsObj, 2)

async function fetchApiAlbums(url, id) {
  try {
    const response = await fetch(url.albums + (id ? '?userId=' + id : ''))
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchApiAlbums(urlsObj, 1)

async function fetchApiPhotos(url, id) {
  try {
    const response = await fetch(url.albums + (id ? '/' + id : ''))
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchApiPhotos(urlsObj, 3)

async function fetchApiUsers(url, limit) {
  try {
    const response = await fetch(url.albums + (limit ? '?_limit=' + limit : ''))
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchApiUsers(urlsObj, 2)

async function fetchApiToDos(url, status, limit) {
  try {
    const response = await fetch(
      url.todos +
        (limit ? '?_limit=' + limit : '') +
        (status ? '?completed=' + status : '')
    )
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
// fetchApiToDos(urlsObj, false, 10)
const div = document.createElement('div')
const names = ['Buddy', 'Bella', 'Charlie', 'Max', 'Luna']

async function fetchDogs(dogNames) {
  try {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)

    if (!response) {
      throw new Error('Bad request')
    }

    const dog = response.json()
    createDogEl(await dog, dogNames)
  } catch (error) {
    console.log(error)
  }
}

function createDogEl(dog, dogName) {
  div.innerHTML = ''

  const index = Math.ceil(Math.random() * 10)
  console.log(index)
  const h3 = document.createElement('h3')
  const img = document.createElement('img')

  h3.innerText = dogName[index - 1]
  img.setAttribute('src', dog.message)

  div.append(h3, img)
  document.body.append(div)
}
fetchDogs(names)
