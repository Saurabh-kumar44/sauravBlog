var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
=======
router.get('/user', function(req, res) {
>>>>>>> first commit
  res.send('respond with a resource');
});

module.exports = router;
