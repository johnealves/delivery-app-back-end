'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('address', [
      {
        user_id: 4,
        Street: 'Rua dos Alfaneiros',
        number: 4,
        complement: null,
        district: 'Chacara',
        city: 'Nova Iguaçu',
        cep: 26032000,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('address', null, {});
  }
};
