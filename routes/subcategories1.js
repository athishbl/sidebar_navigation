// routes/subcategories.js
const express = require('express');
const Subcategory1 = require('../models/subcategory1');
const router = express.Router();

router.get('/test', async (req, res) => {
  const subcategories1 = await Subcategory1.find();
  res.send('In subcategories1 page');
});

module.exports = router;
