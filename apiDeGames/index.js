const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
};

app.get('/games', (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get('/game/:id', (req, res) => {
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

app.post('/game', (req, res) => {
  var { title, price, year } = req.body;

  DB.games.push({
    id: 2323,
    title,
    price,
    year,
  });
  res.sendStatus(200);
});

app.delete('/game/:id', (req, res) => {
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

app.put('/game/:id', (req, res) => {
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

app.listen(8000, () => {
  console.log('API RODANDO');
});
