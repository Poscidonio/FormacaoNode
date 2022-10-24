//Classe com metodo estatico feito desta forma nao é necessario intaciala para chamala
class DadoStatic {
  constructor(face) {
    //recebe o parametro
    this.face = face;
  }
  //metodo que chama o metodo de gerar aleatorio e para o min e o max
  static Rolar() {
    console.log('Resultado do dado: ' + this.GetRandomIntInclusive(1, this.face));
  }
  //gera o numero aleatorio
  static GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
//como o metodo é estatico nao é necessario instacialo anes de chama-lo
DadoStatic.Rolar(6);
DadoStatic.Rolar(12);
DadoStatic.Rolar(100);
