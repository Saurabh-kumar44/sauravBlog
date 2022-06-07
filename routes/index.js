var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);//print the req
  res.json({name:"Saurav"}); 
  // res.render('index', { title: 'Express' });
 
});


module.exports = router;
