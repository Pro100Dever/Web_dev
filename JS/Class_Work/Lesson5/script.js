'use strict'
console.log('1 le')
const arr = [3, 5, 'hallo', true, [2, 'lol'], { name: 'jury', age: 23 }]
console.log(arr)
/* console.log(arr[arr.length - 1])
console.log(arr[5].age) */
/* =========================== */
const arr2 = [3, 5, 6, 7, 2, 1, 10]
let count = 0
let count1 = 0
console.log('2 le')

for (let i = 0; i <= arr2.length - 1; i++) {
  console.log(arr2[i])
}
/* =========================== */
console.log('3 le')

for (let i = 0; i <= arr2.length - 1; i++) {
  if (arr2[i] % 2 === 0) {
    console.log(arr2[i])
  }
}
/* =========================== */
console.log('4 le')

for (let i = 0; i <= arr2.length - 1; i++) {
  count += arr2[i]
}
console.log(count)
/* =========================== */
console.log('5 le')

const arr3 = ['sdg', 'afh', 'ddd', 'ggg']

const newArr = []
let arrCount = arr3.length - 1

for (let i = 0; i <= arr3.length - 1; i++) {
  newArr[i] = arr3[arrCount]
  arrCount--
}

console.log(`New arr: ${newArr}`)
console.log(`Old arr: ${arr3}`)

let x = 0
let i = 1

/* console.log('1 ============')
while (x <= 4) {
  x++
  if (x === 3) {
    break
  }
  console.log(x)
}

for (; i <= 5; i++) {
  if (i === 3) {
    break
  }
  console.log(i)
} */

/* console.log('2 ============')
while (x <= 5) {
  x++
  if (x % 2 === 0) {
    continue
  }
  console.log(x)
}

for (; i <= 6; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
} */
/* console.log('3 ============')
while (x <= 9) {
  x++
  if (x === 8) {
    break
  }
  console.log(x)
}

for (; i <= 10; i++) {
  if (i === 8) {
    break
  }
  console.log(i)
}
 */
/* console.log('4 ============')
while (x <= 4) {
  x++
  if (x === 3) {
    continue
  }
  console.log(x)
}

for (; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log(i)
}
 */
