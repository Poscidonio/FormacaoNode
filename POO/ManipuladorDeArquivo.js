class Leitor {
  Ler(caminho) {
    return 'Caminho do arquivo';
  }
}

class Escritor {
  Escrever(arquivo, caminho) {
    console.log('Conteudo do arquivo');
  }
}

class Criador {
  Criar(arquivo, caminho) {
    console.log('Arquivo criado!');
  }
}

class Desctruidor {
  Deletar(arquivo, caminho) {
    console.log('Deletando arquivo!');
  }
}

class ManipuladorDeArquivo {
  constructor(nome) {
    this.arquivo = nome;
    //recebe a classe Leitor() como objeto e instancia nesta classa isso pode ser feitos em demais classe para reutilizar o codigo em
    //forma de componentes
    this.leitor = Leitor();
    this.escritor = Escritor();
    this.criador = Criador();
    this.desctruidor = Desctruidor();
  }
}

class GerenciadorDeUSusarios {
  constructor() {
    this.criador = new Criador();
    this.escritor = new Escritor();
  }
  SalvarListaDeUsuarios(lista) {
    this.criador.Criar('usuarios.txt');
    this.escritor.Escrever('usuarios.tx', lista);
  }
}

var manipulador = new ManipuladorDeArquivo('meuArquivo.txt');

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.desctruidor.Deletar();

var usuarios = new GerenciadorDeUSusarios();

usuarios.SalvarListaDeUsuarios(['Gui', 'Lima']);
