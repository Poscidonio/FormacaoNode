var pdf = require('html-pdf');
var ejs = require('ejs');

var nomeDoUsuario = 'Guilherme';
var curso = 'Formacao node.js';

ejs.renderFile('./index.ejs', { nome: nomeDoUsuario, curso1: curso }, (err, html) => {
  if (err) {
    console.log('erro!');
  } else {
    console.log(html);
  }
});

pdf.create(html, {}).toFile('./meuPrimeiroPDF.pdf', (err, res) => {
  if (err) {
    console.log('Um erro aqui:(');
  } else {
    console.log(res);
  }
});
