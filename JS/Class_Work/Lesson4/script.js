const lenght = 20
if (lenght < 10) {
  console.log(`Deliveri free`)
} else if (lenght >= 10 && lenght < 50) {
  console.log(`Deliveri 50 euro`)
} else if (lenght >= 50 && lenght < 100) {
  console.log(`Deliveri 100 euro`)
} else console.log(`Deliveri imposible`)

const nds = 20000
if (nds < 15000) {
  console.log(`NDS 5%`)
} else if (nds >= 15000 && nds < 50000) {
  console.log(`NDS 10%`)
} else console.log(`NDS 15%`)

const p1Score = 1
const p2Score = 2
if (p1Score > p2Score) {
  console.log(`Игрок 1 победил с количеством очков: ${p1Score}`)
} else if (p1Score < p2Score) {
  console.log(`Игрок 2 победил с количеством очков: ${p2Score}`)
} else console.log(`Ничья, оба игрока набрали ${p1Score} очков`)

let month = 4

switch (month) {
  case 1:
    console.log('January WINTER')
    break
  case 2:
    console.log('February WINTER')
    break
  case 3:
    console.log('March SPRING')
    break
  case 4:
    console.log('April SPRING')
    break
  case 5:
    console.log('May SPRING')
    break
  case 6:
    console.log('June SUMMER')
    break
  case 7:
    console.log('July SUMMER')
    break
  case 8:
    console.log('August SUMMER')
    break
  case 9:
    console.log('September AUTUMN')
    break
  case 10:
    console.log('October AUTUMN')
    break
  case 11:
    console.log('November AUTUMN')
    break
  case 12:
    console.log('December WINTER')
    break
}
/* for (let i = 1; i < 5; i++) {
  console.log(i)
}

for (let i = 1; i < 3; i++) {
  i = i ** i
  console.log(i)
}
for (let i = 1; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
  for (let i = 10; i > 0; i--) {
  console.log(i)
}
 */
/* 
// Надо както разобраться
let num = 10
nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextPrime
    }
  }
  console.log(i)
}
 */
const obj = {
  a: 5,
  b: 10,
  c: 'hallo',
}
console.log(obj)
console.log(obj.b)

const arr = [2, 3, 'hello']
console.log(arr)
console.log(arr[1])
