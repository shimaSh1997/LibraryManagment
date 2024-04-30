const path = require("path");

const express = require("express");

const authorController = require("../controllers/author");
const router = express.Router();

router.get("/add-author", authorController.getAddAuthor);
router.post("/add-author", authorController.postAddAuthor);
router.get("/authors", authorController.getAuthors);
router.get("/edit-author/:authorId", authorController.getEditAuthor);
router.post("/edit-author", authorController.postEditAuthor);
router.post('/delete-author', authorController.postDeleteAuthor);
module.exports = router;
