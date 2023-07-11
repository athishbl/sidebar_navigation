// models/subcategory.js
const mongoose = require('mongoose');

const subcategory2Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  subcategory1_id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('subcategories2', subcategory2Schema);
