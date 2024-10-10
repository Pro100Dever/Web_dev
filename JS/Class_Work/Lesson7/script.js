const myCats = [
  {
    kittyName: 'Dynya',
    age: 36,
    color: 'brown',
    habits: [
      'love treats',
      'spend time on balcony',
      'eat cucumeber',
      {
        loveToPlayWith: [
          'little mouse',
          'fat dog',
          'doll',
          {
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
            option4: ['item1', 'item2', 'item3'],
          },
        ],
      },
    ],
    playful: true,
    bonus: 'beautiful tail',
    paws: 4,
  },
  {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
      id: 34234,
      address: {
        city: 'Munchen',
        country: 'Germany',
        street: 'Avenida Portgual 1288',
        ZIP: '04559-002',
      },
    },
  },
]

/* console.log(myCats[0].habits[3].loveToPlayWith[3].option4[1]) */
/* const x = 100
const y = 200

if (y > x) {
  sum('not error', x, y)
} else {
  sum('error')
}

function sum(error, numA, numB) {
  if (numA === undefined || numB === undefined) {
    console.log(error)
  }
  console.log(numA + numB)
}

// 1. Обьявление главной функции
function hello(callbackHi) {
  return callbackHi
}

// 2. Функция что используется как callback
function sayHello(string) {
  string += ' Hello hello'
  return string
}
let res = hello(sayHello('hello world!')) // 3. вызывается функция hello c аргументом функция sayHello
console.log(res) */

/* function greet() {
  console.log('hello world')
}
greet()

function square(num, n) {
  num = num ** n
  console.log(num)
}
square(5, 2)

function isEven(num) {
  num % 2 === 0 ? console.log(`Odd`) : console.log('Even')
}
isEven(121)

function concatenate(str1, str2) {
  console.log(`${str1} ${str2}`)
}
concatenate('hallo', 'world')
 */

const person = {
  name: 'dsg',
  age: 5,
  greet: str => {
    console.log(str)
  },
}
console.log(person)
person.greet('hello')

function multiply(num1, num2) {
  return num1 * num2
}
const result = multiply(2, 45)
console.log(result)

const result1 = (num1, num2) => num1 * num2
console.log(result1(10, 50))

const calculator = {
  add: (num1, num2) => {
    console.log(num1 + num2)
  },
  subtract: (num1, num2) => {
    console.log(num1 - num2)
  },
  multiply: (num1, num2) => {
    console.log(num1 * num2)
  },
  divide: (num1, num2) => {
    console.log(num1 / num2)
  },
}

function sum(arr, value) {
  let count = 0
  for (let key of arr) {
    if (key === value) {
      count += 1
    }
  }
  return count
}
const arr1 = [1, 4, 7, 9, 2, 4, 5, 2, 2]
console.log(sum(arr1, 2))
