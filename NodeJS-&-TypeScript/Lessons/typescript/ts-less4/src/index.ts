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

user1.greet()
user2.greet()
admin1.greet()
admin2.displayUsers()
