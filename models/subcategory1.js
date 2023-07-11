// models/subcategory.js
const mongoose = require('mongoose');

const subcategory1Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  subcategory_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('subcategories1', subcategory1Schema);
