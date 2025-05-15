const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./Database/Database.js");
const book = require("./Database/Model/Book.js");
const Book = require("./Database/Model/Book.js");
const port = process.env.port || 2000;

//Database connection
db();

//middleware
app.use(express.json());

//creating a book
app.post("/books", async (req, res) => {
  try {
    const { title, author } = req.body;
    const Newbook = new Book({ title, author });
    const Savedbook = await Newbook.save();
    console.log(Savedbook);
    res.status(201).json(Savedbook);
  } catch (error) {
    console.log(error.message);
    req.status(500).json(error.message);
  }
});

//Getting a book
app.get("/books", async (req, res) => {
  try {
    const Allbooks = await Book.find();
    console.log(Allbooks);
    res.status(201).json(Allbooks);
  } catch (error) {
    console.log(error.message);
    req.status(500).json(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listenting at port ${port}`);
});
