import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import productRoutes from './routes/prodouctRoutes.js' 
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
const port = process.env.PORT || 5000;
connectDB( )
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Cookie Parser Middleware
app.use(cookieParser())

app.get('/', (req,res) => { 
    res.send('API is running...');
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(port,() => console.log(`Server running on port ${port}`));
app.use(notFound);
app.use(errorHandler);