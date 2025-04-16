import express from 'express'

const app = express()
// 1. Данный мидлвар автоматически читает потоки при получении запроса, так, что мы в req.body получаем объект с тем, что передал пользователь
// 2. читает application/json
app.use(express.json())

app.get('/', (req, res) => {
  console.log('Welcome to express server')
  res.send('welcome to js server')
})

app.get('/users', (req, res) => {
  res.send('users page')
})

app.get('/users/:id', (req, res) => {
  //из объекта req, можно достать поле params с параметрами адреса запроса типа users/1,2, 3
  const userParams = req.params.id
  console.log(userParams)
  res.send(`user id: ${userParams}`)
})

app.listen(3000, () => {
  console.log('Server is listening: http://127.0.0.1:3000')
})
