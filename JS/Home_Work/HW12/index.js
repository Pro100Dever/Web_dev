const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 15 },
]
const res1 = people.map(a => {
  a.age >= 18 ? (a.status = 'взрослый') : (a.status = 'ребенок')
  return a
})
console.log(res1)

const movies = [
  { title: 'Inception', rating: 3.9 },
  { title: 'The Dark Knight', rating: 5.0 },
  { title: 'Interstellar', rating: 3.8 },
  { title: 'The Matrix', rating: 4.5 },
]
movies.forEach(a => {
  if (a.rating > 4) {
    console.log(a.title)
  }
})
