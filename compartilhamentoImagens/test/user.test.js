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
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);
      })
      .catch((err) => {
        fail(err);
      });
  });
});
