import knex from '../database/connection';
import User from './User';
class PasswordToken {
  async create(email) {
    var user = await User.findEmail(email);
    if (user != undefined) {
      try {
        var token = Date.now();
        await knex
          .insert({
            user_id: user.id,
            used: 0,
            token: token, //é usual utilizar o UUID como token
          })
          .table('passwordtokens');
        return { status: true, token: token };
      } catch (err) {
        console.log(err);
        return { status: false, err: err };
      }
    } else {
      return { status: false, err: 'O email nao existe no banco de dados !' };
    }
  }
}

module.exports = new PasswordToken();
