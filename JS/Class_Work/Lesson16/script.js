const animals = ['cat', 'dog', 'rabbit']
console.log(animals)
const animalsRes = animals.pop()
console.log(animals)
console.log(animalsRes)

const letters = ['A', 'B', 'C']
console.log(letters)
const lettersRes = letters.pop()
console.log(letters)
console.log(lettersRes)

console.log('========FILTER=======')
//=============FILTER=============
const letters1 = ['A', 'B', 'C', 1, 6, 2, -4, 0]
// Принимает: колбекк фн(element, index, array)
// Cоздаёт новый массив со всеми элементами, прошедшими проверку
const resultFilter = letters1.filter(Number)
console.log(resultFilter)

const arrObj = [
  {
    id: 1,
    title: 'hello',
    description: 'helo world',
    completed: true,
  },
  {
    id: 2,
    title: 'hello',
    description: 'helo world',
    completed: false,
  },
  {
    id: 3,
    title: 'hello',
    description: 'helo world',
    completed: true,
  },
  {
    id: 4,
    title: 'hello',
    description: 'helo world',
    completed: false,
  },
  {
    id: 5,
    title: 'hello',
    description: 'helo world',
    completed: false,
  },
  {
    id: 6,
    title: 'hello',
    description: 'helo world',
    completed: true,
  },
  {
    id: 7,
    title: 'hello',
    description: 'helo world',
    completed: false,
  },
  {
    id: 8,
    title: 'hello',
    description: 'helo world',
    completed: false,
  },
]
const filterObjs = arrObj.filter(item => item.completed)
console.log(filterObjs)

const numbers = [-2, 5, -8, 10, -3, 7]
const resNumber = numbers.filter(item => item > 0)
console.log(resNumber)

const numbers2 = [9, 12, 5, 18, 7, 24]
const resNumber2 = numbers2.filter(item => item % 3 === 0)
console.log(resNumber2)

const resObj = arrObj.filter(item => item.id > 4)
console.log(resObj)

console.log('========SORT=======')
// ==============SORT===============
// Принимает: compareFunction
// сортирует элементы массива и возвращает отсортированный массив. (Не новый)
const randomNumArr = [4, 2, 8, 10, 23, 5, 8]
const orderArr = randomNumArr.sort((a, b) => a - b)
console.log(orderArr)

const randomLetters = ['g', 'b', 'c', 'a', 'k', 'l']
console.log(randomLetters.sort())

let array = [4, 2, 5, 1, 3]
const resSort = array.sort((a, b) => b - a)
console.log(resSort)

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
]

const resSort1 = people.sort((a, b) => a.age - b.age)
console.log(resSort1)

let array5 = [1, 2, 3, 4, 5]
console.log(array5.filter(item => item % 2 === 0))

const words = ['apple', 'banana', 'kiwi', 'orange', 'grape']
const resWords = words.sort((a, b) => a.length - b.length)
console.log(resWords)

const numbers5 = [10, 5, 8, 2, 7, 3]
console.log(numbers5.sort((a, b) => b - a))

// const numbers6 = [15, 7, 28, 3, 42, 10]
// const minRange = 10
// const maxRange = 30
// function newArr(min, max, arr) {
//   console.log(arr.filter(item => item > min && item < max))
// }
// function newArr(min, max, arr) {
//   return arr.filter(item => item > min && item < max)
// }

const randomNumArr1 = [4, 2, 8, 10, 23, 5, 8]

// const res = randomNumArr.sort((a, b) => a - b)
// console.log(res);

for (let i = 0; i < randomNumArr1.length; i++) {
  console.log(randomNumArr1[i])
  for (let j = 0; j < randomNumArr1.length; j++) {
    if (randomNumArr1[j] < randomNumArr1[j - 1]) {
      let temp = randomNumArr1[j]
      randomNumArr1[j] = randomNumArr1[j - 1]
      randomNumArr1[j - 1] = temp
    }
  }
}

console.log(randomNumArr1)

console.log('========SHIFT=======')
// ==============SHIFT===============
// Принимает none
// удаляет первый элемент из массива и возвращает его значение

console.log('========UNSHIFT=======')
// ==============UNSHIFT===============
// Принимает: один или более элементов
// добавляет елемент(ы) в начало массива и возвращает длину массива

console.log('==========REDUCE===========')
// ==============REDUCE===============
const numbers7 = [5, 10, 15, 20]
const redNum = numbers7.reduce((akk, item) => akk + item)
console.log(redNum)

const words2 = ['Hello', ' ', 'world', '!']
const redwords = words2.reduce((akk, item) => akk + item)
console.log(redwords)

const numbers8 = [14, 5, 22, 8, 45, 11]
// const redNum2 = numbers8.reduce((akk, item) => Math.max(akk, item))
const redNum2 = Math.max(...numbers8)
console.log(redNum2)

console.log('==========FROM===========')
// ==============FROM===============
let numericArray = [1, 2, 3, 4, 5]
const ress = numericArray.filter(item => item % 2 === 0).reduce((a, b) => a + b)
console.log(ress)

let newStr = 'hellllllooooojejejejejjjjj'
const formattedArr = Array.from(new Set(newStr))
console.log(formattedArr)

let numericArray2 = [-2, 3, -5, 1, 4]
const res9 = numericArray2
  .filter(item => item > 0)
  .map(a => a ** 2)
  .sort((a, b) => a - b)
console.log(res9)
console.log(res9.reduce((akk, item) => akk + item))
