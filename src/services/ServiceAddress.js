const RepositoryAddress = require('../repositories/RepositoryAddress')

const addAddress = async ({ userId, address }) => {
  const newAddress = await RepositoryAddress.createAddress({ userId, address })

  return newAddress
}

module.exports = {
  addAddress,
}