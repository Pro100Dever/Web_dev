function createNumsArr() {
  const numArr = []
  for (let i = 0; i < 10; i++) {
    numArr[i] = Math.floor(Math.random() * 20)
  }
  return numArr
}

/* 
function showNumArr() {
  const numsArr = createNumsArr()
  console.log(numsArr)
  for (let num of numsArr) {
    console.log(num)
  }
}
showNumArr() 
*/

/* 
function showReverseNumArr() {
  const numsArr = createNumsArr()
  console.log(numsArr)
  for (let i = numsArr.length - 1; i >= 0; i--) {
    console.log(numsArr[i])
  }
}
showReverseNumArr() 
*/

function filtreArr() {
  const numsArr = createNumsArr()
  let newNumsArr = []
  for (let i = 0; i <= numsArr.length - 1; i++) {
    if (numsArr[i] > 5) {
      newNumsArr.push(numsArr[i])
    }
  }
  console.log(numsArr)
  return newNumsArr
}
console.log(filtreArr())

/* 
У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.
*/
const students = [
  { name: 'Анна', grades: [85, 90, 92] },
  { name: 'Иван', grades: [88, 75, 96] },
  { name: 'Мария', grades: [78, 82, 94] },
]

console.log(newStudent(students))

function newStudent(students) {
  const newStudent = []
  for (let item of students) {
    newStudent.push(createSudents(item))
  }
  return newStudent
}

/* function createSudents(student) {
  return {
    name: student.name,
    avarageGrade: calculateAvarage(student.grades),
  }
}

function calculateAvarage(grade) {
  let result = 0
  for (let item of grade) {
    result += item
  }
  return Math.floor(result / grade.length)
} */

function createSudents(student) {
  return {
    name: student.name,
    // maxGrade: Math.max.apply(null, student.grades),
    // maxGrade: Math.max(...student.grades),
    maxGrade: searchMax(student.grades),
  }
}

function searchMax(grade) {
  let maxNum = 0
  for (let item of grade) {
    if (item > maxNum) {
      maxNum = item
    }
  }
  return maxNum
}
