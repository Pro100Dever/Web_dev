function waitForTime(time) {
  return Promise.resolve(
    setTimeout(() => console.log('Ожидание завершено'), time)
  )
}
waitForTime(1000)
