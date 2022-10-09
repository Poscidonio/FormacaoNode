const bodyParser = require('body-parser');
const express = require('express');
const connection = require('./database/database');
const app = express();

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

//view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//data base connection
connection
  .authenticate()
  .then(() => {
    console.log('conexao feita com sucesso !!');
  })
  .catch((error) => {
    console.log(error);
  });

//rotas
app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('O servidor esta rodando');
});
