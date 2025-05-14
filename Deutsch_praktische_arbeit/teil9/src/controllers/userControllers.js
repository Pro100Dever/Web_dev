import User from '../models/User.js'

const getUsers = async (req, res) => {
  const users = await User.find()
  if (!users) {
    return res.status(404).json({ error: 'user not found' })
  }
  res.json({ message: 'users found', users })
}

const getUserId = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(404).json({ error: 'user not found' })
  }
  const user = await User.findById(id)
  if (!user) {
    return res.status(404).json({ error: 'user not found' })
  }
  res.json({ message: 'users found', user })
}

const postUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'incorrect data' })
    }
    const newUser = await User.create({ name, email, password })
    res.status(201).json({ message: 'User was created', user: newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const putUsers = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'incorrect data' })
    }
    const newUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    )
    res.status(201).json({ message: 'User was created', user: newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteUserId = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: 'incorrect id' })
  }
  await User.findByIdAndDelete(id)
  res.json({ message: 'user was deleted' })
}

export { deleteUserId, getUserId, getUsers, postUsers, putUsers }
