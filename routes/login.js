var express = require('express');
var router = express.Router();
<<<<<<< HEAD


var mysql = require('mysql');
// var modelLogin = require("../model/login") //calling another file or exporting from login
// router.get('/', function(req, res) {
//   modelLogin.a("unkonow")
//     res.render('login');
//   });

//Making connection to mysql
// setting up host,user,name to sql 
// con.connect();
var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: " kccStudent"
});

 
router.get('/', function(req, res) {
  res.render('login');
con.connect(function (err) {
   if (err) console.log("err");
   else console.log("Connected!");
<<<<<<< HEAD
=======
  
   
>>>>>>> 7ecf70b75eefc6260e49555831411f03df3898b3
});
  // modelLogin.a(modelLogin.pandy.name)
// console.log("kisna");
// console.log("SIR");
// console.log("Butti");
//   res.render('login');
});

//Inserting into mysql DB
router.all('/insert', function(req, res) {
<<<<<<< HEAD
  var sql = "INSERT INTO `SAURABHV` (`email`, `pass`) \
  VALUES ('"+req.body.fname+"','"+req.body.lname+"');"
=======
  var sql = "INSERT INTO `SAURABHV` (`lname`, `fname`) \
  VALUES ('"+req.body.lname+"','"+req.body.fname+"');"
>>>>>>> 7ecf70b75eefc6260e49555831411f03df3898b3
=======
var mysql = require('mysql');
const a = require('../model/login');
var session = require('express-session')
var map = require('underscore/cjs/map.js');
var _ = require('underscore');

var modelLogin = require("../model/login");//calling file or exporting from lgin
const { getLoginPost } = require('../controller/controller');
// router.get('/',function(req,res){
//    modelLogin("unknown")
//    res.render('login');

// });

//Making connection to mysql
//setting up host user,name,to sql
var con = mysql.createConnection({
   host: "easylearning.guru",
   user: "kcc_student",
   password: "Kccitm.edu.in1",
   database: " kccStudent"
 });






/* GET home page. */
router.get('/', function(req, res) {
     res.render('login');
   con.connect(function (err) {
      if (err) console.log("err");
      else console.log("Connected!");
     
      
   });
});




// router.get('/getLogin', function(req, res) {
//     console.log(req.query);
//     // res.send({"name":"shivam"});
//     res.json({"EMAIL":req.query.email,"PASS":req.query.password});
//  });

router.post('/getLogin', function(req, res) {
    console.log(req.query);
    // res.send({"name":"shivam"});
    x=req.body.email;
    y=req.body.password;
    res.json({"EMAIL":req.body.email,"PASS":req.body.password,"Concatinated String":x+" and "+y});
    
 });


var pool = mysql.createPool({
   connectionLimit: 10,
   host : 'easylearning.guru',
   user :  'kcc_student',
   password : 'Kccitm.edu.in1',
   database : 'kccStudent'
});

router.get('/read', function(req, res) {
   pool.getConnection(function (err,connection){
      connection.query("SELECT * FROM SHIVAMP",function(err,rows){
         connection.release();
         if(err) throw err;

         console.log(rows.length);
         res.send(JSON.stringify(rows));
      });
   });
  
});


router.all('/insert', function(req, res) {
  var sql = "INSERT INTO `SHIVAMP` (`lname`, `fname`) \
  VALUES ('"+req.body.lname+"','"+req.body.fname+"');"
>>>>>>> first commit
  console.log(sql)
  con.connect(
     con.query(sql,function(err,result){
        console.log(result);
     })
<<<<<<< HEAD
  );
  
});

var pool = mysql.createPool({
  connectionLimit: 10,
  host : 'easylearning.guru',
  user :  'kcc_student',
  password : 'Kccitm.edu.in1',
  database : 'kccStudent'
});

router.get('/read', function(req, res) {
  pool.getConnection(function (err,connection){
     connection.query("SELECT * FROM SAURABHV",function(err,rows){
        connection.release();
        if(err) throw err;

        console.log(rows.length);
        res.send(JSON.stringify(rows));
     });
  });
 
});





/* GET home page. */
// router.get('/', function(req, res) {
// //   console.log(req);
// console.log("I am fine")
//   res.render('login');
// });
router.all('/upgateLogin', function(req, res) {
  res.render('login');
  con.query("")
 
});

// // using by get
// router.get('/getLogin', function(req, res, next) {
//     console.log(req.query);
//     // res.render({"name":"himani"});
//     res.json({"name":req.query.Ashu});
//   });

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
  //   res.json({"Email":req.body.email,"Pass":req.body.pass});
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

=======
  )
  
});


 router.all('/upgateLogin', function(req, res) {
   res.render('login');
   con.query("")
  
});


module.exports = router;
>>>>>>> first commit
