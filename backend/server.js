import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import cors from 'cors'

// import { notFound, errorHandler } from './middleware/error.js'
import connectDB from './configs/connectDB.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
} else {
    /**
     * @TODO create a file log
     */

    app.use(morgan('combined'))
}

const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

import confessions from './routes/confession.js'

app.use('/api/v1/confession', confessions)

// app.use(notFound)
// app.use(errorHandler)


const PORT = process.env.PORT || 3001

app.listen(
    PORT,
    console.log(
        `> Server running in ${process.env.NODE_ENV} mode on: http://localhost:${PORT}`.yellow.bold
    )
)