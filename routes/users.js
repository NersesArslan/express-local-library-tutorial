var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  res.send(console.log("something test"));
});
router.get("/cool", function (req, res, next) {
  res.send("you're so cool");
});
module.exports = router;
