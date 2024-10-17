const box = document.querySelector('.box')
box.addEventListener('mouseover', () => {
  box.classList.toggle('fokus')
})
box.addEventListener('mouseout', () => {
  box.classList.toggle('fokus')
})

const colorButton = document.getElementById('colorButton')
const colorBlock = document.getElementById('colorBlock')
colorButton.addEventListener('click', () => {
  colorBlock.style.background = GenerateRGB()
  // `rgb(${Math.random() * 256} ,${Math.random() * 256},${Math.random() * 256}`
})

function GenerateRGB() {
  const r = Math.random() * 256
  const g = Math.random() * 256
  const b = Math.random() * 256
  return `rgb(${r},${g},${b})`
}
