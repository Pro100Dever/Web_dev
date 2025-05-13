import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ error: "all fields are required" });
    }
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: "User is successfully created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    const checkPassword = await bcrypt.compare(password, user.password); // сравнение введенного и имеющегося пароля
    if (!user || !checkPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    }); //подписываем токен (как работает jwt.sign? - )
    res.status(200).json({ message: "User was logged in", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
