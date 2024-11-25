class Calculator {
  static add(num1, num2) {
    return num1 + num2
  }
}
const res = Calculator.add(5, 10)
// console.log(res)

class RandomNumberGenerator {
  static generate(from, to) {
    return Math.floor(Math.random() * (from - to + 1)) + to
  }
}
const res1 = RandomNumberGenerator.generate(50, 150)
// console.log(res1)

class StringUtils {
  static reverse(str) {
    return str.split('').reverse().join('')
  }
}
const res2 = StringUtils.reverse('50,150')
// console.log(res2)

class MathUtils {
  static getMax(arr) {
    return Math.max(...arr)
  }
}
const res3 = MathUtils.getMax([4, 6, 2, 78, 1, 25, 0, 7])
// console.log(res3)

function onClick() {
  setTimeout(function timer() {
    console.log('You clicked the button!')
  }, 2000)
}
// onClick()
// onClick()
// onClick()

// console.log('Hi!')

// setTimeout(function timeout() {
//   console.log('Click the button!')
// }, 5000)

// console.log('Welcome to loupe.')

//////////////////////////////////////

class Counter {
  // constructor(count) {
  //   count ? (this.count = count) : (this.count = Counter.count)
  // }
  static count = 0

  static increment() {
    this.count++
    return this.count
  }
  static decrement() {
    this.count--
    return this.count
  }
}
// console.log(Counter.increment())
// console.log(Counter.increment())
// console.log(Counter.increment())
// console.log(Counter.increment())
// console.log(Counter.decrement())
// console.log(Counter.decrement())
// console.log(Counter.increment())

/////////////////////////////////////////

class Configuration {
  static settings = {}
  static getSetting(key) {
    return Configuration.settings[key]
  }
  static setSetting(key, value) {
    Configuration.settings[key] = value
  }
}
Configuration.setSetting('id', 7)
Configuration.setSetting('rot', 'toptal')
console.log(Configuration.getSetting('id'))
console.log(Configuration.settings)

/////////////////////////////////////

class MathOperations {
  static Pi = 3.14159
  static E = 2.71828

  static calculateCircleArea(radius) {
    return MathOperations.Pi * radius ** 2
  }
  static calculateExponentialPower(base, exponent) {
    return (base * MathOperations.E) ** exponent
  }
}
console.log(MathOperations.calculateCircleArea(5))
console.log(MathOperations.calculateExponentialPower(5, 2))

const stats = {
  clicks: 120,
  impressions: 3400,
  ctr: '5%',
  country: 'Brazil',
  avgPosition: 7.5,
}

const result = Object.values(stats).filter(a => typeof a === 'number')
console.log(result)
