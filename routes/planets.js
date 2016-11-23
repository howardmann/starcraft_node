var express = require('express');
var router = express.Router();
var knex = require('../config/db');

router
  .get('/', function(req, res, next) {
    knex("planets")
      .then(data => {
        res.send(data);
      }, next)
  });

module.exports = router;