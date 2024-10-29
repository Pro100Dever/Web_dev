const count = document.querySelector('.count')
const button = document.getElementById('btn1')
const box = document.querySelector('.box')
button.addEventListener('click', e => {
  e.preventDefault()
  box.innerHTML = ''
  count.innerText++

  if (count.innerText % 5 === 0) {
    count.style.background = GenerateRGB()
  }

  if (count.innerText % 10 === 0) {
    const h3 = document.createElement('h3')
    h3.innerText = `Поздравляем! Вы достигли ${count.innerText} кликов!`
    box.append(h3)
    document.body.append(box)
  }
})
function GenerateRGB() {
  const r = Math.random() * 256
  const g = Math.random() * 256
  const b = Math.random() * 256
  return `rgb(${r},${g},${b})`
}
