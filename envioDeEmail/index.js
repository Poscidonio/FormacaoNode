const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  //aqui buscar quais configurações do seu servidor pois o git barrou o exemplo
  host: '',
  port: 587,
  secure: true, //se tiver seguraça ativa é true senao false
  auth: {
    //colocar suas credenciais
    smtpuser: 'teste@hotmail.com',
    smtppass: '12345abs',
  },
});

transporter
  .sendMail({
    from: 'TESTE <teste@hotmail.com>',
    to: 'guilhermeposcidonio@gmail.com',
    subject: 'Aoba meu fi',
    text: ' estou fazendo um teste ',
    html: "Estou terminando o curso formação node.js, se voce esta aqui de uma ohada no meu perfil do likedin<a href='https://www.linkedin.com/in/guilhermeposcidonio/'> Guilherme Poscidônio</a> tmj !",
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
