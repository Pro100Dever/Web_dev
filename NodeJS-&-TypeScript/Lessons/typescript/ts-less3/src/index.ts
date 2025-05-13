function fn1(a: number, b: number): number {
  return a + b
}
////////////////////////////////////////
function fn2(param?: string): number | string {
  if (param && typeof param === 'string') {
    return param.length
  }
  return 'no params'
}
////////////////////////////////////////
const fn3 = (arr: number[]): number[] => arr.map(a => a * 2)
////////////////////////////////////////
const fn4 = (arr: [number, number, string, number]): number =>
  arr.filter(a => typeof a === 'number').reduce((acc, num) => acc + num, 0)

console.log(fn4([3, 5, 'abc', 77]))
////////////////////////////////////////
function fn5<T>(param: T[]): T | undefined {
  return param[0]
}

console.log(fn5<number>([3, 6, 1, 0]))
////////////////////////////////////////
function fn6<G>(a: G, b: G): G[] {
  return [a, b]
}
////////////////////////////////////////
const obj = {
  name: 'alex',
}

function fn7<G, S extends keyof G>(obj: G, str: S): G[S] {
  return obj[str]
}
console.log(fn7(obj, 'name'))
////////////////////////////////////////
interface IObj {
  id: number
  str: string
  data: number
}

function fn8<T extends IObj>(arr: T[]): (string | number)[] {
  return arr.map(item => item.str)
}

const users: IObj[] = [
  { id: 1, str: 'Alex', data: 100 },
  { id: 2, str: 'Alex1', data: 200 },
]
console.log(fn8(users))
////////////////////////////////////////
type prodInfo = [string, number, number]
interface IInventory {
  [productName: string]: number
}
function updateStock(inventory: IInventory, prodInfo: prodInfo): IInventory {
  const [name, price, quantity] = prodInfo
  // inventory[name] ? (inventory[name] += quantity) : (inventory[name] = quantity)
  inventory[name] = (inventory[name] ?? 0) + quantity
  return inventory
}

const obj2: IInventory = { apple: 7, potato: 6 }
const arr: prodInfo = ['apple', 10, 103]
console.log(updateStock(obj2, arr))
////////////////////////////////////////

function name(age: number | undefined | null): number {
  return age ?? 18
}

console.log(name(0))
////////////////////////////////////////
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse()
}
////////////////////////////////////////
interface KeyValuePair<K, V> {
  key: K
  value: V
}

function createKeyValuePair<K, V>(key: K, value: V): KeyValuePair<K, V> {
  return { key, value }
}
////////////////////////////////////////
function multiply(num1: number, num2: number): number {
  return num1 * num2
}
////////////////////////////////////////
function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hallo'} ${name}`
}
////////////////////////////////////////
function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter(a => a % 2 === 0)
}
////////////////////////////////////////
function calculateDiscount(price: number, discountRate: number = 10): number {
  return price - (price * discountRate) / 100
}
console.log(calculateDiscount(100, 35))
////////////////////////////////////////

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}
console.log(mergeObjects({ name: 'alex' }, { gae: 7 }))

////////////////////////////////////////
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
////////////////////////////////////////
const filterStr = (arr: string[]): string[] => arr.filter(a => a.length > 3)
