const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
//conectando ao banco
connection 
    .authenticate()
    .then(() => {
        console.log("Conexao feita com o banco de dados!")
    })
    .catch((msgErro) =>{
        console.log(msgErro)
    })

//Estou dizendo para o express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//codificando os dados para que o backEnd entenda
app.use(bodyParser.urlencoded({extended: false}))
//permite a leitura de dados com a estrutura json
app.use(bodyParser.json())

app.get("/", (req, res) =>{
    //ira listar todas as perguntas na pagina inicial 
    //raw tras apenas os dados da tabela e nada mais 
    Pergunta.findAll({raw: true, order:[
        ['id','DESC']//orderna de forma decrescente e ASC em ordem crescente 
    ]}).then(pergunta =>{
        res.render("index",{
            pergunta: pergunta
        })
    })
    
})

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) =>{
    //pega os dados do formulario salva nas variaveis
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    //depois salva no banco 
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        //apos salvar redireciona para pagina inicial
        res.redirect("/")
    })
})

app.get("/pergunta/:id",(req, res) =>{
var id = req.params.id;
Pergunta.findOne({
    where: {id: id}
}).then(pergunta => {
    if(pergunta != undefined){//se pergunta for diferente de vazia 
        res.render("pergunta", {
            pergunta: pergunta
            
        });
    }else { // se a pergunta nao for encontrada
        res.redirect("/")
    }
})
})
app.listen(3000, ()=>{console.log("app rodando!")})