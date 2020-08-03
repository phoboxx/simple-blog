const express = require('express');
const Article = require('../../models/Article');
const router = express.Router();

router.get('/', (req, res) => {
  const articles = Article.find({}, (err, articles) => {
    if (!err) return res.json(articles);
    res.status(500).json({ err: err });
  });
});

router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });

  await article.save((err, article) => {
    if (!err) return res.json(article);
    res.status(500).json({ err: err });
  });
});

module.exports = router;
