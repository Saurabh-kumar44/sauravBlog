var express = require('express');
var router = express.Router();
<<<<<<< HEAD
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

  
 
=======
var _ = require('underscore');

/* GET home page. */
// router.get('/', function(req, res) {
//   // res.render('index', { title: 'Express' });
//   console.log(req);
//   // res.json({name:"Shivam"});
//   res.json({Groupby:_.groupBy(['one', 'two', 'three'], 'length'),Map:_.map([1, 2, 3], function(num){ return num * 3; })}),
//   console.log("Map"),
//   console.log(_.map([1,2,3])),
//   console.log(_.map([1, 2, 3], function(num){ return num * 3; })),
//   console.log("Groupby"),
//   console.log(_.groupBy([1.3, 2.1, 2.4])),
//   console.log(_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num)})),
//   console.log(_.groupBy(['one', 'two', 'three'], 'length'))
// });

router.get('/cal',function(req, res){
  res.render('index');
});

router.all('/add',function(req, res){
  console.log("ADDTION")
  console.log(req.body)
  var x=parseInt(req.query.num1);
   var  y=parseInt(req.query.num2);
    var result=x+y;
    console.log(result);  
});

router.all('/sub',function(req, res){
  console.log("SUBTRACTION")
  console.log(req.body)
  var x=parseInt(req.query.num1);
   var  y=parseInt(req.query.num2);
    var result=x-y;
    console.log(result);  
});

router.all('/mul',function(req, res){
  console.log("MULTIPLICATION")
  console.log(req.body)
  var x=parseInt(req.query.num1);
   var  y=parseInt(req.query.num2);
    var result=x*y;
<<<<<<< HEAD
  res.render('index',result);
>>>>>>> first commit
=======
    console.log(result);  
>>>>>>> Loading data by AJAX
});





module.exports = router;
