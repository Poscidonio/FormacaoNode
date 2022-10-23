class Dado {
  //recebe o parametro
  constructor(face) {
    this.face = face;
  }
  //metodo que recebe o min = 1 e max = d6,d12,d100
  Rolar() {
    console.log('Resultado do dado: ' + this.GetRandomIntInclusive(1, this.face));
  }
  //metodo que chama o Rolar() e gera um numero aleatorio
  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
//estancia a classe DadO() e parra o valor para õs metodos
var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);
//executa o metodo da classe
d6.Rolar();
d12.Rolar();
d100.Rolar();
