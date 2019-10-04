const express = require('express')
const cookieParser = require('cookie-parser')

const errorHandler = require('./handlers/errorHandler')

const app = express()

/**
 * APPLICATION MIDDLEWARES
 */
app.use(cookieParser())
app.use(express.json())

/**
 * API ROUTES
 */
const authRouter = require('./routes/authRoutes')
app.use('/api/norded/auth', authRouter)

const categoryRouter = require('./routes/categoryRoutes')
app.use('/api/norded/category', categoryRouter)

app.get('/', (req, res) => {
  //TODO : REMOVE THIS LINK ON DEVELOPMENT
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'Norded Api..'
  })
})

/**
 * HANDLE APPLICATION ERRORS
 */
app.use(errorHandler)

module.exports = app
