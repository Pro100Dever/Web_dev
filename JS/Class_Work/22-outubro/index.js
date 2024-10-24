const accList = document.querySelector('.accordion')
accList.addEventListener('click', e => {
  const children = e.target.lastElementChild
  children.classList.toggle('accordion-active')
})

const toggleAccordion = id => {
  const accordion = document.getElementById(id)
  accordion.classList.toggle('accordion-active')
}
// Добавляем обработчики событий для каждого элемента с классом .accordion__top
accList.forEach(accordionTop => {
  accordionTop.addEventListener('click', () => {
    toggleAccordion(accordionTop)
  })
})

acceptCookieBtn.addEventListener('click', () => {
  cookies.style.display = 'none'
})

setTimeout(() => {
  cookies.style.display = 'flex'
}, 15000)
