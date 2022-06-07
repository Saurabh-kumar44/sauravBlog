var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//   console.log(req);
console.log("I am fine")
  res.render('login');
});

// // using by get
// router.get('/getLogin', function(req, res, next) {
//     console.log(req.query);
//     // res.render({"name":"himani"});
//     res.json({"name":req.query.Ashu});
//   });

  //by post
  router.post('/getLogin', function(req, res, next) {
    console.log(req.body);
    // res.render({"name":"himani"});
    res.json({"name":req.body.Ashu});
  });

  //by all- used no matter sending by get or post it will hit here
//   router.all('/getpost', function(req, res, next) {
//     console.log(req.body)
//     if(req.body){
//         //do this
//     }
//     else{
//         //do something
//     }
    // res.render({"name":"himani"});
    // res.json({"name":req.body.Ashu});
//   });

module.exports = router;