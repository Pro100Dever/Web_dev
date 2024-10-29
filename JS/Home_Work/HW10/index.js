const produkt = [
  { produktName: 'Motorsäge', category: 'electronics', price: 300 },
  { produktName: 'Potato', category: 'gemuse', price: 2 },
  { produktName: 'Apfel', category: 'obst', price: 5 },
  { produktName: 'Laptop', category: 'electronics', price: 1400 },
  { produktName: 'Nudel', category: 'eat', price: 5 },
  { produktName: 'Nutella', category: 'eat', price: 5 },
]

//Зaчем тут еще и мап нужен?
// const res = produkt
//   .filter(a => a.category === 'electronics')
//   .map(a => a.price)
//   .reduce((akk, num) => akk + num)
console.log(
  produkt
    .filter(a => a.category === 'electronics')
    .reduce((akk, num) => akk + num.price, 0)
)
//=================================

const student = [
  { studentName: 'Vasya', avaragePunkt: 67 },
  { studentName: 'Eugene', avaragePunkt: 78 },
  { studentName: 'Adil', avaragePunkt: 45 },
  { studentName: 'Alex', avaragePunkt: 71 },
  { studentName: 'Luxa', avaragePunkt: 64 },
]
const resStud = student.find(a => a.avaragePunkt > 80)
if (!resStud) {
  student.unshift({ studentName: 'NewStudent', avaragePunkt: 85 })
}
console.log(resStud || student)
//=================================

const produkt2 = [
  { produktName: 'Motorsäge', count: 2, price: 300 },
  { produktName: 'Potato', count: 15, price: 2 },
  { produktName: 'Apfel', count: 10, price: 5 },
  { produktName: 'Laptop', count: 0, price: 1400 },
  { produktName: 'Nudel', count: 3, price: 5 },
  { produktName: 'Nutella', count: 2, price: 5 },
]
console.log(
  produkt2
    .filter(a => a.count > 0)
    .map(a => a.count * a.price) // И снова лишний метод
    .reduce((a, b) => a + b)
)
//=================================
const aufgaben = [
  { aufgabe: 'kaufen Motorsäge', completed: true },
  { aufgabe: 'eat Potato', completed: true },
  { aufgabe: 'trink Apfelsaft', completed: false },
  { aufgabe: 'Laptop arbeit', completed: false },
  { aufgabe: 'Nudel lunch', completed: true },
]
const check = aufgaben.filter(a => a.completed === false).map(a => a.aufgabe)
if (check.length <= 0) {
  aufgaben.unshift({ aufgabe: 'new aufgabe', completed: false })
  console.log(aufgaben)
} else {
  console.log(check)
}
//=================================
const student2 = [
  { studentName: 'Vasya', punkt: [90, 75, 72, 67, 41, 93, 63, 92] },
  { studentName: 'Eugene', punkt: [45, 55, 72, 71, 58, 55, 23, 92] },
  { studentName: 'Adil', punkt: [51, 55, 72, 10, 45, 91, 23, 92] },
  { studentName: 'Alex', punkt: [21, 55, 72, 60, 49, 62, 83, 92] },
  { studentName: 'Luxa', punkt: [80, 95, 72, 63, 73, 94, 53, 92] },
]
const newArr = student2
  .map(a => {
    a.avaragePunkt2 = a.punkt.reduce((a, b) => a + b) / a.punkt.length
    return a
  })
  .filter(a => a.avaragePunkt2 > 70)
  .reduce((a, b, _, arr) => a + b.avaragePunkt2 / arr.length, 0)
console.log(newArr)
