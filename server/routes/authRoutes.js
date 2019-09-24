const router = require('express').Router()
const {
  isAuth,
  signIn,
  signOut,
  register
} = require('./../controller/authController')

router.route('/').get(isAuth)
router.route('/signin').post(signIn)
router.route('/signout').post(signOut)
router.route('/register').post(register)
module.exports = router
