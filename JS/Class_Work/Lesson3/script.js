const numA = 5
const numB = 10
const numC = (numB * numA) / 2

if (numA > numB && numA < numC) {
  console.log(`All right`)
} else {
  console.log(`falls`)
}

const res =
  numA > numB || numA < numC ? console.log('All right') : console.log('fals')

const buyCount = 6000
if (buyCount > 1000 && buyCount <= 5000) {
  console.log('Discount = 5%')
} else if (buyCount > 5000 && buyCount <= 10000) {
  console.log(`Discount = 10%`)
} else if (buyCount > 10000) {
  console.log(`Discount = 15%`)
} else {
  console.log('Not discount')
}

const num = 15
num % 2 === 0 ? console.log(`кратное`) : console.log(`не кратное`)
num % 3 === 0 && num % 5 === 0
  ? console.log(`кратное`)
  : console.log(`не кратное`)

const input = 'user'
input === 'admin'
  ? console.log(`hello admin`)
  : input === 'user'
  ? console.log(`hallo user`)
  : console.log(`hello guest`)

// =============================

const useName = 'Volodymyr'
const userAge = 22
const userPass = 'qwtdsgt'

useName.length > 0 && userAge >= 18 && userPass.length >= 6
  ? console.log('Reg complit')
  : console.log('Reg faild')
