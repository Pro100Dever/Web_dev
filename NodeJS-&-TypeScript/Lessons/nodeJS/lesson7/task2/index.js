import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000
class URL {
  HOME = '/'
  NOTES = '/notes'
}
const url = new URL()

let notes = [{ id: 1, text: 'ddd' }]

app.get(url.HOME, (req, res) => {
  res.send('HOME')
})
app.get(url.NOTES, (req, res) => {
  res.json(notes)
})
app.post(url.NOTES, (req, res) => {
  const data = req.body

  if (!data) {
    return res.status(400).json({ error: 'Text is required' })
  }
  notes.push({ id: new Date(), ...data })
  res.status(201).json({ message: 'Successfully created', notes })
})

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`)
})
