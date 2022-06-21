var express = require('express');
var router = express.Router();

/* GET home page. */

// router.get('/data', function(req, res, next) {
//   console.log(req);//print the req
//   res.json({name:"Saurav"}); //send the response to the server basically a (Get request) 
//   // res.render('index', { title: 'Express' });
//   // dfsf
//   //sdfsdf
// });

// router.get('/:da', function(req, res, next) {
//     //Params used to take variable (teacher/hahah() 
//     res.render('teacher', { title:req.params.da });
// });


module.exports = router;

router.get('/data', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:"Shivam"});
});

router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({name:res.body.fname});
});


router.get('/:da/:ta', function(req, res) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da);
    //res.json({name:req.params.da});
    //res.json({name:req.params.da+" is from kccitm"});
//     res.json({name:req.params.da+" and "+req.params.ta+" is from kccitm"});
//   });
   var x = Number(req.params.da);
   var y = Number(req.params.ta);
   var z =x+y;
// res.json({name:req.params.da+" and "+req.params.ta+" is from kccitm"});
//   });
  res.json({
      sum:z
  });

  
});
module.exports = router;

