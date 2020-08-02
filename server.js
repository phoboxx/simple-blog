const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) return console.log('Successfuly conencted to DB');
    console.error(err);
  }
);

app.listen(3000, () => {
  console.log('simple-blog is listening on port 3000!');
});
