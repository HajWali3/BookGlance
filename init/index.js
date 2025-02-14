const mongoose = require("mongoose");
const initData = require("./data.js");
const { Book, Chapter } = require("../models/book.js");

main()
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BookGlance");
}
const initDb = async () => {
  // await Book.deleteMany({});
  // await Chapter.deleteMany({});
  await Book.insertMany(initData.data);
  await Chapter.insertMany(initData.chapters);
  console.log("data was initialized");
};

initDb();

// async function assignId() {
//   const Books = await Book.find({});
//   for (let book of Books) {
//     console.log(`Book id ${book._id}`);
//     let bookId = book._id;

//     for (let chpt of book.chapters) {
//       let chptId = book._id;
//       Book.updateOne({}, {chapters.book_id: bookId})
//       console.log(`chpt id ${chpt.book_id}`);
//     }
//   }
// }

// assignId();
