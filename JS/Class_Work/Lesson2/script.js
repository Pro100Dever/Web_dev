/* 
const a = {
  a: 1,
  b: 2,
}                           // Обьект с '+' будет всегда строкой
const b = 'hello'
const c = a + b   //string
*/
/* 
const a = {
  a: 1,
  b: 2,
}
const b = 7
const c = a + b //string
 */
/* 
const a = undefined
const b = null
const c = a + b   //NaN - number
 */
/* 
const a = false // это 0
const b = true // это 1
const c = a + b // = 1 (Number)
 */
/* 
const a = null // это 0
const b = undefined // отсутсвие
const c = a + b // NaN (Number)
 */
/* 
const a = null // это 0
const b = 3 // number
const c = a + b // 3 Number
 */
/* 
const a = true // это 1
const b = null // 0
const c = a + b // 1 Number 
*/
/* const a = true // это 1
const b = 2
const c = a + b // 3 Number

//null == 0 - false

console.log(c)
console.log(typeof c)
*/

//                       && - логическое И
if (5 > 6 && 4 >= 4) {
  console.log(true)
} else {
  console.log(false)
}

//                       || - логическое ИЛИ
if (5 > 6 || 4 >= 4) {
  console.log(true)
} else {
  console.log(false)
}
