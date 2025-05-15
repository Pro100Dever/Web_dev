abstract class AcademicPerson {
  constructor(public fullName: string) {}
  abstract getRole(): string
  abstract getInfo(): string
}

class Student extends AcademicPerson {
  constructor(public fullName: string, public grade: number) {
    super(fullName)
    this.grade = grade
  }
  getRole(): string {
    return 'Student'
  }
  getInfo(): string {
    return `Студент ${this.fullName}, средняя оценка: ${this.grade}`
  }
}
class Teacher extends AcademicPerson {
  constructor(public fullName: string, public subject: number) {
    super(fullName)
    this.subject = subject
  }
  getRole(): string {
    return 'Teacher'
  }
  getInfo(): string {
    return `Преподаватель ${this.fullName}, предмет: ${this.subject}`
  }
}
