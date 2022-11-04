var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('express-flash');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  session({
    secret: 'keyborard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(flash());

app.get('/', (req, res) => {
  console.log('Servidor rodando ............');
});

app.listen(8000, (req, res) => {
  console.log('Servidor rodando ............');
});
