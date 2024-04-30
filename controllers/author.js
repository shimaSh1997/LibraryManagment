const Book = require("../models/book");
const Author = require("../models/author");

// const mongodb = require("mongodb");
exports.getAuthors = (req, res, next) => {
  console.log("in getAuthors");
  Author.find()
    .then((author) => {
      res.render("author/authors", {
        prods: author,
        pageTitle: "All Authors",
        path: "/author/authors",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getAddAuthor = (req, res, next) => {
  console.log("in getAdd author");
  res.render("author/edit-author", {
    pageTitle: "Add Author",
    path: "/author/add-author",
    editing: false,
  });
};

exports.postAddAuthor = (req, res, next) => {
  console.log("post AddAuthor");
  const name = req.body.name;
  const email = req.body.email;

  const author = new Author({
    name: name,
    email: email,
  });
  author
    .save()
    .then((result) => {
      console.log(result);
      console.log("Created Author");
      res.redirect("/author/authors");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditAuthor = (req, res, next) => {
  console.log("getEditAuthor logger");
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.authorId;
  Author.findById(prodId)
    // Product.findByPk(prodId)
    .then((author) => {
      if (!author) {
        return res.redirect("/");
      }
      res.render("author/edit-author", {
        pageTitle: "Edit author",
        path: "/author/edit-author",
        editing: editMode,
        author: author,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditAuthor = (req, res, next) => {
  console.log("postEditAuthor now log");
  const prodId = req.body.authorId;
  const updatedname = req.body.name;
  const updatedemail = req.body.email;
  Author.findById(prodId)
    .then((author) => {
      author.name = updatedname;
      author.email = updatedemail;
      return author.save();
    })
    .then((result) => {
      console.log("UPDATED author!");
      res.redirect("/author/authors");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteAuthor = (req, res, next) => {
  const prodId = req.body.authorId;
  Author.findByIdAndDelete(prodId)
    .then(() => {
      console.log("DESTROYED AUTHOR");
      res.redirect("/author/authors");
    })
    .catch((err) => console.log(err));
};
