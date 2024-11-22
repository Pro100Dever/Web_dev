function User(name, birthday) {
  this.name = name
  this.birthday = birthday

  /* Определяет новое или изменяет существующее свойство объекта и возвращает этот объект.
  Принимает: 
  1) obj - Объект, на котором определяется свойство.
  2) prop - Строка или Symbol с ключом определяемого или изменяемого свойства.
  3) descriptor - Дескриптор свойства. */
  Object.defineProperty(this, 'age', {
    get() {
      // возраст рассчитывается из текущей даты и дня рождения
      let todayYear = new Date().getFullYear()
      return todayYear - this.birthday.getFullYear()
    },
  })
}

let john = new User('John', new Date(1992, 6, 1))

console.log(john.birthday) // доступен как день рождения
console.log(john.age) // ...так и возраст

/////////////////////////////////////////////////

class Student {
  constructor(name, lastName, age, grade) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.grade = grade
  }
  get averageGrade() {
    const average = this.grade.reduce((sum, grade) => sum + grade)
    return average / this.grade.length
  }
  get status() {
    if (this.averageGrade > 70) {
      return `${this.name} ${this.lastName} studiet well`
    } else if (this.averageGrade > 50 && this.averageGrade < 70) {
      return `${this.name} ${this.lastName} studiet normal`
    } else {
      return `${this.name} ${this.lastName} studiet bad`
    }
  }
}

const studentArr = [
  {
    name: 'Jane',
    lastName: 'B',
    age: 21,
    grade: [20, 18, 12, 19],
  },
  {
    name: 'Kate',
    lastName: 'R',
    age: 24,
    grade: [18, 15, 10, 19],
  },
  {
    name: 'Olga',
    lastName: 'H',
    age: 25,
    grade: [10, 12, 20, 10],
  },
  {
    name: 'John',
    lastName: 'T',
    age: 20,
    grade: [20, 20, 30, 20],
  },
  {
    name: 'Volodymyr',
    lastName: 'Vol',
    age: 22,
    grade: [80, 60, 80, 66, 70],
  },
]

const user1 = new Student('Volodymyr', 'Vol', 22, [80, 60, 80, 66, 70])
console.log(user1.averageGrade)
console.log(user1.status)
console.log(user1)

const container = document.querySelector('.container')
const result = studentArr.map(
  a => new Student(a.name, a.lastName, a.age, a.grade)
)
renderSudents(result)

function renderSudents(students) {
  students
    .sort((a, b) => b.averageGrade - a.averageGrade)
    .forEach(a => {
      const div = document.createElement('div')
      div.innerHTML = `
        <h3>${a.name} ${a.lastName}</h3>
        <p>Age: ${a.age}</p>
        <p>Average Grade: ${a.averageGrade}</p>
        <p>Status: ${a.status}</p>
        `
      container.append(div)
    })
}

/////////////////////////////////////////////

class Urls {
  users = 'https://jsonplaceholder.typicode.com/users'
  posts = 'https://jsonplaceholder.typicode.com/posts'
}

class UserDetails extends Urls {
  constructor(userId) {
    super()
    this.userId = userId
    this.userData = null
    this.userPosts = null
  }

  async fetchUser() {
    const response = await fetch(`${this.users}/${this.userId}`)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    this.userData = await response.json()
  }

  async fetchPosts() {
    const response = await fetch(`${this.posts}?userId=${this.userId}`)
    if (!response.ok) {
      throw new Error('Bad request')
    }
    this.userPosts = await response.json()
  }

  renderUserDetails() {
    const userContainer = document.querySelector('.user-container')
    const userDetails = document.createElement('div')
    const { name, email, address } = this.userData

    userDetails.innerHTML = `
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>City: ${address.city}</p>
      <p>Amount of posts: ${this.userPosts.length}</p>
    `
    userContainer.append(userDetails)
  }
}

;(async () => {
  const user1 = new UserDetails(1)
  await user1.fetchUser()
  await user1.fetchPosts()
  user1.renderUserDetails()

  console.log(user1)
})()

/* 
Если хотите: 
Доделать самостоятельно получение постов из фетча и вывод на страницу. Создать метод renderPosts который будет распечатывать все посты на страницу (посты с конкретным userId - этот функционал готов уже)
*/
