/* const username = 'einigeName'

console.log(chekUsername(username))

 if (username > 15) {
  console.log(chekUsername(username))
} else {
  console.log(chekUsername('asdhdshgoih oisdgoihsdo osdoifg'))
}

function chekUsername(username) {
  return username.split('').reverse().join('')
}  */

// Отличие объекта от массива
// 1. Структура данных
// 2. Массив индексируется от 0 до бесконечности взависимости от кол ва элементов в нем
// 3. Массив логическое перечисление данных принадлежащих к конкретной тематике (например, перечисляем типы банковского платежа, черты характера человека, увлечения, любимые блюда и тд), а объект структура данных, четко описывающая элемент по характеристикам в формате ключ: значение, где ключ название описываемой хар ки.
// 4. Объект тип данных, массив специальный объект

const aboutMe = {
  myName: 'Vova',
  lastName: 'Ber',
  age: 22,
  hobbies: ['undefined', 'null', 'undefined', 'null'],
  car: {
    brand: 'Ford',
    model: 'Mustang GT',
    year: 2016,
    maxSpeed: 320,
    passport: {
      engineId: '235811RPT',
      timeInService: 9,
      kennenzeichen: 'PCH HB 1194',
      previouseOwners: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
          habits: ['smoke', 'buchsl', 'dont clear', 'horen radio'],
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
          habits: ['smoke', 'buchsl', 'clear', 'dont horen radio'],
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
              lat: '-68.6102',
              lng: '-47.0653',
            },
          },
          phone: '1-463-123-4447',
          website: 'ramiro.info',
          company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications',
          },
          habits: ['served', 'buchsl', 'dont clear', 'horen radio'],
        },
      ],
    },
  },
}

/* const previouseOwners = aboutMe.car.passport.previouseOwners
console.log(previouseOwners)

function count(arr) {
  for (let value of arr) {
    const habits = value.habits
    let habitsStr = ''
    for (let item of habits) {
      habitsStr += item + ', '
    }
    previouseOwner(value.name, habitsStr)
  }
}
function previouseOwner(name, habits) {
  console.log(`Habits of ${name}: ${habits}`)
}

count(previouseOwners)
 */

/* function evenNum(from, to) {
  for (let i = from; i < to; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
evenNum(1, 20)
 */
/* const arr = [1, 5, 8, 3, 7, 10]
numCount(arr, 5)

function numCount(arr, num) {
  let count = 0
  let newStr = ''
  for (let item of arr) {
    if (item > num) {
      count += 1
      newStr += item + ', '
    }
  }
  newStr = newStr.split(',', count).join(',')
  console.log(
    `Количество элементов больше ${num}: ${count}. This num(s) is: ${newStr}.`
  )
} */

function multipleOfNum(from, to, multiple) {
  let sum = 0
  let num = ''
  let count = 0
  for (let i = from; i <= to; i++) {
    if (i % multiple === 0) {
      sum += i
      num += i + '+'
      count += 1
    }
  }
  num = num.split('+', count).join(' + ')
  return `${num} = ${sum}`
}
console.log(multipleOfNum(1, 20, 3))

numReverse(5, 1)
function numReverse(from, to) {
  let numStr = ''
  for (let i = from; i >= to; i--) {
    numStr += i + (i > to ? ', ' : '')
    // numStr += i
    // if (i > from) {
    //   numStr += ', '
    // }
  }
  console.log(numStr)
}
