exports.get404 = (req, res, next) => {
  // console.log("test");
  res.status(404).render("404", { pageTitle: "Page not found", path: "/404" });
};
