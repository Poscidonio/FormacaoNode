var database = require('./database');

/* ----------- INSERT NO BANCO -----------
 var dados = [
  {
    nome: 'Call of duty 2',
    preco: 40,
  },
  {
    nome: 'GTA',
    preco: 60,
  },
  {
    nome: 'treco',
    preco: 300,
  },
  {
    nome: 'Call of duty 1',
    preco: 90,
  },
  {
    nome: 'GTA1',
    preco: 100,
  },
  {
    nome: 'treco1',
    preco: 500,
  },
];

database
  .insert(dados)
  .into('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/*----------- SELECT NO BANCO ----------- 
database
  .select()
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* ----------- INSERT AND SELECT NO BANCO OU NESTED QUERIES -----------  
database
  .insert({ nome: 'footbal', preco: 787 })
  .into('games')
  .then((data) => {
    database
      .select()
      .table('games')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*----------- Monta a query para executar selects -----------
o where é quando é comparativos
var query = database.select(['id', 'preco']).where({ nome: 'GTA' }).where({ id: 2 }).table('games');

console.log(query.toQuery());
 */

/* Quando é necessario utilizar filtros mais elaborados é necessario utilizar o whereRaw
var query = database.select(['id', 'preco']).whereRaw("nome = 'GTA' OR preco > 60").table('games');

console.log(query.toQuery()); */

/* Exemplo de RAW
 database
  .select()
  .whereRaw("nome = 'GTA' OR preco > 300")
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* RAW  QUERY CRUA 
database
  .raw('SELECT * FROM games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */
