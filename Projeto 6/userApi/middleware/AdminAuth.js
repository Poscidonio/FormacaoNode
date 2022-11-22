var jwt = require('jsonwebtoken');
var secret = 'AquiEseuTokenEpodeSerQualquerCoisa';

module.exports = function (req, res, next) {
  const authToken = req.headers['authorization'];

  if (authToken != undefined) {
    const bearer = authToken.split(' ');
    var token = bearer[1];

    try {
      var decoded = jwt.verify(token, secret);

      if (decoded.role == 1) {
        next();
      } else {
        res.status(403);
        res.send('Você não possui permissão para esta ação !!');
        return;
      }
    } catch (err) {
      res.status(403);
      res.send('Você não esta verificado !!');
      return;
    }
  } else {
    res.status(403);
    res.send('Você não esta verificado !!');
    return;
  }
};
