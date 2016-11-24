var express = require('express');
var router = express.Router();

router
  .get('/', (req, res, next) => res.render('index', {title: 'Express'}))
  .use('/races', require('./races.js'))
  .use('/planets', require('./planets.js'))
  .use('/heroes', require('./heroes.js'))

module.exports = router;
