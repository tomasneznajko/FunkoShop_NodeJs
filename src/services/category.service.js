const CategoryModel = require('../models/category.model');

const getAllCategories = async () => {
  return await CategoryModel.getAll();
}

module.exports = {
  getAllCategories,
}