var express = require('express');
var router = express.Router();
var Race = require('../models/race');
var _ = require('underscore');

// var knex = require('../config/db');

// Custom helper method to truncate
var truncate = function(array, property, newProperty, numChars) {
  array.forEach(function(el, i) {
    el[newProperty] = el[property].substr(0,numChars) + '...';
  });
};

router
  .get('/', function(req, res, next) {
    Race
      .fetchAll({withRelated: ['planets', 'heroes']})
      .then(data => {
        var data = data.toJSON();

        // Custom reference
        // truncate(array, objectStringProperty, newStringProperty, numChars )
        truncate(data, 'description', 'shortDescription', 150);

        res.render('races/index', {
          races: data
        });
      }, next)

  });

module.exports = router;
