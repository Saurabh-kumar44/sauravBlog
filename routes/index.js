var express = require('express');
var router = express.Router();
var _ = require('underscore');//using underscore

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);//print the req
  // res.json({name:"Saurav"}); 
  // res.render('index', { title: 'Express' });

  console.log("By Map");
  console.log(_.map([1, 2, 3], function(num){ return num * 3; }));//using map function
  res.json(_.map([1, 2, 3], function(num){ return num * 3; }))
  console.log("by sort by");
  console.log(_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }));

  
 
});


module.exports = router;
