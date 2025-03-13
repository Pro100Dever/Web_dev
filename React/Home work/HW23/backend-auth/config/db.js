const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('URL to DB/authDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
    process.exit(1)
  }
}

module.exports = connectDB
