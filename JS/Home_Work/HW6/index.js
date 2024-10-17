//=====================================1
const btn = document.createElement('button')
btn.textContent = 'Click me'
document.body.appendChild(btn)
btn.addEventListener('click', () => (btn.textContent = 'Button clicked'))
//=====================================2-3
/* const list = document.createElement('ul')
document.body.append(list)
for (let i = 0; i < 3; i++) {
  const listItem = document.createElement('li')
  const listItemBtn = document.createElement('button')
  listItem.textContent = `${i + 1}`
  listItemBtn.textContent = 'Delete'
  listItemBtn.onclick = () => listItem.remove()
  listItem.append(listItemBtn)
  list.append(listItem)
}
const listBtn = document.createElement('button')
listBtn.textContent = 'Create list'
document.body.append(listBtn)
listBtn.addEventListener('click', () => {
  const listItem2 = document.createElement('li')
  listItem2.textContent = 'New List'
  list.append(listItem2)
}) */
//====================================4
const box = document.createElement('div')
box.textContent = 'Click to toggle'
box.className = 'box'
document.body.append(box)
box.addEventListener('click', () => box.classList.remove('box'))
//=====================================5
const btn3 = document.getElementById('img')
const box3 = document.querySelector('.imgs')
btn3.addEventListener('click', () => {
  const img1 = document.createElement('img')
  img1.setAttribute('src', './img/image.png')
  box3.append(img1)
})
//=====================================6
const list3 = document.querySelector('.list')
for (let i = 0; i < 3; i++) {
  const listItem = document.createElement('li')
  listItem.textContent = `Text ${i + 1}`
  list3.append(listItem)
  listItem.addEventListener('click', () => {
    listItem.textContent = `Clicked`
  })
}
//=====================================7
const btnCount = document.createElement('button')
btnCount.textContent = 'Click Aufgabe 7'
list3.insertAdjacentElement('afterend', btnCount)

let count = 0
const paragraph = document.createElement('p')
paragraph.textContent = count
btnCount.insertAdjacentElement('afterend', paragraph)

btnCount.addEventListener('click', () => (paragraph.textContent = count += 1))
//=====================================8
const list8 = document.createElement('ul')
document.body.append(list8)

const createListItemBtn = document.createElement('button')
createListItemBtn.textContent = 'Add element'
document.body.append(createListItemBtn)

createListItemBtn.addEventListener('click', () => {
  createNewListItem()
})

function createNewListItem() {
  const newListItem = document.createElement('li')
  newListItem.textContent = 'New Item'

  const deleteListItemBtn = document.createElement('button')
  deleteListItemBtn.textContent = 'Delete'
  deleteListItemBtn.addEventListener('click', () => newListItem.remove())

  newListItem.append(deleteListItemBtn)
  list8.append(newListItem)
}
//=====================================9
const hideText = document.createElement('p')
hideText.textContent = 'Random text'
hideText.classList.add('hide')
document.body.append(hideText)

const showBtn = document.createElement('button')
showBtn.textContent = 'Show text'
document.body.append(showBtn)
showBtn.addEventListener('click', () => {
  hideText.style.display = 'block'
  // hideText.classList.toggle('hide')
})
//=====================================10
const arr = ['./img/image.png', './img/meme.jpg']
const image = document.createElement('img')
image.setAttribute('src', arr[0])
document.body.append(image)

const changeBtn = document.createElement('button')
changeBtn.textContent = 'Change'
document.body.append(changeBtn)

changeBtn.addEventListener('click', () => {
  image.getAttribute('src') === './img/image.png'
    ? image.setAttribute('src', arr[1])
    : image.setAttribute('src', arr[0])
})
