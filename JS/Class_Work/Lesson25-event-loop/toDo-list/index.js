const getBtn = document.querySelector('.getAllBtn')
const container = document.getElementById('container')
let counter = 0

const fetchTodos = async () => {
  try {
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    const { todos } = data
    const lastId = todos.reduce(
      (max, currentValue) => (currentValue.id > max ? currentValue.id : max),
      0
    )
    counter = lastId
    console.log(counter)

    return todos
  } catch (error) {
    console.error(error)
    return []
  }
}
fetchTodos()

const renderTodos = async () => {
  const todos = await fetchTodos()
  todos.map(todo => {
    const element = createTodoElement(todo)
    container.append(element)
  })

  const removeBtn = document.querySelector('.remove-btn')
  const form = document.getElementById('form')

  removeBtn.style.display = 'block'
  getBtn.style.display = 'none'
  form.append(removeBtn)
}

function removeRemoveBtn(el) {
  el.style.display = 'none'
  const todoList = container.querySelectorAll('.todo')
  todoList.forEach(e => e.remove())
  getBtn.style.display = 'block'
}

const createTodoElement = todo => {
  const el = document.createElement('div')
  el.className = 'todo'
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = Boolean(todo.completed)
  checkbox.name = 'checkbox_' + todo.id
  checkbox.id = 'checkbox_' + todo.id
  checkbox.addEventListener('change', () => {
    const label = document.getElementById('label_' + todo.id)
    label.classList.toggle('todo__label--done')
  })
  const label = document.createElement('label')
  label.id = 'label_' + todo.id
  label.htmlFor = checkbox.id
  //передаем задачу в лейбл
  label.innerHTML = todo.todo
  if (checkbox.checked) {
    label.classList.add('todo__label--done')
  }
  el.append(checkbox, label)
  return el
}

const renderSigleTodo = todo => {
  const el = createTodoElement(todo)
  document.getElementById('container').append(el)
}

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault()
  console.log(counter)

  writeNewTodo(e.target.elements.input.value)
  e.target.reset()
})

const writeNewTodo = async todo => {
  try {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo,
        completed: false,
        userId: 5,
      }),
    })
    const data = await response.json()
    counter++
    data.id = counter
    console.log(data)

    renderSigleTodo(data)
  } catch (error) {
    console.error(error)
  }
}
