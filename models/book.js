const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  genre: String,
  summary: String,
  image: {
    type: String,
    default:
      "https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg",
    set: (v) =>
      v === ""
        ? "https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg"
        : v,
  },
  description: String,
});

const chapterSchema = new Schema({
  book_id: { type: Schema.Types.ObjectId, ref: "Book" }, // Reference the Book model
  chapter_number: Number,
  title: String,
  summary: String,
});

const Book = mongoose.model("Book", bookSchema);
const Chapter = mongoose.model("Chapter", chapterSchema);
module.exports = { Book, Chapter };
