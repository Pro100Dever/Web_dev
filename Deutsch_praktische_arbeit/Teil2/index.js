class Calculator {
  static subtract(a, b) {
    return a + b
  }
}
const str = 'dsgsdg'
console.log(str.toUpperCase())

class MathUtils {
  static getMin(arr) {
    return Math.min(...arr)
  }
}
const res = MathUtils.getMin([71, 2, 7, 1, 22, 27, 34, 346, 1, 0, 32, 12])
console.log(res)

class ArrayUtils {
  static average(arr) {
    let sum = 0
    for (let num of arr) {
      sum += num
    }
    return sum / arr.length
  }
}

const res1 = ArrayUtils.average([1, 3, 2, 5])
console.log(res1)
