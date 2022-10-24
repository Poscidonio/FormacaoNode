//fs file system serve para manipular pastas e arquvios
const fs = require('fs');

var conteudo;

//escrevendo no arquivo
fs.writeFile('./testeArquivo', '-----Aqui voce digita o texto para incluir no arquivo ou criar', (err) => {
  if (err) {
    console.log('Erro durante o salvamento');
  }
});

//lendo o arquivo ja existente
fs.readFile('./testeArquivo', { encoding: 'utf-8' }, (erro, dados) => {
  if (erro) {
    console.log('Ocorreu uma falha durante a leitura do arquivo!!');
  } else {
    conteudo = dados;

    console.log(conteudo);

    //ou simplesmente exiba os
    console.log(dados);
  }
});
