const express = require('express');
const parser = require('body-parser');
const router = express.Router();
const Promise = require('bluebird');
var models = require('../models');
var db = models.db;
var Place = models.Place;
var Hotels = models.Hotel;
var Restaurants = models.Restaurant;
var Activities = models.Activity;

router.use(parser.urlencoded({extended: true}));
router.use(parser.json());

router.get('/', function(req, res, next){
  var findHotel = Hotels.findAll();
  var findRestaurant = Restaurants.findAll();
  var findActivity = Activities.findAll();

  Promise.all([findHotel, findRestaurant, findActivity])
    .spread(function(hotels, restaurants, activities) {
      res.render('index', {
        hotels, restaurants, activities
      });
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
