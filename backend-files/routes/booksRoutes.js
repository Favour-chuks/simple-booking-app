import { Book } from "../models/booksmodel.js";
import express from "express";

// express routing
const router = express.Router();
// Path to save a new book to the database

router.post("/", async (req, res) => {
  console.log("you have choosen to save a new book");
  try {
    // throw error when a value is missing
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all the required field: author, title, publishing year",
      });
    }

    // to get the required book values

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    // to put a new book to the database

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// to get the values of all the books
router.get("/", async (req, res) => {
  try {
    const books = await books.find({});
    return res.status(200).json({
      count: books.lenght,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// to get the value of only one book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
});

// to update the books
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all the required field: author, title, publishing year",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

// to delete data from the database

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: `sorry😢 book not found` });
    }
    return res
      .status(200)
      .json({ message: `the book was deleted successfully 🙂` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
