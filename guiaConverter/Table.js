class Table {
  constructor(arr) {
    //pega primeira linha no caso o cabecalho
    this.header = arr[0];
    //remove a primeria linha
    arr.shift();
    //linhas da tabela
    this.rows = arr;
  }
  //conta as linhas
  get RowCount() {
    return this.rows.length;
  }
  //conta as colunas
  get ColumnCount() {
    return this.header;
  }
}

module.exports = Table;
