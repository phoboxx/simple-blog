const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) return console.log('Successfuly conencted to DB');
    console.error(err);
  }
);

app.get('/', (req, res) => {
  res.send(req.body.test);
});

app.listen(3000, () => {
  console.log('simple-blog is listening on port 3000!');
});
