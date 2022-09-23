//este é um model estrutura que representa as tabelas do banco de dados com express
const Sequelize = require('sequelize');
const connection = require('./database');
//cria no banco uma tabela com os compos titulo e descriçcao passando
//o tipo da variavel e se ela pode ser nula ou nao, no caso nao pode ser
const Pergunta = connection.define('pergunta', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
//vai sincronizar com o banco de dados e nao vai forcar caso a tabela ja exista
Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;
