var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//Get the dynamic data that goes with each svg graphic
router.get("/info/:target", (req, res) => {
  //Set up your SQL query here and retrieve the relevent data
  let query = `SELECT * FROM stats WHERE id="${req.param.target}"`;

  sql.query{query, (err, result) => {
    if (err) {console.log(err);}

    console.log(result);
    res.json(result(0));
  }}
})

module.exports = router;
