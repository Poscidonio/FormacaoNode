var nome = 'Gui';
var idade = 26;

var empresa = {
  nome: 'Cooxupe',
  cidade: 'Guaxupe',
  site: 'cooxupe.com',
  email: 'cooxupe@gmail',
};

/* var user = {
  nome,
  idade,
  empresa: empresa.nomeEmpresa,
  cidade: empresa.cidade,
  site: empresa.site,
  email: empresa.email,
}; */

var user = {
  nome,
  idade,
  ...empresa,
};

console.log(user);
