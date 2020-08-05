const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const article = require('./routes/api/article');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

//Everything sent to /api/article is forwarded to ./routes/api/article Router
app.use('/api/article', article);

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

app.listen(3000, () => {
  console.log('simple-blog is listening on port 3000!');
});
