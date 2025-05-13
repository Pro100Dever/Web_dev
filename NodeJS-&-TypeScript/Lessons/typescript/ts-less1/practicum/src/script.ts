function division(num1: number, num2: number): number {
  return num1 - num2
}
console.log(division(7, 2))

interface Car {
  brand: string
  model: string
  year: string
  isElectric: boolean
}

const car: Car = {
  brand: 'Toyota',
  model: 'RAV IV',
  year: '2007',
  isElectric: false,
}

function getCarInfo(car: Car): string {
  const { brand, model, year, isElectric } = car
  return `Brand: ${brand},Model: ${model},Year: ${year},Electric: ${isElectric}`
}

console.log(getCarInfo(car))

const arr: number[] = [3, 5, 23, 0, 4]

function calculateSum(arr: number[]): number {
  return arr.reduce((acc, item) => acc + item, 0)
}
console.log(calculateSum(arr))

function isAdult(age: number): boolean {
  return age > 18 ? true : false
}
console.log(isAdult(15))
console.log(isAdult(24))

interface Task {
  title: string
  description: string
  isCompleted: boolean
}

const tasksArr: Task[] = [
  { title: '1', description: 'qwe', isCompleted: true },
  { title: 'false1', description: 'qwe1', isCompleted: false },
  { title: '1', description: 'qwe', isCompleted: true },
  { title: 'false1', description: 'qwe1', isCompleted: false },
]

function getCompleted(tasks: Task[]) {
  return tasks.filter(item => item.isCompleted === false)
}

console.log(getCompleted(tasksArr))

function greet(name: string, age: number): string {
  return `Hallo ${name}, y'r age is ${age}`
}

console.log(greet('Yri', 28))

function convertToUpperCase(str: string): string {
  return str.toUpperCase()
}

console.log(convertToUpperCase('abc'))
