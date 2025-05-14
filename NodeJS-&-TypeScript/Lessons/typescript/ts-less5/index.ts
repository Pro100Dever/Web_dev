class BankAccount {
  constructor(protected balance: number) {
    this.balance = balance
  }
  public getBalance() {
    console.log(this.balance)
  }
  public deposit() {
    return (this.balance += 500)
  }
  public withdraw() {
    return (this.balance -= 500)
  }
}

class Employee {
  static employeeCount = 0
  constructor(public name: string, public position: string) {
    this.name = name
    this.position = position
    Employee.employeeCount++
  }
}

class Manager extends Employee {
  constructor(
    public name: string,
    public position: string,
    public department: string
  ) {
    super(name, position)
    this.department = department
  }
}

const manager = new Manager('a', 'b', 'c')
const manager2 = new Manager('a1', 'b1', 'c1')
const manager3 = new Manager('a2', 'b2', 'c2')
console.log(manager, manager2, manager3)
console.log(Employee.employeeCount)

class Book {
  constructor(public title: string, public author: string) {
    this.title = title
    this.author = author
  }
  describe() {
    console.log(`title: ${this.title}, author:${this.author}`)
  }
}

class EBook extends Book {
  constructor(
    public title: string,
    public author: string,
    public fileSize: number
  ) {
    super(title, author)
    this.fileSize = fileSize
  }
  describe() {
    console.log(this.fileSize)
  }
}

const book1 = new Book('a', 'b')
const book2 = new EBook('a1', 'b1', 10)
const book3 = new EBook('a2', 'b2', 20)
console.log(book1, book2, book3)

book1.describe()
book2.describe()
book3.describe()

console.log(Employee.employeeCount)
