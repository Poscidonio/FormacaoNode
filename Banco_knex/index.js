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

/* DELETE 
database
  .where({ id: 3 })
  .delete()
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* UPDATE
database
  .where({ id: 5 })
  .update({ preco: 0 })
  .table('games')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* ORDERBY ordenação crescente = asc e descresente = desc
database
  .select()
  .table('games')
  .orderBy('preco', 'desc')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* INSERT  relacional com isso a blizzard esta associada a um jogo no caso o id 5 que é GTA
  database
  .insert({
    nome: 'Blizzard',
    game_id: 5,
  })
  .table('estudios')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/*   innerJoin faz a consulta unindo duas tabelas porem se o campo comparado for nulo nao retorna nada 
database
  .select()
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 
Unindo as tabelas com campos especificicos solicitados
-----Relacionamento 1 p 1-----
database
  .select(['games.id', 'estudios.id as estudios_id', 'games.nome as game_nome', 'estudios.nome as estudio_nome'])
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  unindo as tabelas com todos os campos de uma e especifico d outra
  -----Relacionamento 1 p 1-----
database
  .select(['games.*', 'estudios.nome as estudio_nome'])
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


unindo as tabelas com todos os campos de uma e especifico d outra e ainda incluindo o where para algo mais especifico
  -----Relacionamento 1 p 1-----
database
  .select(['games.*', 'estudios.nome as estudio_nome'])
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .where('games.id', 5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  unindo as tabelas com todos os campos de uma e especifico d outra e ainda incluindo o where para algo mais especifico
  -----Relacionamento 1 p N-----
database
  .select(['games.*', 'estudios.nome as estudio_nome'])
  .table('games')
  .innerJoin('estudios', 'estudios.game_id', 'games.id')
  .where('games.id', 5)
  .then((data) => {
    var game = {
      id: 0,
      nome: '',
      estudios: [],
    };
    game.id = data[0].id;
    game.nome = data[0].nome;
//percorre a tabela para trazer todos os registros relacionados com o join
    data.forEach((estudio) => {
      game.estudios.push({ nome: estudio.estudio_nome });
    });
    console.log(game);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/* unindo as tabelas com todos os campos de uma e especifico d outra e ainda incluindo o where para algo mais especifico
-----Relacionamento N p N-----
database
  .select(['estudios.nome as estudios_nome', 'games.nome as game_nome', 'games.preco'])
  .table('games_estudios')
  .innerJoin('games', 'games.id', 'games_estudios.game_id')
  .innerJoin('estudios', 'estudios.id', 'games_estudios.estudio_id')
  .where('games.id', 2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */

//transaction

async function testeTransaction() {
  try {
    await database.trasaction(async (trans) => {
      await database.insert({ nome: 'Abreu' }).table('estudios');
      await database.insert({ nome: 'Python' }).table('estudos');
      await database.insert({ nome: 'node' }).table('estudios');
      await database.insert({ nome: 'AWS' }).table('estudios');
    });
  } catch (err) {
    console.log(err);
  }
}

testeTransaction();
