const movies = [
  { title: 'Inception', year: 2010 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'Interstellar', year: 2014 },
  { title: 'The Matrix', year: 1999 },
]
const res1 = movies.sort((a, b) => a.year - b.year)
console.log(res1)

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
]
const res2 = people.reduce(
  (akk, item, index) => akk + (index > 0 ? ', ' : '') + item.name,
  ''
)
console.log(res2)
