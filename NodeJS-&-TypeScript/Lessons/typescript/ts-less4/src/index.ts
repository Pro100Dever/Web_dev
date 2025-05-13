class User {
  public name: string
  public age: number
  static users: User[] = []

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    User.users.push(this)
  }

  greet(): void {
    console.log(`Hello ${this.name}`)
  }
}

class Admin extends User {
  constructor(name: string, age: number) {
    super(name, age)
  }
  greet(): void {
    console.log(`Hello ${this.name}`)
  }

  public displayUsers() {
    User.users.forEach(user => {
      console.log(`${user.name}. Age:${user.age}`)
    })
  }
}

const user1 = new User('Alice', 10)
const user2 = new User('Karina', 11)

const admin1 = new Admin('Bob', 13)
const admin2 = new Admin('Jonas', 14)

// user1.greet()
// user2.greet()
// admin1.greet()
// admin2.displayUsers()

class Account {
  private balance: number = 0
  public deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount
    }
  }
  public getBalance() {
    return this.balance
  }
}
const acc = new Account()
acc.deposit(10)
console.log('balance', acc.getBalance())

////////////////////////////////////////////

class Animal {
  private _name: string
  private _age: number
  static userCount: number = 0
  constructor(name: string, age: number) {
    this._name = name
    this._age = age
    Animal.userCount++
  }
  greet(): void {
    console.log(`Привет, меня зовут ${this._name}, мне ${this._age} лет`)
  }
  get name() {
    return this._name
  }
  get age() {
    return this._age
  }
  set name(value: string) {
    this._name = value
  }
  set age(value: number) {
    if (value > 0) {
      this._age = value
    }
  }
  static createGuestAnimal(): Animal {
    return new Animal('Guest', 0)
  }
}
class AdminAnimal extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }
  greet(): void {
    console.log(`Я администратор ${this.name}`)
  }
  showAnimalStats(): number {
    return Animal.userCount
  }
}
const bear = new Animal('Bear', 2)
const fox = new Animal('Fox', 1)
fox.greet()
const rabbit = Animal.createGuestAnimal()
rabbit.greet()
const leo = new AdminAnimal('Leo', 3)
leo.greet()
console.log(leo.showAnimalStats())
