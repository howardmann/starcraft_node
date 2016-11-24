var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');


router
  .get('/', function(req, res, next) {
    Hero
      .fetchAll({withRelated: ['race', 'planet']})
      .then(data => {
        res.render('heroes/index', {
          heroes: data.toJSON()
        });
      }, next)
  })
  .get('/:id', function(req, res, next) {
    Hero
      .where({id: req.params.id})
      .fetch({withRelated: ['race', 'planet']})
      .then(data => {
        res.render('heroes/show', {
          hero: data.toJSON(),
          total: data.total()
        });
      }, next)
  })

module.exports = router;
