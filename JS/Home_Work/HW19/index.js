async function getToDo() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.kom/posts?userId=1`
    )
    // const response = await fetch(
    //   `https://jsonplaceholder.typicode.com/posts?userId=1`
    // )
    if (!response.ok) {
      throw new Error('Bad request')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getToDo()

function checkDelete(a, b) {
  if (b === 0) {
    throw new Error('Sie konnen nicht auf 0 deleten')
  }
  console.log(a / b)
}
checkDelete(2, 1)
