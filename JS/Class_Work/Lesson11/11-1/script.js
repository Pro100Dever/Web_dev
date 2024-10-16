const container = document.querySelector('.container')

/* const createNewItem = element => {
  const newEl = document.createElement(element)
  return newEl
}
 */
/* const newList = createNewItem('ul') */

//====================================
const text = 'Hello???'
// Можно вот так пихать много чего но не рекомендуется
/* container.insertAdjacentHTML(
  'afterend',
  `<div>Hallo</div>
    <h3>${text}</h3>`
)
newList.innerHTML = 'goodbuy'
container.append(newList) */
//=====================================
const arr = [
  { id: 1, title: 'Hello world', description: 'desc1' },
  { id: 2, title: 'Hello world2', description: 'desc2' },
  { id: 3, title: 'Hello world3', description: 'desc3' },
]

/* 
for (let i = 0; i < arr.length; i++) {
  const li = createNewItem('li')
  const title = createNewItem('h3')
  title.textContent = arr[i].title
  const description = createNewItem('p')
  description.textContent = arr[i].description
  const strong = createNewItem('strong')
  strong.textContent = `id for this el: ${arr[i].id}`
  li.append(title, description, strong)
  newList.append(li)
}
container.append(newList)
 */

/* const newArr = ['first title', 'second title', 'third title']

const list = document.createElement('ul')
for (let item of newArr) {
  const listItem = document.createElement('li')
  listItem.textContent = item
  list.append(listItem)
}
container.append(list) */

const tasks = ['Task 1', 'Task 2', 'Task 3']
const list1 = document.createElement('ul')
for (let item1 of tasks) {
  const listItem = document.createElement('li')
  listItem.textContent = item1
  list1.append(listItem)
}
container.append(list1)
list1.lastChild.remove()
