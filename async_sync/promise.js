function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = true;
      if (!deuErro) {
        //os paramentos podem receber apenas um dado, ou um JSON como abaixo
        resolve({ time: 6, to: 'gui@gmail.com' }); // Promessa OK!
      } else {
        reject('ERRO !!!'); //NAO CUMPRIU A PROMESSA
      }
    });
  }, 4000);
}
//o then só é retornado quando a promessa é cumprida caso contrario nao chama
enviarEmail('OLA GALERA DE COWBOY', 'gui@gmai.com')
  //forma convencional
  /* .then(({retornoPromisse}) => {
    console.log('Opa promisse cumprida');
    console.log(`
    Time: ${retornoPromisse.time}
    -------------------------
    To: ${retornoPromisse.to}
    `);
  })
 */

  //forma desestruturada para pegar campo a campo o nome deve ser o mesmo do retorno da promisse
  .then(({ time, to }) => {
    console.log('Opa promisse cumprida');
    console.log(`
    Time: ${time}
    -------------------------
    To: ${to}
    `);
  })
  //sempre sera executado quando a promessa nao for cumprida
  .catch((erro) => {
    console.log(`Aqui deu erro ---> ${erro}`);
    console.log('nao foi dessa vez');
  });
