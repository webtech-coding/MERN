const router = require('express').Router()

const {
  getCategories,
  createCategories
} = require('./../controller/categoryController')

router
  .route('/')
  .get(getCategories)
  .post(createCategories)

module.exports = router
