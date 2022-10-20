function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6);
    }, 1500);
  });
}

function buscarEmailNoBanco() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6);
    }, 2000);
  });
}

function enviarEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      if (!deuErro) {
        resolve({ time: 6, to: 'gui@cooxupe.com' });
      } else {
        reject('FILA CHEIA');
      }
      resolve(6);
    }, 4000);
  });
}

pegarId().then((id) => {
  buscarEmailNoBanco(id).then((email) => {
    enviarEmail('Oi meu chapa', email)
      .then(() => {
        console.log('O email foi enviado, para o id ' + id);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
