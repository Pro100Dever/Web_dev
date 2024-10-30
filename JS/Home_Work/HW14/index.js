const product = [
  { name: 'apple', price: 51 },
  { name: 'bob', price: 35 },
  { name: 'watermelon', price: 29 },
  { name: 'cherry', price: 48 },
  { name: 'milk', price: 22 },
]
const res = product.some(a => a.price > 50)
console.log(res)
