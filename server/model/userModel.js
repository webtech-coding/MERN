const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const mongoose = require('./../database')

const schema = mongoose.Schema({
  //TODO : UPDATE THE SCHEMA AS REQUIRED
  email: {
    type: 'string',
    required: [true, 'Email can not be empty. '],
    unique: [true, 'Email already exist. '],
    validate: {
      validator: function(value) {
        return validator.isEmail(value)
      },
      message: 'Invalid email address.'
    }
  },
  password: {
    type: 'string',
    required: [true, 'Password is required'],
    minlength: [6, 'Password should be minimum 6 characters'],
    select: false
  },
  token: {
    type: 'string'
  }
})

schema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return
  }
  this.password = await bcrypt.hash(this.password, 12)

  next()
})

schema.methods.generateWebToken = async function() {
  const token = await jwt.sign({ id: this._id }, process.env.WEBTOKEN_SECRET, {
    expiresIn: process.env.EXPIRES_IN
  })

  this.token = token
  await this.save()
  return this.token
}

schema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('Usre', schema)
module.exports = User
