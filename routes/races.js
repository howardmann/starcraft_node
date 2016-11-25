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
  .get('/new', (req, res, next) => {
    res.render('races/new');
  })
  .get('/:id/edit', (req, res, next) => {
    Race
      .where({id: req.params.id})
      .fetch()
      .then( data => {
        res.render('races/edit', {
          id: data.get('id'),
          name: data.get('name'),
          description: data.get('description')
        });
      }, next)
  })
  .put('/:id', (req, res, next) => {
    Race
      .forge({id: req.params.id})
      .fetch()
      .then( race => {
        race.save({name: req.body.name, description: req.body.description})
        .then(race => {
          res.redirect('/races');
        }, next)
      })
  })
  .post('/', (req, res, next) => {
    new Race({name: req.body.name, description: req.body.description})
      .save()
      .then( () => {
        res.redirect('/races');
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
  .delete('/:id', (req, res, next) => {
    Race
      .forge({id: req.params.id})
      .fetch()
      .then( race => {
        race.destroy()
        .then(res.redirect('/races'))
      })
  })


module.exports = router;
