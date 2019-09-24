const dotenv = require('dotenv')
dotenv.config()

/**
 * REQUIRE DATABASE
 */
require('./database')

/**
 * REQUIRE OUR APPLICATION
 */
const app = require('./app')

/**
 * RUN SERVER ON ${PORT}
 */
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `)
})
