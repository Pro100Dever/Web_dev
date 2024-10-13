const arrNum = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

for (let item of arrNum) {
  if (item < 20) {
    console.log(item)
  }
}

console.log('------------------')

let count = arrNum[0]
for (let item of arrNum) {
  if (item >= count) {
    continue
  }
  count = item
}
console.log(count)

console.log('------------------')

const updateIndexOfArr = 2
const newArrValue = 'dsghsd'
const newArr = [40, 20, 80, 60, 12, 55, 2, 4, 0, 2, 80, 70, 62, 94]
newArr[updateIndexOfArr] = newArrValue
console.log(newArr)

console.log('------------------')

const carsArr = ['Saab', 'Volvo', 'BMW']
let maxlen = ''
for (let value of carsArr) {
  if (value.length <= maxlen.length) {
    continue
  }
  maxlen = value
}
console.log(maxlen)
