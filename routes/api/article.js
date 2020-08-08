const express = require('express');
const Article = require('../../models/Article');
const router = express.Router();

// Desc: GET all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// Desc: GET specific article
router.get('/:id', async (req, res) => {
  // check if it's a valid ID
  const checkIfValidId = new RegExp('^[0-9a-fA-F]{24}$');
  if (!checkIfValidId.test(req.params.id))
    return res.status(400).json({ err: 'Not a valid id' });

  try {
    const article = await Article.findById(req.params.id);
    if (article === null)
      return res.status(400).json({ err: "Article dosen't exist" });
    return res.json(article);
  } catch (err) {
    if (err) return res.json({ err: err });
  }
});

// Desc: POST an article
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
