var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('syllabus', { title: 'D.Y.Polytechnic' });
});

module.exports = router;