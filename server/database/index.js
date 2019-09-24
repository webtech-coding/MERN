const mongoose = require('mongoose')

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connection successful')
  })
  .catch((error) => {
    console.log(`Database connection error: ${error}`)
  })

module.exports = mongoose
