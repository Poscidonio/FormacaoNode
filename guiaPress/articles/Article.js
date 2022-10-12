const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

//criando uma tabela no banco definindo seu nome e suas colunas
const Article = connection.define('articles', {
  title: {
    //titulo
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    //rotas
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    //corpo do texto
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Criando o relacionamento
Category.hasMany(Article); //uma categoria tem muitos artigos / um pra muitos
Article.belongsTo(Category); // um pra um / um artigo pertence a uma categoria

//Forca a criação no banco de dados todas vez que a aplicaçao esta rodando, apos rodar uma vez comentar ou retirar !
//Article.sync({ force: true });

module.exports = Article;
