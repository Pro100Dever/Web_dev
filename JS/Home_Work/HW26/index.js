const colors = ['#ff0000', '#00ff00', '#0000ff']

setInterval(renderBcCollor, 1000)

function renderBcCollor() {
  const rand = Math.floor(Math.random() * 3)
  document.body.style.background = colors[rand]
}
