const express = require("express");
const cors = require("cors");
const db = require("./Database/Database");
const Book = require("./Models/Book");

const app = express();

db(); // connect to MongoDB

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/books", async (req, res) => {
  const { title, author } = req.body;
  try {
    const newBook = new Book({ title, author });
    const saved = await newBook.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
