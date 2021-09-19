const ServiceAddress = require('../services/ServiceAddress');

const addNewAddress = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const address = req.body;

    const newAddress = await ServiceAddress.addAddress({ userId, address })
    
    return res.status(201).json(newAddress);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  addNewAddress
}