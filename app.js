const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
const bookRoutes = require("./routes/book");
const authorRoutes = require("./routes/author");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  User.findById("662f0c96a4afe2334c036364")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use("/book", bookRoutes);
app.use(bookRoutes);
app.use("/author",authorRoutes);


app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://shimawh2489:v2s5CpmSxGmROrP8@cluster0.dft1tsn.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Mary",
          email: "mary@test.com",
          books: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => console.log(err));
