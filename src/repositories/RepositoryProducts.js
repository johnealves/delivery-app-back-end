const { Product } = require('../../models');

const getAllProducts = async () => {
  const products = await Product.findAll();

  return products;
};

const getProductById = async ({ id }) => {
  const findProduct = await Product.findOne({ where: { id } });

  return findProduct;
};


module.exports = {
  getAllProducts,
  getProductById
};