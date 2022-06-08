var express = require('express');
var router = express.Router();

var modelLogin = require("../model/login") ////callidcvng another file or exporting from login
router.get('/', function(req, res) {
  modelLogin.a("unkonow")
    res.render('login');
  });

//Making connection to mysql
// setting up host,user,name to sql
var con = mysql.createConnection({
 host: "192.168.17.44",
 user: "root",
 password: "1234"
});


  router.get('/', function(req, res, next) {
    console.log("saurav");
    con.connect(function(err){
      console.log("HArsh");
      // if(err) throw err;
      if(err) throw console.log("err");
      console.log("Connected");
    });
    // modelLogin.a(modelLogin.pandy.name)
    console.log("himani");
    res.render('login');
  });


/* GET home page. */
router.get('/', function(req, res) {
//   console.log(req);
console.log("I am fine")
  res.render('login');
});

// // using by get
router.get('/getLogin', function(req, res, next) {
    console.log(req.query);
    // res.render({"name":"himani"});
    res.json({"name":req.query.Ashu});
  });

  //by post
  // router.post('/getLogin', function(req, res, next) {
  //   console.log(req.body);
  //   // res.render({"name":"himani"});
  //   res.json({"name":req.body.Ashu});
  // });

  // // rendering email and password by GET
  // router.get('/getLogin', function(req, res) {
  //   // console.log(req.query);
  //   // res.render({"name":"himani"});
  //   res.json({"Email":req.query.email,"Pass":req.query.password});
  // });

   // rendering email and password by POST
  //  router.post('/getLogin', function(req, res) {
  //   // console.log(req.query);
  //   // res.render({"name":"himani"});
  //   res.json({"Email":req.body.email,"Pass":req.body.password});
  // });

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