const { Address } = require('../../models');

const createAddress = async ({ userId, address }) => {
  const { street, number, complement = null, district, city, cep } = address;
  const newAddress = await Address.create({
    userId,
    street,
    number,
    complement,
    district,
    city,
    cep,
  });

  return newAddress.dataValues;
};

module.exports = {
  createAddress,
}