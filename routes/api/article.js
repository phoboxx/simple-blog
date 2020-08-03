const express = require('express');
const Article = require('../../models/Article');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });

  try {
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

module.exports = router;
