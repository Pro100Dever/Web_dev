function getCurrentDate() {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, 0)
  const day = String(currentDate.getDate()).padStart(2, 0)

  return `${day}.${month}.${year}`
}
console.log(getCurrentDate())

function getCurrentTime() {
  const currentTime = new Date()
  return currentTime.toLocaleTimeString()
}
console.log(getCurrentTime())
