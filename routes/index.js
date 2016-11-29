var express = require('express');
var router = express.Router();
var races = require('./races.js');
var planets = require('./planets.js');
var heroes = require('./heroes.js');
var Race = require('../models/race');

router.get('/', function(req, res, next){
  Race
    .fetchAll({withRelated: ['planets', 'heroes']})
    .then(data => {
      res.render('index', {
        races: data.toJSON()
      });
    }, next)
});

// ===RACES
router
  .get('/races', races.index)
  .get('/races/new', races.new)
  .post('/races', races.create)
  .get('/races/:id', races.show)
  .get('/races/:id/edit', races.edit)
  .put('/races/:id', races.update)
  .delete('/races/:id', races.destroy)

// ===PLANETS
router
  .get('/planets', planets.index)
  .get('/planets/:id', planets.show)

// ===HEROES
router
  .get('/heroes', heroes.index)
  .get('/heroes/:id', heroes.show)

module.exports = router;
