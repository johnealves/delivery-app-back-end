'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'AC/DC',
        price: 26.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/ac-dc.jpg',
        description: "Burguer de carne Angus grelhado, pão de brioche artesanal, bacon, cheddar, calabresa grelhada no shoyo, molho barbecue, maionese de bacon da casa"
      },
      {
        name: 'Beatles',
        price: 23.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/beatles.jpg',
        description: "Burguer de carne Angus grelhado, pão brioche artesanal, queijo cheddar, cebola roxa em conserva, tomate e alface americano fresquinhos."
      },
      {
        name: 'Black Sabbath',
        price: 27.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/black.jpg',
        description: "Burguer de carne Angus grelhado, pão australiano fofinho, cheddar, muito bacon, molho barbecue artesanal defumado e cebola caramelizada no mel."
      },
      {
        name: 'Dolce',
        price: 27.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/dolce.jpg',
        description: "Burguer de carne Angus grelhado, picles artesanal feito na casa, muito queijo gorgonzola, bacon crocante e geleia de pimenta artesanal"
      },
      {
        name: 'Iron Maiden',
        price: 35.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/iron-maiden.jpg',
        description: "2 Burguer de carne Angus grelhados, pão brioche artesanal, cheddar em dobro, bacon em dobro, cebola caramelizada no mel, picles da casa, alface e tomate fresquinhos, barbecue defumado e maionese de bacon."
      },
      {
        name: 'Oasis',
        price: 25.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/oasis.jpg',
        description: "Burguer de carne Angus grelhado, pão de brioche artesanal, muçarela, bacon, onion rings, barbecue artesanal, alface e tomate fresquinhos e maionese de bacon."
      },
      {
        name: 'Pink Floyd',
        price: 25.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/pink-floyd.jpg',
        description: "Burguer de carne Angus grelhado, pão brioche artesanal, queijo cheddar, bacon, cebola caramelizda, picles feito na casa, alface e tomate fresquinhos."
      },
      {
        name: 'Rock in Rio',
        price: 29.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/rock-in-rio.jpg',
        description: "Burguer de carne Angus grelhado, pão brioche artesanal, bastante molho de cheddar feito na casa e bacon crocante."
      },
      {
        name: 'Slash',
        price: 17.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/slash.jpg',
        description: "Burguer de carne Angus, Smash burguer (prensado na chapa) 100g, cheddar, pão brioche artesanal, maionese de bacon, alface e tomate fresquinho"
      },
      {
        name: 'Anéis de cebola empanados',
        price: 13.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/aneis-de-cebola.jpg',
        description: "Deliciosos anéis de cebola empanados, sequinhos e crocantes."
      },
      {
        name: 'Batata frita',
        price: 11.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/batata-frita.jpg',
        description: "Batata frita crocante e Temperada com páprica defumada e orégano."
      },
      {
        name: 'Batata com cheddar e bacon',
        price: 22.97,
        url_image: 'https://john-delivery-app.herokuapp.com/images/batata-com-cheddar.jpg',
        description: "Deliciosa batata com nosso molho cheddar artesanal e muito bacon crocante."
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
