const express = require("express");
const bookController = require("../controllers/book");

const router = express.Router();

router.get("/", bookController.getIndex);
router.get("/books", bookController.getBooks);
router.get('/books/:bookId', bookController.getBook);
router.get("/add-book", bookController.getAddBook);
// /admin/add-product => POST
router.post("/add-book", bookController.postAddBook);
router.get("/edit-book/:bookId", bookController.getEditBook);
router.post("/edit-book", bookController.postEditBook);
router.post('/delete-book', bookController.postDeleteBook);


module.exports = router;