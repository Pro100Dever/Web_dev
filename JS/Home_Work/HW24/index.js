class Shape {
  draw() {
    console.log('Shape')
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Rectangle')
  }
}

class Circle extends Shape {
  draw() {
    console.log('Circle')
  }
}

const classArr = [new Rectangle(), new Circle()]

for (let item of classArr) {
  item.draw()
}
