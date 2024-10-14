const num2 = 5

function getNumSum(num1, num2) {
  return num1 + num2
}
console.log(getNumSum(10, num2))
console.log('=============================')

const numbers = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

function calculateSum(arr) {
  let count = 0
  for (let item of arr) {
    count += item
  }
  return count
}

console.log(calculateSum(numbers))
console.log('==========================')

const students = [
  {
    name: 'Uryi',
    age: 18,
    curs: 'Coch',
  },
  {
    name: 'Sanya',
    age: 36,
    curs: 'Urist',
  },
  {
    name: 'Max',
    age: 25,
    curs: 'IT',
  },
]
function displayStudentInfo(arr, name) {
  for (let item of arr) {
    for (let key in item) {
      if (item.name === name) {
        console.log(`${key}: ${item[key]}`)
      }
    }
  }
}
displayStudentInfo(students, 'Uryi')
