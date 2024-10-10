const randomArr = [
  1,
  2,
  -6,
  -9,
  3,
  'hello wolrd',
  'blink',
  'dcdcd',
  false,
  true,
  { myName: 'Yury' },
  'hello world',
]

console.log(randomArr[Math.round(randomArr.length / 2)])

/* 
// Принимает число и строку и возвращает строку, s повторяющуюся ровно n раз.
function repeatStr (n, s) {
    let count = s;
    for(let i = 1; i<n; i++){
      count +=s
    }
    return count;
  } */

const fruit = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    passport: {
      breed: 'semi - Angora',
      mom: 'Angora',
      father: 'Homeless',
      microchip: {
        address: 'Avenida Portugal 1288',
        id: 2582457824,
        vacineDate: '24.10.24',
        procedures: ['exame FIV', '...'],
        vacines: ['...'],
      },
      isVacinated: true,
    },
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',

    passport: {
      breed: 'semi - Angora',
      mom: 'Angora',
      father: 'Homeless',
      microchip: {
        address: 'Avenida Portugal 1288',
        id: 2582457824,
        vacineDate: '24.10.24',
        procedures: ['exame FIV', '...'],
        vacines: [
          'vacine1',
          'vacine12',
          'vacine16',
          'vacine14',
          'vacine13',
          234,
          false,
          true,
          'dsdsdd',
        ],
      },
    },
    isVacinated: true,
  },
]
console.log(fruit[0])
console.log(fruit[fruit.length - 1])
console.log(fruit[0].passport.microchip.id)

/* for (let key in fruit) {
  console.log(key + '-' + fruit[key])
}
 */
