var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs' });
});

router.get('/hello', function(req, res, next){
  try{
    res.send("Hello World!");
  }
  catch(error){
    console.log(error);
  }
})

module.exports = router;
