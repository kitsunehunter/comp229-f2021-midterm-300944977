/*
index.js
xavier zhang
300944977
*/
var express = require("express");
var router = express.Router();
let controlerIndex = require("../controllers/index");

/* GET home page. */
router.get("/", controlerIndex.home);

module.exports = router;
