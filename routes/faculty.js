var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faculty', { title: 'D.Y.Polytechnic' });
});

module.exports = router;
