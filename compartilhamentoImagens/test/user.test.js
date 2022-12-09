let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

describe('Cadastro de usuario', () => {
  test('Deve cadastrar um usuario com sucesso', () => {
    //gerando um email aleatorio com a data atual
    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = { name: 'Guilherme', email: email, password: '123456' };

    return request
      .post('/user')
      .send(user)
      .then((res) => {
        expect(res.statusCode) == 200;
        expect(res.body.email) == email;
      })
      .catch((err) => {
        throw err;
      });
  });

  test('Deve impedir que um usuario se cadastre com os dados  vazios', () => {
    let user = { name: '', email: '', password: '' };

    return request
      .post('/user')
      .send(user)
      .then((res) => {
        expect(res.statusCode) == 400;
      })
      .catch((err) => {
        fail(err);
      });
  });

  test('Deve impedir o usuario cadastrar com um email existente', () => {
    //criando como um email novo
    let time = Date.now();
    let email = `${time}@gmail.com`;
    let user = { name: 'Guilherme', email: email, password: '123456' };

    return request
      .post('/user')
      .send(user)
      .then((res) => {
        expect(res.statusCode) == 200;
        expect(res.body.email) == email;

        return request
          .post('/user')
          .send(user)
          .then((res) => {
            expect(res.statusCode) == 400;
            expect(res.body.error).toEqual('Email já cadastrado');
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
      });
  });
});
