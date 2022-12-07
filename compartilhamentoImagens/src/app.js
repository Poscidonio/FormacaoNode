let express = require('express');
let app = express();
let mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect('mongodb://localhost:2701/guiapics')
  .then(() => {
    console.log('Conectando com o banco');
  })
  .catch((err) => {
    console.log();
  });

app.get('/', (req, res) => {
  res.json({});
});

module.exports = app;
