// const btn = document.getElementById('btn')

// 1. e.addEventListener - вызываем слушатель собыия, он принимает 2 аргумента: событие (напрю. "clicl" и слушатель (listener). Listener - это коллбек () => {})

// 2. e.target - внутрености вашего елемнеа, то из каких свойств состоит этот обьект (елемент)

// 3 При работе с формами нужно сбрасывать дефолтное поведение, напр. e.preventDefault()

// 4. Существуют меоды добавление или удаления елементов из ДОМ дерева: append(), prepend(), remove(), lastChild(), appendChild(), textContent(), innerText, innerHTML()

/* 5. style
// Если много стилей то лучше setAttribute вместо e.style
btn.addEventListener('click', () => {
  document.body.style.background = 'red'
}) */
// btn.addEventListener('click', () => {
//   btn.setAttribute('style', `width: 100px`)

/*   btn.style.cssText = `
  background-color:pink;
  font-size:55px
  ;border:2px dashed green;
  color:white;
  ` */

//   btn.style.color = 'red'
// })

document.addEventListener('DOMContentLoaded', () => {
  const box3 = document.createElement('div')
  const btn2 = document.createElement('button')
  btn2.textContent = 'Click'
  btn2.addEventListener('click', () => {
    btn2.setAttribute(
      'style',
      `
        width:200px;
        height:200px;
        background: blue;
        `
    )
  })
  box3.setAttribute('id', 'dynamicElement')
  box3.append(btn2)
  document.body.append(box3)
})
