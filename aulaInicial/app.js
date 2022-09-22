//declarando uma variavel e carregando o modulo do node http
var http = require("http")
//criando o servidor na porta 8181
http.createServer(function(requisicao, resposta){
    resposta.end("BEM VINDO AO MEU SITE!")
}).listen(8181)
//imprime mensagem
console.log("Meu servidor esat rodando!")