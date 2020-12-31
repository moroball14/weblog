var router = require("express").Router();

router.get("/", (req, res)=>{
  throw new Error("sample");
  res.render("./index.ejs");
});

module.exports = router;
