const posts = 'https://jsonplaceholder.typicode.com/posts'
const div = document.querySelector('.root')

async function fetchPost() {
  try {
    const response = await fetch(posts + '?_limit=20')
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    renderPost(data)
  } catch (error) {
    console.log(error)
  }
}

function renderPost(posts) {
  posts.forEach(post => {
    const postContainer = document.createElement('div')
    postContainer.classList.add('post')
    postContainer.innerHTML = `
    <div class="post__content">
      <p>${post.id}</p>
      <p><span>Title:</span> ${post.title}</p>
      <p><span>Description:</span> ${post.body}</p>
    </div>
    <button><img src="close.svg" alt="icon" ></button>
  </div>
  `
    div.append(postContainer)
    postContainer
      .querySelector('button')
      .addEventListener('click', () => postContainer.remove())
  })
}
fetchPost()
