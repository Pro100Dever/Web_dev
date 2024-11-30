class CopyEntity {
  static copyObject(obj) {
    // const newObj = structuredClone(obj)
    // return newObj
    const newObj1 = JSON.parse(JSON.stringify(obj))
    return newObj1
  }
}

const arr1 = [1, 2, 3]
const arr2 = CopyEntity.copyObject(arr1)

arr1[0] = 999

console.log(arr1)
console.log(arr2)
