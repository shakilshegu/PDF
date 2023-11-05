import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

import connectDB from './config/db.js';

const port = process.env.PORT || 3001
const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(
    cors({
        origin:"http://localhost:3000",
        methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
        credentials: true,
    })
)

app.use('/',userRoutes)

app.get('/',(req,res)=> res.send('sever is ready '))

app.listen(port,()=> console.log(`server strating on port ${port}`))


