const express = require('express');
const app = express();
const multer = require('multer'); //middleware
const path = require('path'); //pega extensao

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //cd = callBack
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    //pega o nome original o arquivo + a data para que nao haja duplicidade nos nomes + a extensao do arquivo
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo recebido');
});

app.listen(8080, () => {
  console.log('Servidor radando');
});
