var express = require("express");
var router = express.Router();
var rno;
var acosh;
var log1p;
var tan;
var sqrt;

/* GET users listing. */

router.get("/", function (req, res, next) {
  random = Math.random() * (100 - 1) + 1;

  acosh = Math.acosh(random);

  log1p = Math.log1p(random);

  tan = Math.tan(random);

  sqrt = Math.sqrt(random);

  res.send(`The value of Math.acosh() is ${acosh} <br>

            The value of Math.log1p() is ${log1p} <br>

            The value of Math.tan() is ${tan} <br>
            
            The value of Math.sqrt() is ${sqrt}`);
});

module.exports = router;