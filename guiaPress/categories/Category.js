const Sequelize = require('sequelize');
const connection = require('../database/database');

//criando uma tabela no banco definindo seu nome e suas colunas
const Category = connection.define('categories', {
  title: {
    //titulo
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    //rota
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Forca a criação no banco de dados todas vez que a aplicaçao esta rodando, apos rodar uma vez comentar ou retirar !
//Category.sync({ force: true });

module.exports = Category;
