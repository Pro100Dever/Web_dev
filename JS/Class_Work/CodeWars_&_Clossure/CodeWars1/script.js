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

// const arr = [1, 2, 36, 81, 5, 6, 23, 10]

//решение через рекурсию
function factorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
//решение через хвостовую рекурсию
function factorial2(num, acc = 1) {
  if (num == 1) {
    return acc
  } else {
    return factorial2(num - 1, acc * num)
  }
}
// Простое решение
function factorial1(num) {
  let res = num
  if (num == 1) {
    return 1
  }
  while (num > 1) {
    num--
    res *= num
  }
  return res
}
console.log(factorial1(6))
console.log(factorial2(6))
console.log(factorial(6))

const squareSum = numbers => numbers.reduce((akk, item) => akk + item ** 2, 0)
console.log(squareSum([]))

const reverseWords = str =>
  str.split('').reverse().join('').split(' ').reverse().join(' ')
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('double  spaced  words'))

const number = busStops =>
  busStops.reduce((akk, value) => (akk += value[0] - value[1]), 0)
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
)

const findNeedle = haystack =>
  `found the needle at position ${haystack.indexOf('needle')}`

console.log(
  findNeedle([
    '3',
    '123124234',
    undefined,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ])
)

const findAverage = array =>
  array.length < 1 ? 0 : array.reduce((a, b) => a + b) / array.length
console.log(findAverage([1, 2, 3, 4]))

function alphabetPosition(text) {
  const alfavit = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return text
    .toLowerCase()
    .split('')
    .map(a => alfavit.indexOf(a) + 1)
    .filter(value => value > 0)
    .join(' ')
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m)

// то что я шаманил
// const rowSumOddNumbers = n => {
//   let size = checkSize(n)
//   return (size * 2 - n) * n
// }
// function checkSize(n, acc = 1) {
//   if (n === 1) {
//     return acc
//   } else {
//     return checkSize(n - 1, n + acc)
//   }
// }

//как делают нормальные люди
const rowSumOddNumbers = n => n ** 3
console.log(rowSumOddNumbers(5)) // 125

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))

function high(x) {
  const alfavit = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const res = x.split(' ')
  const sum = res.map(a =>
    a.split('').reduce((acc, b) => acc + (alfavit.indexOf(b) + 1), 0)
  )
  return res[sum.indexOf(Math.max(...sum))]
}
console.log(high('man i need a taxi up to ubud'))
