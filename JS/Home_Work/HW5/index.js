const box = document.querySelector('.box')
const box2 = document.querySelector('.box2')
const body = document.querySelector('body')
const list = document.querySelector('ul')
// ================================1
const addParagraph = text => {
  const paragraph = document.createElement('p')
  paragraph.textContent = text
  body.append(paragraph)
}
addParagraph('Hello world!')
// ================================2
const changeTitle = text => {
  const title = document.querySelector('h1')
  title.textContent = text
  return title
}
changeTitle('AbraCadabra')
// ===============================3
const addListItem = text => {
  const listItem = document.createElement('li')
  listItem.className = 'list__item'
  listItem.textContent = text
  list.append(listItem)
  return list
}
addListItem('New Item')
// ===============================4
const replaceContent = text => {
  const content = document.getElementById('content')
  content.innerHTML = `${text}`
}
replaceContent('New Content')
// ===============================5 ???
addButton()
function addButton() {
  const button = document.createElement('button')
  button.textContent = 'Click me'
  box2.append(button)
}
// ===============================6
removeElement()
function removeElement() {
  const removeItem = document.querySelector('.to-remove')
  removeItem.remove()
}
// ===============================7
addNewHeader()
function addNewHeader() {
  const header = document.createElement('h2')
  header.textContent = 'New Header'
  body.prepend(header)
}
// ===============================8
function insertBeforeItem() {
  const listItem = document.createElement('li')
  listItem.className = 'list__item'
  listItem.textContent = `Before First`
  list.prepend(listItem)
  return list
}
insertBeforeItem()
// ===============================9
changeStyle()
function changeStyle() {
  const item = document.querySelector('.styled')
  item.style = 'color:red'
}
// ==============================10
addNestedDiv()
function addNestedDiv() {
  const newDiv = document.createElement('div')
  const paragraph = document.createElement('p')
  paragraph.textContent = `Nested Paragraph`
  newDiv.append(paragraph)
  body.append(newDiv)
}
