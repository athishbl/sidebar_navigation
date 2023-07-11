// routes/subcategories.js
const express = require('express');
const Subcategory = require('../models/subcategory');
const router = express.Router();

router.get('/test', async (req, res) => {
  const subcategories = await Subcategory.find();
  res.send('In subcategories page');
});

module.exports = router;
