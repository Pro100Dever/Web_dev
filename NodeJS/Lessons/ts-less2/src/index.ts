interface Car {
  brand: string
  model: string
  year: number
  isElectric: boolean
}
const carObj = {
  brand: 'Toyota',
  model: 'rav IV',
  year: 2007,
  isElectric: false,
}
function describeCar(obj: Car): string {
  return `Brand: ${obj.brand} Model: ${obj.model} Year:${obj.year}, Electric: ${obj.isElectric}.`
}

console.log(describeCar(carObj))

//////////////////////////////////////////////

const scores: number[] = [5, 2, 6, 7, 3, 1, 10]
function avgScore(scoreArr: number[]): number {
  return scoreArr.reduce((acc, num) => acc + num, 0) / scoreArr.length
}

console.log(avgScore(scores))

//////////////////////////////////////////////

const personInfo: [number, string] = [4, 'abc']
function printPersonInfo(cartage: [number, string]) {
  cartage.forEach(item => {
    console.log(item)
  })
}

printPersonInfo(personInfo)

//////////////////////////////////////////////

interface Product {
  name: string
  price: number
  inStock: boolean
}

const products: Product[] = [
  { name: 'apple', price: 4, inStock: true },
  { name: 'pineapple', price: 10, inStock: false },
  { name: 'orange', price: 6, inStock: true },
]

function listAvailableProducts(products: Product[]) {
  products.forEach(item => {
    item.inStock === true ? console.log(item.name) : ''
  })
}

listAvailableProducts(products)

//////////////////////////////////////////////

const data: unknown = 3

function processData(data: unknown): unknown {
  switch (typeof data) {
    case 'string':
      return data.length
    case 'number':
      return data ** 2
    default:
      return null
  }
}

console.log(processData(data))

//////////////////////////////////////////////

const sms = 'bachwert'
function logMessage(message: string): void {
  console.log(message)
}

console.log(logMessage(sms))

//////////////////////////////////////////////

function throwError(errorMessage: string): never {
  throw new Error(errorMessage)
}

// console.log(throwError(sms))

//////////////////////////////////////////////

interface Obj {
  name: string
  price: number
  inStock: boolean
}

const anyObj: Obj[] = [
  { name: 'apple', price: 4, inStock: true },
  { name: 'pineapple', price: 10, inStock: false },
  { name: 'orange', price: 6, inStock: true },
]

function getOnlySrt(anyObj: Obj[]) {
  return anyObj
    .flatMap(obj => Object.values(obj))
    .filter(value => typeof value === 'string')
}

console.log(getOnlySrt(anyObj))

// Создайте два интерфейса: "Person" с полями имя и возраст, и "Employee" с полем должность.
// Расширьте интерфейс "Employee" от "Person" и создайте объект этого типа.

interface Person {
  name: string
  age: number
}
interface Employee extends Person {
  member: string
}

const employee: Employee = {
  member: 'abc',
  name: 'person',
  age: 7,
}

/////////////////////////////////////////////

interface IDescription {
  title: string
  description: string
}

interface IAdditionalInfo {
  // [key: string]: any
  fullName: string
  handler: (param: string | number) => void
}

interface IFullInfo extends IAdditionalInfo {
  username: string
  name: string
  isAuth: boolean
  fullInfo: IDescription | null
}

/////////////////////////////////////////////

interface IFunction {
  (a: number, b: number): number
}

const getSum2: IFunction = (a, b) => {
  return a + b
}

const userArr: IFullInfo[] = []

function getObj(users: IFullInfo[]): void {
  return users.forEach(item => console.log(item))
}
