// models/subcategory.js
const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('subcategory', subcategorySchema);
