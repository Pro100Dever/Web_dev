class User {
  constructor(name, age, lastName) {
    this.name = name
    this.lastName = lastName
    this.age = age
  }
  sayHi() {
    console.log(`Hello ${this.name} ${this.lastName}. Ur age: ${this.age}`)
  }
  sum(a, b) {
    if (this.age > a + b) {
      console.log(a + b)
    }
  }
}
class Yep extends User {
  meow() {
    console.log(this.name + ' - name')
    console.log(this)
  }
}
class Yep1 extends Yep {
  meow1() {
    console.log(this)
  }
}
// const Volodymyr = new User('Volodymyr', 22, 'berestenko')
const Volodymyr1 = new Yep1('Volodymyr', 22, 'berestenko')
// console.log(Volodymyr)
console.log(Volodymyr1)
Volodymyr1.sayHi()
Volodymyr1.sum(5, 10)

/////////////////////////////////////

class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(
      `Hello? my name is ${this.name} and i have ${this.age} years old.`
    )
  }
  isAdult() {
    return this.age >= 18 ? true : false
  }
}
const Man = new People('Volodymyr', 22)
console.log(Man.isAdult())
