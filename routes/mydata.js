var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Mounisha Guntupalli' });
  res.render('mydata', { fact : 'I love learning Turkish language by watching turkey series.'});
});

module.exports = router;
