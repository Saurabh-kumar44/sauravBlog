var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
// router.get('/data', function(req, res, next) {
//   console.log(req);//print the req
//   res.json({name:"SHivam beta"}); //send the response to the server basically a (Get request) 
//   // res.render('index', { title: 'Express' });
// });

// router.get('/:da', function(req, res, next) {
//     // console.log(res.params.da);//print the req
//     res.json({name:req.params.da});//Params used to take variable (teacher/hahah() 
//     // res.render('index', { title: 'Express' });
// });

// router.get('/:da/:ta', function(req, res, next) {//intialisinf two var 
//     // console.log(res.params.da);//
//     res.json({name:req.params.da+" is and " +req.params.ta+ " is from kcc"});//sending res and print  
//     // res.render('index', { title: 'Express' });
//   });

// router.get('/:da/:ta', function(req, res, next){//intialising two var 
//     console.log(res.params.da);//apply params
//     res.json({name:req.params.da+"is and " +req.params.ta+ "is from kcc"});//sending res and print  
    // res.render('index', { title: 'Express' });
//     var x = Number(req.params.da);
//     var y = Number(req.params.ta);
//     var z = x+y; //adding
//     res.json({sum:z});
  // });
router.get('/:da', function(req, res,) {
  // res.json({name:"Saurav"});//send the response to the server basically a (Get request) 
  res.render('teacher', { title: req.params.da,name1:req.params });
});

// router.get('/data', function(req, res, next) {
//   console.log(req.query);//print the req
//   // res.json({name:"SHivam beta"}); //send the response to the server basically a (Get request) 
//  res.render('index', { title: 'Express' });
// });

// router.get('/data', function(req, res, next) {
//   console.log(req.query);//print the req
//   // res.json({name:"SHivam beta"}); //send the response to the server basically a (Get request) 
//  res.render('index', { title: req.query.fname});
// });

// router.post('/data', function(req, res, next) {
//   console.log(req.body);//print the req
//   console.log(req.query.lname);
//   // res.json({name:"SHivam beta"}); //send the response to the server basically a (Get request) 
//  res.render('index', { title: req.body.fname});
// });

module.exports = router;