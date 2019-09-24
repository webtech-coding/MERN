const User = require('../model/userModel')
const AppError = require('./../handlers/appError')

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('password')

    if (!user) {
      return next(new AppError('Email or password invalid', 404))
    }

    const validatePassword = await user.comparePassword(password)

    if (!validatePassword) {
      return next(new AppError('Email or password is invalid', 404))
    }

    const token = await user.generateWebToken()

    res
      .cookie('norded_auth', token)
      .status(200)
      .json({
        status: true,
        statusCode: 200,
        msg: 'Login successful'
      })
  } catch (error) {
    next(new AppError(`Email or password invalid ${error}`, 404))
  }
}

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const newUser = await User.create({ email, password })

    if (!newUser) {
      return next(new AppError('User could not be created'))
    }

    const token = await newUser.generateWebToken()

    res
      .cookie('norded_auth', token)
      .status(201)
      .json({
        status: true,
        statusCode: 201,
        msg: 'A new user created successfully'
      })
  } catch (error) {
    return next(new AppError(`User could not be created ${error}`))
  }
}

const isAuth = (req, res) => {
  //TODO : CHECK IF AUTH
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'AUTH'
  })
}

const signOut = async (req, res) => {
  //TODO : IMPLEMENT LOGIN
  res.status(201).json({
    user: res.body
  })
}

module.exports = { isAuth, signIn, signOut, register }
