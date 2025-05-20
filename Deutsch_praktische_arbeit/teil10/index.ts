function division(a: number, b: number): number {
  return a / b
}
console.log(division(20, 4))

////////////////////8

interface Car {
  make: string
  model: string
  year: number
  isElectric: boolean
}
const myCar: Car = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  isElectric: true,
}

function fn1(obj: Car): void {
  console.log(
    `make: ${obj.make}, model: ${obj.model},year: ${obj.year},isElectric: ${obj.isElectric}`
  )
}

fn1(myCar)

////////////////////9
const arr: number[] = [1, 5, 6, 4, 32, 34, 4]

function calculateSum(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0)
}

console.log(calculateSum(arr))

////////////////////10
function isAdult(age: number): boolean {
  return age >= 18 ? true : false
}
console.log(isAdult(18))

////////////////////11
interface Task {
  title: string
  description: string
  isCompleted: boolean
}

function fn2(arr: Task[]): Task[] {
  return arr.filter(task => !task.isCompleted)
}
console.log(
  fn2([
    { title: 'a1', description: 'b1', isCompleted: true },
    { title: 'a2', description: 'b2', isCompleted: true },
    { title: 'a3', description: 'b3', isCompleted: false },
    { title: 'a4', description: 'b4', isCompleted: true },
  ])
)
////////////////////12

const arr2: [string, number] = ['name', 9]

function printPersonInfo(arr: [string, number]): void {
  const [name, age] = arr
  console.log(`Name: ${name},  Age:${age}`)
}

printPersonInfo(arr2)

////////////////////12
let data: unknown

function processData(data: unknown): unknown {
  if (typeof data == 'string') {
    return data * data
  }
  switch (typeof data) {
    // case 'string':
    //   return data.length
    case 'number':
      return data ** 2
    default:
      return null
  }
}

data = 'abc'
// data = 8
// data = null + undefined
console.log(processData(data))

///////////////////
let valueAny: any = 8
valueAny.trim()
valueAny.toFixed(2)

let valueUnknown: unknown = 'Hello'
valueUnknown.trim()
valueUnknown.toFixed(2)

if (typeof valueUnknown === 'string') {
  console.log('String length:', valueUnknown.length)
}

if (typeof valueUnknown === 'number') {
  console.log('Rounded:', valueUnknown.toFixed(2))
}
