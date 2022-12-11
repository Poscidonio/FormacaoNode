const express = require('express');
const mercadoPago = require('mercadopago');
const app = express();

mercadoPago.configure({
  //modo true : teste - false : produção
  sandbox: true,
  access_token: 'TEST-3090984006555566-121116-313f15dd68c4af17bd172cdbd0457875-187345975',
});

app.get('/', (req, res) => {
  res.send('ola meu parca');
});

app.get('/pagar', async (req, res) => {
  var id = '' + Date.now();
  var email = 'guilherme@gmail.com';

  var dados = {
    items: [
      (item = {
        id: id,
        title: '2x salgado; 3x chinelos',
        quantity: 1,
        currency_id: 'BRL',
        unit_price: parseFloat(150),
      }),
    ],
    payer: {
      email: email,
    },
    external_reference: id,
  };
  try {
    var pagamento = await mercadoPago.preferences.create(dados);
    console.log(pagamento);
    return res.redirect(pagamento.body.init_point);
  } catch (err) {
    return res.send(err.message);
  }
});

app.listen(3000, (req, res) => {
  console.log('Servidor rodando !');
});
