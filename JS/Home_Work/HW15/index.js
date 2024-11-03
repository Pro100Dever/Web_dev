const saveBtn = document.getElementById('save')
const input = document.getElementById('task')
const box = document.querySelector('.box')

const tasksArr = JSON.parse(localStorage.getItem('tasks')) || []
if (tasksArr) {
  const lastTask = tasksArr[tasksArr.length - 1]?.tasktext
  box.innerText = lastTask || ''
}

saveBtn.addEventListener('click', () => {
  const tasksArr = JSON.parse(localStorage.getItem('tasks')) || []
  const task = { tasktext: input.value }

  tasksArr.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasksArr))

  box.innerText = task.tasktext
  input.value = ''
})
