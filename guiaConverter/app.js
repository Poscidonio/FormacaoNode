const Processor = require('./Processor');
var Reader = require('./Reader');

var leitor = new Reader();

leitor.Read('./users.csv');

async function main() {
  var dados = await leitor.Read('./users.csv');

  //console.log(dados);

  var dadosProcessados = Processor.Process(dados);
}

main();
