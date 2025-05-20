import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

const registerUser = async (req, res) => {
  try {
    const { name, email, password, initialBalance } = req.body
    if (
      !initialBalance ||
      !email ||
      !password ||
      !name ||
      typeof initialBalance !== 'number' ||
      initialBalance < 0
    ) {
      return res.status(400).json({ error: 'Incorrect initial balance' })
    }
    const hashPass = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      name,
      email,
      password: hashPass,
      initialBalance,
      currentBalance: initialBalance,
      transactions: [],
    })
    res.status(201).json({
      message: 'User was created',
      user: newUser,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(401).json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email })
    const checkPassword = await bcrypt.compare(password, user.password) // сравнение введенного и имеющегося пароля
    if (!user || !checkPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    }) //подписываем токен (как работает jwt.sign? - )
    res.status(200).json({ message: 'User was logged in', token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    if (!allUsers) {
      res.status(404).json({ error: 'Users not found' })
    }
    res.status(201).json({
      message: 'Users found',
      users: allUsers,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { getAllUsers, loginUser, registerUser }
