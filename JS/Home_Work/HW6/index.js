//=====================================1
const btn = document.createElement('button')
btn.textContent = 'Click me'
document.body.appendChild(btn)
btn.addEventListener('click', () => (btn.textContent = 'Button clicked'))
//=====================================2-3
const list = document.createElement('ul')
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
})
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
