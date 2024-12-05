const navBtnHome = document.getElementById('home')
const navBtnAbout = document.getElementById('about')
const navBtnCats = document.getElementById('cats')
const navBtnPost = document.getElementById('posts')

const posts = document.getElementById('posts-container')

async function fetchPostsAPI(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data

  // postTitle.innerText= `${data}`
}
fetchPostsAPI(2)

navBtnPost.addEventListener('click', () => {
  const aktive = posts.classList.toggle('aktive')
  if (!aktive) {
    posts.style.display = 'none'
  } else {
    posts.style.display = 'block'
  }
})
