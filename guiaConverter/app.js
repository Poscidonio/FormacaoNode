const HtmlParser = require('./HtmlParser');
var Processor = require('./Processor');
var Reader = require('./Reader');
var Writer = require('./Writer');
var Table = require('./Table');
var PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

leitor.Read('./users.csv');

async function main() {
  var dados = await leitor.Read('./users.csv');

  //console.log(dados);

  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  //retorna o cabecalho
  console.log(usuarios.header);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //retorna as linhas
  console.log(usuarios.rows);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //retorna numero de linhas
  console.log(usuarios.RowCount);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //retorna o numero de colunas
  console.log(usuarios.ColumnCount);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //retorna o html
  console.log(html);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  //gera o nome do arquivo e passa o que vai ser escrito
  escritor.Write('meuHtmlGerado.html', html);
  //gera o nome aleatorio passando a data atual como nome e passa o que vai ser escrito
  escritor.Write(Date.now() + '.html', html);
  //Exemplo real de composicao nao precisa creiar um html para usar o pdf basta usar o que ja tem
  //criando o PDf
  PDFWriter.WritePDF(Date.now() + '.PDF', html);
}

main();
