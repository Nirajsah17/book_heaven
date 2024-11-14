const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  isbn: {
    type: Number, 
    unique: true
  },
  book_title: {
    type: String,
    required: true
  },
  book_author: {
    type: String,
    required: true
  },
  year_of_publication: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  image_url_s: {
    type: String,
    required: false
  },
  image_url_m: {
    type: String,
    required: false
  },
  image_url_l: {
    type: String,
    required: false
  }
});
bookSchema.index({ book_title: 'text', book_author: 'text' });
const Books = mongoose.model('Books', bookSchema);
module.exports = Books;
