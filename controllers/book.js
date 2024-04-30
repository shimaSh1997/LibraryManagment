const Book = require("../models/book");

exports.getIndex = (req, res, next) => {
  console.log("in getIndex");
  Book.find()
    .then((books) => {
      res.render("book/book-list", {
        prods: books,
        pageTitle: "Home",
        path: "/book/book-list",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getBook = (req, res, next) => {
  console.log('getBook')
  const prodId = req.params.bookId;
  Book.findById(prodId)
    .then((book) => {
      res.render("book/book-details", {
        book: book,
        pageTitle: book.title,
        path: "/books",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getBooks = (req, res, next) => {
  console.log("in getBooks");
  Book.find()
    .then((books) => {
      res.render("book/books", {
        prods: books,
        pageTitle: "All books",
        path: "/book/books",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getAddBook = (req, res, next) => {
  res.render("book/edit-book", {
    pageTitle: "Add Book",
    path: "/book/add-book",
    editing: false,
  });
};

exports.postAddBook = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const author = req.body.author;
  const description = req.body.description;
  const userId = req.user;
  const book = new Book({
    title: title,
    author: author,
    description: description,
    imageUrl: imageUrl,
    userId: userId,
  });
  book
    .save()
    .then((result) => {
      // console.log(result);
      console.log("Created book");
      res.redirect("/book/books");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditBook = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.bookId;
  Book.findById(prodId)
    // Product.findByPk(prodId)
    .then((book) => {
      if (!book) {
        return res.redirect("/");
      }
      res.render("book/edit-book", {
        pageTitle: "Edit book",
        path: "/book/edit-book",
        editing: editMode,
        book: book,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditBook = (req, res, next) => {
  const prodId = req.body.bookId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedauthor = req.body.author;
  const updatedDescription = req.body.description;
  Book.findById(prodId)
    .then((book) => {
      book.title = updatedTitle;
      book.author = updatedauthor;
      book.description = updatedDescription;
      book.imageUrl = updatedImageUrl;
      return book.save();
    })
    .then((result) => {
      console.log("UPDATED BOOK!");
      res.redirect("/book/books");
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.postDeleteBook = (req, res, next) => {
  const prodId = req.body.bookId;
  Book.findByIdAndDelete(prodId)
    .then(() => {
      console.log('DESTROYED BOOK');
      res.redirect('/book/books');
    })
    .catch(err => console.log(err));
};