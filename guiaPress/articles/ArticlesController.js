const express = require('express');
const slugify = require('slugify');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');

router.get('/admin/articles', (req, res) => {
  Article.findAll({ include: [{ model: Category }] }).then((articles) => {
    res.render('admin/articles/index', { articles: articles });
  });
});

router.get('/admin/articles/new', (req, res) => {
  Category.findAll().then((categories) => {
    res.render('admin/articles/new', { categories: categories });
  });
});

router.post('/articles/save', (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;

  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category,
  }).then(() => {
    res.redirect('/admin/articles');
  });
});

router.post('/articles/delete', (req, res) => {
  var id = req.body.id;
  //diferente de null
  if (id != undefined) {
    //NaN not a number / esta negando a validaçao se ele é um numero ou seja esta pegando o numero
    if (!isNaN(id)) {
      Article.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect('/admin/articles');
      });
    } else {
      //se nao for um numero
      res.redirect('/admin/articles');
    }
  } else {
    res.redirect('/admin/articles');
  }
});

module.exports = router;
