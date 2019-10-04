const mongoose = require('./../database/')

const schema = mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Category name is required'],
    unique: [true, 'Category name already exist']
  },
  duration: {
    type: 'string',
    required: [true, 'Duration is required']
  }
})

const Category = mongoose.model('Category', schema)
module.exports = Category
