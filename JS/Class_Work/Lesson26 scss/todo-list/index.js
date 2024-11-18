const createForm = document.querySelector('#create-form')
const modalForm = document.querySelector('.modal-form')
const openModalForm = document.querySelector('.float-button')
const searchInput = document.querySelector('.search-field__input')

//достаем из ЛХ массив туду
const getTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem('todosStorage'))

  return localStorageTodos
}

//создание новой задачи
const createTodo = e => {
  e.preventDefault()

  //достаем поле даты из значения инпута
  const startDate = document.querySelector('#startDate').value
  //достаем поле описания задачи из значения инпута
  const description = document.querySelector('#description').value
  //передаем в переменную результат возврата функции получения данных о туду с ЛХ
  const localStorageTodos = getTodos()
  //создаем объект с новой задачей
  const newTodo = {
    //id - уникальный идентификатор по которому мы определяем определенный (уникальный) элемент
    id: 'todo_' + Math.random().toString(16).slice(2),
    createAt: new Date(),
    startDate,
    description,
    done: false,
  }
  //базовая проверка на то, что в ЛХ что то присутствует и это что - то массив
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    //если присутствует, то кладем созданный объект в массив полученный из ЛХ
    localStorageTodos.push(newTodo)
    //Переписываем лх на новый массив с вновь созданным объектом внутри.
    //То есть было например 3 объекта в массиве при добавлении еще одного, переписываем в ЛХ с 3 на 4 объектов
    localStorage.setItem('todosStorage', JSON.stringify(localStorageTodos))
  } else {
    localStorage.setItem('todosStorage', JSON.stringify([newTodo]))
  }

  //вызываем функцию которая рендерит все тудушники по клику
  renderTodos()
}

searchInput.addEventListener('input', e => {
  renderTodos(null, e.target.value)
})

// функция отобржания задачи в спике дел
const renderTodos = (filterType, searchText) => {
  const localStorageTodos = getTodos()
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    const container = document.querySelector('#todo-list')
    //чистим разметку перед созданием новой задачи
    container.innerHTML = ''

    const filterTodos = localStorageTodos.filter(todo => {
      if (filterType === 'filter-active') {
        return !todo.done
      }
      if (filterType === 'filter-done') {
        return todo.done
      }
      return true
    })

    const filterTodoItem = searchText
      ? filterTodos.filter(todo => todo.description.includes(searchText))
      : filterTodos
    //проходимся по массиву задач
    filterTodoItem.forEach(todo => {
      //обработка времени из поля даты
      const startDate = new Date(todo.startDate).toLocaleString('en-EN', {
        day: 'numeric',
        month: 'long',
        hour: 'numeric',
        minute: 'numeric',
      })
      //получаем айдишник из объекта задачи
      const id = todo.id
      container.insertAdjacentHTML(
        'beforeend',
        `
            <li class="todo-block">
            <label class="checkbox" for="${id}" onclick="toggleTodoDone('${id}')">
                <input type="checkbox" name="${id}" id="${id}" ${
          todo.done ? 'checked' : ''
        }/>
                <span class="material-symbols-rounded checkbox__check-icon">
                    check
                </span>
                
            </label>
            <div class="todo-block__data">
                <p class="todo-block__date">${startDate}</p>
                <h3 class="todo-block__title">${todo.description}</h3>
            </div>
            <span class="material-symbols-rounded" onclick="deleteTodo('${id}')">
                <img src="./img/mdi_remove-outline@2x.svg" alt="">
            </span>
          </li>
                `
        //В данной разметке мы используем инлайн слушатель события. В deleteTodo мы передаем id созданного
        //элемента и по нему реализуем функционал удаления в функции через метод filter
      )
    })
  }
}

//функционал удаления задачи
const deleteTodo = todoId => {
  const localStorageTodos = getTodos()
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    //тут сравнивается айди каждого поста из массива задач с айди элемента на который мы кликнули
    //функция прокидывается в span иконку удаления задачи чуть повыше
    const newTodos = localStorageTodos.filter(todo => todo.id !== todoId)
    //и переписывается список задач, в ЛХ попадают только те задачи которые остались после удаления
    localStorage.setItem('todosStorage', JSON.stringify(newTodos))
  }
  //снова вызываем рендер для отображения свежего списка задач уже без тех, которые мы удалили
  renderTodos()
}

createForm.addEventListener('submit', e => {
  e.preventDefault()
  //закрываем модалку по клику на сабмит
  modalForm.style.display = 'none'
  createTodo(e)
})

//открываем модалку
openModalForm.addEventListener('click', () => {
  modalForm.style.display = 'flex'
})

//закрываем модалку, по клику на любой элемент modalForm кроме содержащегося внутри createForm и любых дочерних элементов
// merci beacoup Vladimir
modalForm.addEventListener('click', e => {
  const childrens = e.target.contains(createForm)
  if (e.target !== createForm && childrens) {
    modalForm.style.display = 'none'
  }
})

const toggleTodoDone = id => {
  const localStorageTodos = getTodos()
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    const doneTodos = localStorageTodos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo
    })
    localStorage.setItem('todosStorage', JSON.stringify(doneTodos))
  }
  const buttonActive = document.querySelector('split-button__button--active')
  console.log(buttonActive.id)

  renderTodos()
}

const splitButtonClickHandler = button => {
  const buttonTab = document.querySelectorAll('.split-button__button')
  buttonTab.forEach(button => {
    button.classList.remove('split-button__button--active')
  })
  button.classList.add('split-button__button--active')
  let filterType = button.id
  renderTodos(filterType)
}
//снова вызываем функцию рендера для того чтоб у нас всегда сохранялись элементы на странице согласно ЛХ
renderTodos()
