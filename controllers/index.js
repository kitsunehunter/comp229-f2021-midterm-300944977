/*
index.js
xavier zhang
300944977
*/
exports.home = function (req, res, next) {
  res.render("index", { title: "Home" });
};
