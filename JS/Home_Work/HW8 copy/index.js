const btn1 = document.getElementById('btn1')
const btn3 = document.getElementById('btn3')
const input = document.getElementById('input')
const box = document.querySelector('.box')

box.addEventListener('click', e => {
  e.preventDefault()
  const atribut = e.target.getAttribute('id')
  if (atribut === 'btn1') {
    input.value++
  }
  if (atribut === 'btn3') {
    input.value--
  }
  if (!atribut) {
    input.value = 0
  }
})
