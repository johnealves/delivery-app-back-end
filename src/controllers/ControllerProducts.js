const ServiceProducts = require('../services/ServiceProducts');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await ServiceProducts.getAllProducts();

    return res.status(200).json({ products });
  } catch (error) {
    return next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ServiceProducts.getProductById({ id });

    return res.status(200).json({ product });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};