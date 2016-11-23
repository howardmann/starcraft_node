var express = require('express');
var router = express.Router();
var Planet = require('../models/planet');

router
  .get('/', function(req, res, next) {
    Planet
      .fetchAll({
        withRelated: [{'race': function(qb){
          qb.column('id', 'name');
        }}]
      })
      .then(data => {
        res.send(data);
      }, next)
  });

module.exports = router;
