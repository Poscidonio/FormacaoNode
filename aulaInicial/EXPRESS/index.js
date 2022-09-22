const express = require("express")//importandp o express
const app = express() //iniciando o express


//definindo a rota inicial]
//req - requsicao - dados enviados pello usuario 
// res -  resposta - resposta que vai ser enviada para o usuario
app.get("/", function(req, res){
    //enviando uima respota para a requisicao da rota
res.send("BEM VINDO")
})
//passando parametros para rota porem sem ser obrigatorio e setando em uma variavel
app.get("/blog/:artigo?", function(req, res){
    //enviando uima respota para a requisicao da rota

    var artigo = req.params.artigo
    if(artigo){
        res.send("O nome do artigo é " + artigo)
    }else{
        res.send("BEM VINDO AO BLOG")
    }
})

app.get("/canal/youtube", function(req, res){
    //uma query entre um array para que seja passado qualquer coisa como query para imprimir a mensagem 
    //ou seja http://localhost:3000/canal/youtube?canal=qualquerCoisa nao é mais utilizado apenas para didatica
    var canal = req.query["canal"]
    if (canal){
    //enviando uma respota para a requisicao da rota
    res.send("BEM VINDO AO CANAL DO YOUTUBE" + canal)
    }else {
    res.send("Canal nao encontrado")
    }
})

//rota com parametro, o parametro e obrigatorio ou seja localhost:3000/ola/qualquerCoisa
// mais tem que ter se nao nao roda
    app.get("/ola/:nome", function(req, res){
    //usando o que esta sendo passado na rota setando em uma variavel e imprindo ela 
    var nome = req.params.nome
    res.send("ola" + nome)
})
    //é possivel passa mais de um parametro e concatenalos
        app.get("/ola/:nome/:empresa", function(req, res){
    //usando o que esta sendo passado na rota setando em uma variavel e imprindo ela 
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("ola" + nome + "da" + empresa)
})

    app.listen(3000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
            console.log("Servidor iniciado com sucesso!")
        }
})