const url = 'https://jsonplaceholder.typicode.com/todos/'
const newTask = {
  title: 'Task',
  completed: false,
}

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(newTask),
})
  .then(a => a.json())
  .then(b => console.log(b))

const url1 = 'https://jsonplaceholder.typicode.com/todos'
fetch(url1)
  .then(a => a.json())
  .then(b => console.log(b))

//==============================
const url3 = 'https://jsonplaceholder.typicode.com/photos'
async function getImg(limit) {
  const images = await fetch(url3 + '?_limit=' + limit)
    // const images = await fetch(`${url3}?_limit=${limit}`)
    .then(a => a.json())
    .then(b => b.forEach(element => setImageOnPage(element.url)))
}
getImg(4)

function setImageOnPage(imgUrl) {
  const img = document.createElement('img')
  img.src = imgUrl
  img.style.width = '100px'
  img.style.height = '100px'
  img.style.border = '1px solid black'
  document.body.append(img)
}

//===============================================
const url4 = 'https://jsonplaceholder.typicode.com/posts?_limit=20'
fetch(url4)
  .then(a => a.json())
  .then(b =>
    b.forEach(item => {
      setCommentOnPage(item.title, item.body)
    })
  )

function setCommentOnPage(title, text) {
  const list = document.querySelector('.list')
  const li = document.createElement('li')
  const titleText = document.createElement('h3')
  const commentText = document.createElement('p')

  titleText.innerText = 'Title: ' + title
  commentText.innerText = 'Comment: ' + text

  li.append(titleText, commentText)
  list.append(li)
  document.body.append(list)
}
