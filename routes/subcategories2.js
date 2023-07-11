// routes/subcategories.js
const express = require('express');
const Subcategory2 = require('../models/subcategory2');
const router = express.Router();

router.get('/test', async (req, res) => {
  const subcategories2 = await Subcategory2.find();
  res.send('In subcategories2 page');
});

module.exports = router;
