var express = require('express');
var router = express.Router();
var Race = require('../models/race');
var _ = require('underscore');

router
  .get('/', function(req, res, next) {
    Race
      .fetchAll({withRelated: ['planets', 'heroes']})
      .then(data => {
        res.render('races/index', {
          races: data.toJSON()
        });
      }, next)

  })
  .get('/:id', (req, res, next) => {
    Race
      .where({id: req.params.id})
      .fetch({withRelated: ['planets', 'heroes']})
      .then(data => {
        // res.json(data);
        res.render('races/show', {
          race: data.toJSON()
        });
      }, next)
  })

module.exports = router;
