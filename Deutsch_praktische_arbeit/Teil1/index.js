const arrNums = [2, 4, 23, 8, 1, 6]

async function processNumbers(arr) {
  const result = await arr.map(a => a ** 2)
  return result
}
console.log(await processNumbers(arrNums))

async function getNumberIfEven(num) {
  const res = await num
  return res % 2 === 0 ? res : 'The number is odd'
}
console.log(await getNumberIfEven(7))
