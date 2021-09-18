const RepositoryProducts = require('../repositories/RepositoryProducts');

const getAllProducts = async () => {
  const products = await RepositoryProducts.getAllProducts();

  return products;
};

const getProductById = async ({ id }) => {
  const product = await RepositoryProducts.getProductById({ id });

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};