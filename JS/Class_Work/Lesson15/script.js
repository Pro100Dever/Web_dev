const arr = [1, 3, 9]

console.log('======PUSH========')

// push добавляет елементы в конец массива
console.log(arr)
const pushRes = arr.push(4, 5, 'end')
// принимает елементы
// возвращает длину
console.log(arr)
console.log(pushRes)

console.log('======POP========')

// pop - удаляет последний элемент из массивa
console.log(arr)
const popRes = arr.pop()
// ничего не принемает
// возвращает елемент / undefiend
console.log(arr)
console.log(popRes)

console.log('======MAP========')

// map - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const arr5 = [1, 3, 4, 5, 'fgsdg', '1111', '2222']
// принимает: callback (Текущий элемент (currentValue), индекс, массив)
// возвращает: Новый массив, где каждый элемент является результатом callback функции.
console.log(arr5)
const mapRes = arr5.map((currentValue, index, array) => {
  if (typeof currentValue === 'string') {
    return `String length: ${currentValue.length}`
  }
  if (typeof currentValue === 'number') {
    return currentValue ** 2
  }
})
console.log(arr5)
console.log(mapRes)

console.log('=======FOREACH=======')

// foreach - выполняет указанную функцию один раз для каждого элемента в массиве
const arr1 = [1, 'fgsdg']
// принимает: callback (значение элемента (value), индекс, массив)
// возвращает: undefined
arr1.forEach((value, index, array) => {
  console.log(`Есть елемент ${value} под индексом ${index}`)
  console.log(array)
})

//=======================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(item => {
  if (item % 2 === 0) console.log(item)
})

/* const newArr = ['hello', 1234, 325, 234, 'world']
const temp = newArr[newArr.length - 1]
newArr[newArr.length - 1] = newArr[0]
newArr[0] = temp
console.log(newArr) */
