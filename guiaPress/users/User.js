const Sequelize = require('sequelize');
const connection = require('../database/database');

//criando uma tabela no banco definindo seu nome e suas colunas
const User = connection.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

/*Forca a criação no banco de dados todas vez que a aplicaçao esta rodando, apos rodar uma vez comentar ou retirar ou mudar para false !
 assim se a tabela existir nao faz nada se nao existir cria. */
//User.sync({ force: true });

module.exports = User;
