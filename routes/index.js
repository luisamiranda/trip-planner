const express = require('express');
const parser = require('body-parser');
const router = express.Router();

router.use(parser.urlencoded({extended: true}));
router.use(parser.json());

router.get('/', function(req, res, next){
  Hotel.findAll()
  .then(function(){
    return Restaurant.findAll()
  })
  .then(function(){
    return Activity.findAll()
  })
  .then(function(){
    res.render('index');  
  })
});

module.exports = router;
