// var expect = function (val) {
//   return {
//     toBe(compair) {
//       if (val === compair) {
//         return true
//       } else {
//         throw new Error('Not Equal')
//       }
//     },
//     notToBe(compair) {
//       if (val !== compair) {
//         return true
//       } else {
//         throw new Error('Equal')
//       }
//     },
//   }
// }
const expandedForm = num =>
  '' +
  num
    .split('')
    .reverse()
    .map((value, i) => value * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ')
console.log(expandedForm(70304))
