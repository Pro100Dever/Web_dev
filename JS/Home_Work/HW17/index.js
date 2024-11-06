/* // Получение списка пользователей:
// Напишите функцию, которая использует async/await для получения списка пользователей с JSONPlaceholder (https://jsonplaceholder.typicode.com/users).
// Выведите список имен пользователей в консоль.

async function getUser() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(a => a.json())
    .then(a => a.forEach(element => console.log(`User name: ${element.name}`)))
}
getUser()

// Посты определенного пользователя:
// Напишите функцию, которая принимает userId и с помощью async/await получает все посты этого пользователя (https://jsonplaceholder.typicode.com/posts?userId=USER_ID).
// Выведите заголовки постов на страницу.

async function getUserPost(userId) {
  const usersPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
    .then(a => a.json())
    .then(a => a.forEach(b => console.log(`Title: ${b.title}`)))
}
getUserPost(3)

// Комментарии к посту:
// Напишите функцию, которая принимает postId и с помощью async/await получает все комментарии к этому посту (https://jsonplaceholder.typicode.com/comments?postId=POST_ID).
// Отобразите комментарии на странице.

async function getPostId(postId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  )
    .then(a => a.json())
    .then(a => a.forEach(b => console.log(`Comment: ${b.body}`)))
}
getPostId(16)

// Создание нового поста:
// Напишите функцию, которая создает новый пост через POST-запрос на JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
// Используйте async/await и отправьте данные через fetch.
// Выведите ответ сервера в консоль.

async function setPostId(title, body) {
  const post = {
    title: title,
    body: body,
  }
  const newPost = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(post),
  })
  let result = await newPost.json()
  console.log(result)
}
setPostId(1254146, 236136346)

// Обновление поста:
// Напишите функцию для обновления поста (PUT запрос) через JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/POST_ID).
// Используйте async/await и измените, например, заголовок поста.
// Отобразите результат на странице.

async function changePostId(title, POST_ID) {
  const newPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${POST_ID}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ title: title }),
    }
  )
  let result = await newPost.json()
  console.log(result)
}
changePostId(1254146, 2)

// Удаление поста:
// Напишите функцию, которая удаляет пост через async/await (DELETE запрос на https://jsonplaceholder.typicode.com/posts/POST_ID).
// Подтвердите успешное удаление, отобразив сообщение на странице.

async function deletePost(POST_ID) {
  const newPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${POST_ID}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  )
  let result = `Успешно удалено`
  console.log(result)
}
deletePost(2)

// Получение списка задач:
// Напишите функцию, которая с помощью async/await получает список задач (https://jsonplaceholder.typicode.com/todos).
// Отфильтруйте задачи, которые не завершены, и отобразите их на странице.

async function getToDo() {
  const newPost = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(a => a.json())
    .then(a =>
      a.filter(b => {
        if (b.completed === false) {
          console.log(`Not complete task: ${b.title}`)
        }
      })
    )
}
getToDo()

// Фильтрация пользователей по имени:
// Напишите функцию, которая получает список пользователей и фильтрует тех, у кого имя начинается с определенной буквы.
// Используйте async/await для получения данных и отобразите результаты на странице.

async function findUsers(firstNameLeter) {
  const newPost = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(a => a.json())
    .then(a =>
      a.filter(b => {
        if (b.name[0] === firstNameLeter.toUpperCase()) {
          console.log(`Name: ${b.name}`)
        }
      })
    )
}
findUsers('E') */

// Множественные запросы:
// Напишите функцию, которая параллельно запрашивает список пользователей и список постов (Promise.all).
// Используйте async/await и объедините пользователей с их постами по userId.
// Отобразите данные на странице в виде списка.

// Запрос с ошибкой:
// Напишите функцию, которая намеренно делает запрос на несуществующий ресурс на JSONPlaceholder.
// Обработайте ошибку с использованием try/catch и отобразите сообщение об ошибке на странице.
