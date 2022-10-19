function adminAuth(req, res, next) {
  if (req.session.user != undefined) {
    /* se o usuaro estiver logado ele vai para a rota que o usuario esta tentando acessar */
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = adminAuth;
