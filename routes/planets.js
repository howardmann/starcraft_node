var Planet = require('../models/planet');

exports.index = function(req, res, next) {
  Planet
    .fetchAll({withRelated: ['race']})
    .then(data => {
      res.render('planets/index', {
        planets: data.toJSON()
      });
    }, next)
};

exports.show = (req, res, next) => {
  Planet
    .where({id: req.params.id})
    .fetch({withRelated: ['race', 'heroes']})
    .then(data => {
      res.render('planets/show', {
        planet: data.toJSON()
      });
    }, next);
};

//
//
// var express = require('express');
// var router = express.Router();
// var Planet = require('../models/planet');
//
// router
//   .get('/', function(req, res, next) {
//     Planet
//       .fetchAll({
//         withRelated: [{'race': function(qb){
//           qb.column('id', 'name');
//         }}]
//       })
//       .then(data => {
//         res.render('planets/index', {
//           planets: data.toJSON()
//         });
//       }, next)
//   })
//   .get('/:id', function(req, res, next) {
//     Planet
//       .where({id: req.params.id})
//       .fetch({withRelated: ['race', 'heroes']})
//       .then(data => {
//         // res.json(data);
//         res.render('planets/show', {
//           planet: data.toJSON()
//         });
//       }, next)
//   })
//
// module.exports = router;
