const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/Article');
const article = require('./routes/api/article');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use('/article', article);

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) return console.log('Successfuly conencted to DB');
    console.error(err);
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/article', async (req, res) => {
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

app.listen(3000, () => {
  console.log('simple-blog is listening on port 3000!');
});
