class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  getDescription() {
    return `Книга '${this.title}' написана автором ${this.author}.`
  }
}
const tee = new Book('What is?', 'Unknown')
console.log(tee.getDescription())

///////////////////////////////

// class Counter {
//   #count = 0
//   get increment() {
//     return this.#count++
//   }
//   get decrement() {
//     return this.#count--
//   }
//   get getValue() {
//     return this.#count
//   }
// }
// const count1 = new Counter()
// count1.increment
// count1.increment
// count1.decrement
// count1.increment
// console.log(count.getValue)

class Counter {
  constructor() {
    this.count = 0
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
  getValue() {
    return this.count
  }
}
const count = new Counter()
count.increment()
count.increment()
count.decrement()
count.increment()
console.log(count.getValue())

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`)
  }
  get celebrateBirthday() {
    return this.age++
  }
}

const person1 = new Person('Alex', 100)
person1.celebrateBirthday
person1.greet()

/////////////////////////////////////

class Animals {
  constructor(name) {
    this.animalName = name
  }
  spaek() {
    console.log(`Я — ${this.animalName}, и я издаю звуки.`)
  }
}

class Dog extends Animals {
  spaek() {
    console.log(`Я — ${this.animalName}, и я лаю: Гав-гав.`)
  }
}

const person2 = new Dog('Cat')
person2.spaek()

////////////////////////////////////

class Shape {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
}
class Square extends Shape {
  constructor(color, side) {
    super(color)
    this.side = side
  }
  get area() {
    return this.side * this.side
  }
}
const some = new Square('red', 15)
console.log(some.getColor())
console.log(some.area)

/////////////////////////////////////
class Urls {
  usersApi = 'https://jsonplaceholder.typicode.com/users'
}

class User extends Urls {
  userData = null

  async fetchUser(id) {
    const response = await fetch(`${this.usersApi}/${id}`)
    this.userData = await response.json()
    return this.userData
  }

  getInfo() {
    const { name, email, address } = this.userData
    return `Пользователь ${name}, email: ${email}, город: ${address.city}`
  }
}

;(async () => {
  const user1 = new User()
  await user1.fetchUser(1)
  console.log(user1.getInfo())
})()
