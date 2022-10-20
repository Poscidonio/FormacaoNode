function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
        Para: ${para}
        --------------------------
        ${corpo}
        De: Gui
        `);
    var deuErro = false;
    if (deuErro) {
      callback(12, 'O envio de email falhou!!');
    } else {
      callback(12);
    }
  }, 8000);
}

console.log('Inicio do envio');
enviarEmail('<<<<<< CallBack funcionou >>>>>>', 'TESTE@cooxupe.com', (time, erro) => {
  if (erro == undefined) {
    //OK
    console.log(`Seu email foi enviado
    Tudo OK !! Tempo ${time}`);
  } else {
    //Opa. deu erro!
    console.log('Ocorreu um erro ' + erro);
  }
});
