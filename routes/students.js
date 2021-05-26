const { request } = require('express');
var express = require('express');
var router = express.Router();
const knex = require('../database/knex');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', { title: 'D.Y.Patil' });
});
router.get('/list', function(req, res, next) {
  var tablename='students';
  var studentsList=[];
  knex.select().table('students').then(function(studentsList)
  {
    console.log(studentsList);
    return studentsList;
  }).then(function(studentsList){
    return res.render('studentsList', { studentsList:studentsList });
  })
  
  //res.render('studentList', { studentsList: 'D.Y.Patil' });
});
router.post('/', function(req, res) {
  console.log(req.query);
  var tablename='students';
  var params=req.query;
  knex(tablename)
    .insert(params).then(function(data){
      console.log(data);
    });
  res.send(req.query);
});

module.exports = router;
