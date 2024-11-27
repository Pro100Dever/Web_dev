// const showDialogBtn = document.querySelector('#show-dialog-btn')
// const myDialog = document.querySelector('#my-dialog')
// const closeDialogBtn = document.querySelector('#close-dialog-btn')

// showDialogBtn.addEventListener('click', () => {
//   myDialog.showModal()
// })

// closeDialogBtn.addEventListener('click', () => {
//   myDialog.close()
// })

// const canvas = document.querySelector('#canvas')
// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(10, 10, 100, 120)
// console.log([canvas.getContext('2d')]);
// const ctx = canvas.getContext('2d')
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(0, 0, 150, 150)
// ctx.clearRect(0, 0, 50, 50)
// const ctx = canvas.getContext('2d')
// ctx.fillStyle = 'rgb(200, 0, 0)'
// ctx.fillRect(25, 25, 100, 100)
// ctx.strokeStyle = 'pink'
// ctx.strokeRect(50, 50, 150, 25)
//рисуем линию
// ctx.beginPath()
// ctx.moveTo(75, 50)
// ctx.lineTo(150, 50)
// ctx.strokeStyle = 'red'
// ctx.stroke()
//рисуем треугольник
// ctx.beginPath()
// ctx.moveTo(75, 50)
// ctx.lineTo(50, 25)
// ctx.lineTo(100, 25)
// ctx.fillStyle = 'red'
// ctx.fill()
// рисуем дугу
// ctx.beginPath()
// ctx.arc(30, 30, 25, 0, 5)
// ctx.lineWidth = 3
// ctx.stroke()

const list = document.createElement('ul')
document.body.append(list)

async function fetchPostApi() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    renderList(data)
  } catch (error) {
    console.log(error)
  }
}

async function renderList(posts) {
  await posts.forEach(element => {
    const listItem = document.createElement('li')
    listItem.className = 'post'
    listItem.innerHTML = `
      <div>
        <p>title: ${element.title}</p>
        <p>description: ${element.body}</p>
      </div>
      <img src="kpipiskalisaiyure 1.png" alt="png" />
    `
    list.append(listItem)
  })
}
fetchPostApi()
