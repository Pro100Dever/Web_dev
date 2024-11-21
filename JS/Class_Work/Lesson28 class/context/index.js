function Obj(name, age) {
  this.name = name
  this.age = age
  this.sayHi = function () {
    console.log('Меня зовут: ' + this.name + ', ' + this.name)
  }
}
const person = new Obj('Alex', 24)
person.sayHi()

//==============================

const calculator = {
  result: 0,
  add(a, b) {
    this.result = a + b
    this.showNum(this.result)
    return this.result
  },
  multiply(a, b) {
    this.result = a * b
    this.showNum(this.result)
    return this.result
  },
  showNum(res) {
    console.log(res)
  },
  reset() {
    this.result = 0
    return this.result
  },
}
const sum = calculator
// sum.add(5, 1)
// sum.multiply(6, 2)

/////////////////////////////////////

const ladder = {
  step: 0,
  up() {
    this.step++
  },
  down() {
    this.step--
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step)
  },
}
// ladder.up().up().down().showStep().down().showStep()

////////////////////////////////////////////

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  const r = Math.random() * 255
  const g = Math.random() * 255
  const b = Math.random() * 255
  document.body.style.background = `rgb(${r},${g},${b})`
})

//=====================================

const car = {
  isRunning: false,
  start() {
    this.isRunning = true
    console.log('Car is running')
  },
  stop() {
    this.isRunning = false
    console.log('Car stoped')
  },
}

function Rectangle(width, height) {
  this.width = width
  this.height = height
  this.area = function () {
    return 2 * (this.width + this.height)
  }
  this.perimeter = function () {
    return this.width * this.height
  }
}
const rectangle = new Rectangle(3, 6)
// console.log(rectangle.area())

function BankAccount(balance) {
  this.balance = balance

  this.deposit = function (sum) {
    const res = (this.balance += sum)
    this.showBalance()
    return res
  }

  this.withdraw = function (sum) {
    this.balance < sum
      ? console.log('Insufficient funds')
      : (this.balance -= sum)
    this.showBalance()
    return this.balance
  }

  this.showBalance = function () {
    console.log('Current balance: ' + this.balance)
  }
}
const bankAccount = new BankAccount(0)
bankAccount.deposit(300)
bankAccount.withdraw(301)
