var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('express-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser('esseEoCookieParser'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(flash());

app.get('/', (req, res) => {
  var emailError = req.flash('emailError');
  var nameError = req.flash('nameError');
  var pointError = req.flash('pointError');
  var email = req.flash('email');
  var name = req.flash('name');
  var point = req.flash('point');

  //operacao ternaria se emailError for vazio ou igual a 0 seta
  //em emailError undefined se nao ele é igual a ele mesmo
  emailError = emailError == undefined || emailError.length == 0 ? undefined : emailError;
  email = email == undefined || email.length == 0 ? '' : email;

  res.render('index', { emailError, pointError, nameError, email: email, name: name, point: point });
});

app.post('/form', (req, res) => {
  var { email, name, point } = req.body;

  var emailError;
  var nameError;
  var pointError;

  if (email == undefined || email == '') {
    emailError = 'O Campo email nao pode ser vazio !!';
  }

  if (name == undefined || name == '') {
    nameError = 'O Campo nome nao pode ser vazio !!';
  }

  if (point == undefined || point == '') {
    pointError = 'O Campo pontos nao pode ser vazio !!';
  }

  if (emailError != undefined || nameError != undefined || pointError != undefined) {
    req.flash('emailError', emailError);
    req.flash('pointError', pointError);
    req.flash('nameError', nameError);

    req.flash('email', email);
    req.flash('name', name);
    req.flash('point', point);

    res.redirect('/');
  } else {
    res.send('Formularo enviado com sucesso !');
  }
});

app.listen(8000, (req, res) => {
  console.log('Servidor rodando 8000............');
});
