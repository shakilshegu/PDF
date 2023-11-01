import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

import connectDB from './config/db.js';

const port = process.env.PORT || 3001

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',userRoutes)

app.get('/',(req,res)=> res.send('sever is ready '))

app.listen(port,()=> console.log(`server strating on port ${port}`))


