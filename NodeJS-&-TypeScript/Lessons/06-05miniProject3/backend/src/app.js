import express from "express"
import 'dotenv/config'
import connectDb from "./config/db.js"
import productRoutes from './routes/prouctRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/products', productRoutes)
app.use('/api/auth', userRoutes)

const PORT = process.env.PORT || 3333

app.get('/', (req,res) => {
    res.send('hello world')
})


connectDb()
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

