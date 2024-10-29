function solution(str, ending) {
  let arrStr = str.split('') //    [a,b,c,d,e]
  let arrEnding = ending.split('') //     [c,d,e]
  let count = arrStr.length - 1
  for (let i = arrEnding.length - 1; i >= 0; i--) {
    if (arrEnding[i] !== arrStr[count]) {
      return false
    }
    count -= 1
  }
  return true
}
console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))

//=======================

function past(h, m, s) {
  //#Happy Coding! ^_^
  h = h * 60 * 60
  m = m * 60
  return (h + m + s) * 1000
}

console.log(past(0, 1, 1))
// console.log(past(1, 1, 1))
// console.log(past(0, 0, 0))

//============================

/* function highAndLow(numbers) {
  numbers = numbers.split(' ')
  let max = Number(numbers[0])
  let min = Number(numbers[0])
  for (let item of numbers) {
    if (item > max) {
      max = Number(item)
    }
    if (min > item) {
      min = Number(item)
    }
  }
  return `${max} ${min}`
} */
function highAndLow(numbers) {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))

/* const div = document.createElement('div')
div.innerHTML = `Это <em>курсивный</em> текст`
document.body.append(div)
 */

const ul = document.querySelector('.list')
document.addEventListener('DOMContentLoaded', () => {
  if (ul.children.length < 10) {
    ul.lastElementChild.remove()
    const li = document.createElement('li')
    li.classList.add('last')
    ul.append(li)
  }
})

function calcMultiply(numArr) {
  let count = 1
  for (let i = 0; i < numArr.length; i++) {
    count *= numArr[i]
  }
  return count
}
console.log(calcMultiply([3, 5, 6, 1, 2, 4, 2]))

//===============================================
const arr = [2, 4, 0, 35, 3, 23, 52, 35, 2, 7]

function calcSum(numArr) {
  let i = 0
  let count = 0
  while (i < numArr.length) {
    count += numArr[i]
    i++
  }
  return count
}
console.log(calcSum(arr))

/* function minValue(arr, n) {
  let newArr = []
  let newArr1 = []
  for (let i = 0; i <= arr.length - n; i++) {
    newArr = arr.slice(i, i + n)
    newArr1.push(Math.min(...newArr))
  }
  return newArr1
} */
/* function minValue(arr, n) {
  let newArr = []
  for (let i = 0; i <= arr.length - n; i++) {
    newArr.push(Math.min(...arr.slice(i, i + n)))
  }
  return newArr
} */

// console.log(minValue([1, 2, 3, 10, -5], 2))
// console.log(minValue([1, -2, 3, -4, 5, -6, 7, 8], 4))

/* const arr3 = 153
console.log(narcissistic(arr3))

function narcissistic(value) {
  let arrn = ('' + value).split('').map(Number)
  let count = 0
  for (let item of arrn) {
    count += item ** arrn.length
  }
  return count !== value ? false : true
}
 */

/* console.log(expandedForm(12))
console.log(expandedForm(70304))

function expandedForm(num) {
  num = ('' + num).split('').map(Number)
  let newArr = []
  let count = 1

  for (let i = 0; i <= num.length - 1; i++) {
    num[i] == 0
      ? count++
      : (newArr.push(num[i] * Math.pow(10, num.length - count)), count++)
  }
  return newArr.join(' + ')
}
 */
