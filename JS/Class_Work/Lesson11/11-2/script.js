const btn = document.querySelector('#btn')

/* btn.addEventListener('click', function () {
  console.log('hello world')
}) */
btn.addEventListener('click', () => {
  console.log('hello world')
})

const arr = ['one', 'two', 'three']

const list = document.createElement('ul')

const btn2 = document.getElementById('btn2')
document.body.insertAdjacentElement('afterbegin', list)

btn2.addEventListener('click', () => {
  for (let item of arr) {
    const listItem = document.createElement('li')
    listItem.textContent = item
    list.append(listItem)
  }
})

const paragraph = document.querySelector('p')

/* paragraph.addEventListener('click', function click() {
  paragraph.textContent = 'New text'
}) */

paragraph.onclick = () => {
  paragraph.textContent = 'New text2'
}
