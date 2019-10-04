const Category = require('./../model/categoryModel')

const AppError = require('./../handlers/appError')

const getCategories = async (req, res) => {
  const categories = await Category.find()

  res.status(200).json({
    status: true,
    statusCode: 200,
    categories
  })
}

const createCategories = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    if (!newCategory) {
      return new AppError('A new category could not be created')
    }

    res.status(200).json({
      status: true,
      statusCode: 200
    })
  } catch (error) {
    return new AppError(` new category could not be created ${error}`)
  }
}
module.exports = { getCategories, createCategories }
