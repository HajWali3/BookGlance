const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const { Book, Chapter } = require("./models/book.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BookGlance");
}

app.get("/listings", async (req, res) => {
  const allBooks = await Book.find({});

  res.render("listings/index", { allBooks });
});
app.get("/a", async (req, res) => {
  res.render("listings/a");
});
app.get("/listings/show/:id", async (req, res) => {
  let { id } = req.params;
  let objectId = new mongoose.Types.ObjectId(id);
  let book = await Book.findById(id);
  let chapter = await Chapter.find({ book_id: id });

  res.render("listings/show", { book, chapter });
});
app.get("/listings/summary/:id", async (req, res) => {
  let { id } = req.params;
  let chapter = await Chapter.findById(id);

  let book = await Book.findById(chapter.book_id);

  res.render("listings/summary", { book, chapter });
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});
app.post("/listings/new", async (req, res) => {
  let { title, description, price, location, country } = req.body;
  await Book.insertOne({
    title: title,
    description: description,
    price: price,
    location: location,
    country: country,
  });
  res.redirect("/listings");
});

//Update
app.get("/listings/update/:id", async (req, res) => {
  let { id } = req.params;
  let book = await Book.findById(id);
  let chapter = await Chapter.insertOne({
    book_id: id,
    title: "",
    chapter_number: 0,
    description: "",
    summary: ""
  })  
  res.render("listings/update", { chapter });
});
app.put("/listings/update/:id", async (req, res) => {
  let { id } = req.params;
  let { title, chapter_number,  description, summary } = req.body;
  let chapter = await Chapter.findById(id);
  let objectId = new mongoose.Types.ObjectId(chapter.book_id);
  let book = await Book.findById(objectId);
  let objectId2 = new mongoose.Types.ObjectId(book._id);
  

  await Chapter.findByIdAndUpdate(id, {
    title: title,
    chapter_number: chapter_number,
    description: description,
    summary: summary
  });
  res.redirect(`/listings/show/${objectId2}`);
});

//DELETE
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.redirect("/listings");
});
app.delete("/listings/chapter/:id", async (req, res) => {
  let { id } = req.params;
   await Chapter.findByIdAndDelete(id);
});

app.listen(8001, () => {
  console.log("Server is listenngg at port 8080...");
});
