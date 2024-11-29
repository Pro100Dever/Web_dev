const posts = 'https://jsonplaceholder.typicode.com/posts/'
const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-rihgt')
let counter = 1

async function fetchPost(id) {
  try {
    const response = await fetch(posts + id)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    renderPost(data)
  } catch (error) {
    console.log(error)
  }
}

fetchPost(counter)

function renderPost(post) {
  const div = document.querySelector('.root')
  div.innerHTML = `
  <div>
    <p>${post.id}</p>
    <p>${post.title}</p>
    <p>${post.body}</p>
  </div>
  `
}

btnLeft.addEventListener('click', () => {
  if (counter > 1) {
    counter--
    fetchPost(counter)
  }
})

btnRight.addEventListener('click', () => {
  counter++
  fetchPost(counter)
})
