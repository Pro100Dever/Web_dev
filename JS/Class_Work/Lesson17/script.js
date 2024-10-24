const products = [
  { name: 'Product 1', price: 100, quantity: 2 },
  { name: 'Product 2', price: 50, quantity: 0 },
  { name: 'Product 3', price: 200, quantity: 1 },
  { name: 'Product 4', price: 30, quantity: 5 },
]
const mapProd = products
  .map(item => item.price * item.quantity)
  .filter(item => item > 0)
  .reduce((akk, item) => akk + item)
console.log(mapProd)
