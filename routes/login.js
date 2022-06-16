var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// var modelLogin = require("../model/login") //calling another file or exporting from login
// router.get('/', function(req, res) {
//   modelLogin.a("unkonow")
//     res.render('login');
//   });

//Making connection to mysql
// setting up host,user,name to sql 
con.connect()
var con = mysql.createConnection({
 host: "192.168.17.44",
 user: "root",
 password: "1234"
});

 
router.get('/', function(req, res, next) {
  console.log("saurabh");
  con.connect(function(err) {
      console.log("HARSH")
      if (err) console.log("err");
      else console.log("Connected!");
    });
  // modelLogin.a(modelLogin.pandy.name)
console.log("kisna");
console.log("SIR");
console.log("Butti");
  res.render('login');
});

//Inserting into mysql DB
router.post('/getLogin', function(req, res, next) {
  console.log(req.body)
  // res.send({"name":"himani"})
  //res.render('teacher')
  console.log(req.body.pass)
  var sql = "INSERT INTO `login` (`email`, `pass`) \
  VALUES ('"+req.body.Ashu+"', '"+req.body.pass+"');"
  console.log(sql)
 con.connect()
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);

    });
res.json({"Name":req.body})
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