class Filme {
  //atributos de uma classe
  constructor() {
    this.titulo = '';
    this.ano = 0;
    this.genero = '';
    this.diretor = '';
    this.atores = '';
    this.duracao = 0;
  }
  //metodos de uma classe
  Reproduzir() {
    console.log('Reproduzindo .... ');
  }

  Pausar() {
    console.log('Pausar || ');
  }

  Avancar() {
    console.log('Avancar >>> ');
  }

  Fechar() {
    console.log('Fechar X');
  }
}
