const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTSecret = 'AquiVoceEscreveUmTokenDesejadoAleatoriamente';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
function auth(req, res, next) {
  const authToken = req.headers['authorization'];

  if (authToken != undefined) {
    const bearer = authToken.split(' ');
    var token = bearer[1];

    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        res.status(401);
        res.json({ err: 'TOKEN inválido!' });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, email: data.email };
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ err: 'Token inválido!' });
  }
}

//banco de dados chumbado
var DB = {
  games: [
    {
      id: 1,
      title: 'Call of duty',
      year: 2012,
      price: 50,
    },
    {
      id: 2,
      title: 'The Simns',
      year: 2002,
      price: 500,
    },
    {
      id: 3,
      title: 'FootBal',
      year: 2010,
      price: 5,
    },
  ],
  users: [
    {
      id: 65,
      name: 'Guilherme',
      email: 'guilherme@gmail.com',
      password: 'guilherme123',
    },
    {
      id: 25,
      name: 'Joao',
      email: 'joao@gmail.com',
      password: 'joao123',
    },
  ],
};

app.get('/games', auth, (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get('/game/:id', auth, (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = DB.games.find((g) => g.id == id);

    if (game != undefined) {
      res.sendStatus = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post('/game', auth, (req, res) => {
  var { title, price, year } = req.body;

  DB.games.push({
    id: 2323,
    title,
    price,
    year,
  });
  res.sendStatus(200);
});

app.delete('/game/:id', auth, (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var index = DB.games.findIndex((g) => g.id == id);

    if (index == -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});

app.put('/game/:id', auth, (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(req.params.id);

    var game = DB.games.find((g) => g.id == id);

    if (game != undefined) {
      var { title, price, year } = req.body;

      if (title != undefined) {
        game.title = title;
      }

      if (price != undefined) {
        game.price = price;
      }

      if (year != undefined) {
        game.year = year;
      }

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post('/auth', (req, res) => {
  var { email, password } = req.body;

  if (email != undefined) {
    var user = DB.users.find((u) => u.email == email);
    if (user != undefined) {
      if (user.password == password) {
        jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
          if (err) {
            res.status(400);
            res.json({ err: 'Falha interna' });
          } else {
            res.status(200);
            res.json({ token: token });
          }
        });
      } else {
        res.status(401);
        res.json({ err: 'Credenciais!' });
      }
    } else {
      res.status(404);
      res.json({ err: 'O email enviado não existe na base de dados' });
    }
  } else {
    res.status(400);
    res.json({ err: 'O email enviado é invalido' });
  }
});

app.listen(8000, () => {
  console.log('API RODANDO');
});
