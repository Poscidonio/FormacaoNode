let app = require('../src/app');
let supertest = require('supertest');
let request = supertest(app);

let mainUser = { name: 'Guilherme1', email: 'g@gmail.com', password: '1212121' };

//antes de tudo
beforeAll(() => {
  //insere o usuario
  request
    .post('/user')
    .send(mainUser)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
});
//depois de tudo
afterAll(() => {
  //remove o usuario no final
  return request
    .delete(`/user/${mainUser.email}`)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
});

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

  describe('Autenticação', () => {
    test('Deve me retornar um token quando logar', () => {
      return request
        .post('/auth')
        .send({ email: mainUser.email, password: mainUser.password })
        .then((res) => {
          expect(res.statusCode) == 200;
          expect(res.body.token).toBeDefined();
        })
        .catch((err) => {
          throw err;
        });
    });
  });

  test('Deve me impedir que o usuario nao cadastrado faça login', () => {
    return request
      .post('/auth')
      .send({ email: 'umemailQualuqer@gmail.com', password: '124545455' })
      .then((res) => {
        expect(res.statusCode) == 403;
        expect(res.body.errors.email) == 'Email nao cadastrado';
      })
      .catch((err) => {
        throw err;
      });
  });

  test('Deve me impedir que o usuariofaça login com a senha errada', () => {
    return request
      .post('/auth')
      .send({ email: mainUser.email, password: 'errado4545454545' })
      .then((res) => {
        expect(res.statusCode) == 403;
        expect(res.body.errors.password) == 'senha incorreta';
      })
      .catch((err) => {
        throw err;
      });
  });
});
