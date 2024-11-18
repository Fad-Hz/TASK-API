// koneksi database
const { config } = require('dotenv')
config()
const conn = require('./databases/database.js')
conn()

// entry
const express = require('express')
const taskRoute = require('./routes/task-route')
const app = express()
const {notFoundMiddleware, errorHandlerMiddleware} = require('./middlewares/index.js')

// middlewares & routes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/tasks', taskRoute)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))