function Car(brand, model, year) {
  this.brand = brand
  this.model = model
  this.year = year

  this.print = function () {
    console.log(`Car: ${this.brand} ${this.model}, year: ${this.year}`)
  }
}
const ford = new Car('Ford', 'Mustang', 2016)
ford.print()

function say(...phrase) {
  console.log(this.name + ': ' + phrase)
}
let user = { name: 'John' }
const arr = [1, 2, 3]
say.call(user, ...arr) // John: Hello

function say1(...phrase1) {
  console.log(this.name + ': ' + phrase1)
}
let user1 = { name: 'John' }
say1.apply(user1, [1, 2, 3]) // John: Hello

// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().
// Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().
// Написать функцию counter, которая будет прибавлять 1 к текущему значению.

function sum(a, b) {
  this.result = a + b
  return `sum: ${this.result}`
}
console.log(sum.call({ result: 0 }, 2, 5))

//////////////////////////////////////

function del(a, b) {
  this.result = a / b
  return `sum: ${this.result}`
}
console.log(del.apply({ result: 0 }, [6, 2]))

//////////////////////////////////////////
