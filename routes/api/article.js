const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Article route');
});

module.exports = router;
