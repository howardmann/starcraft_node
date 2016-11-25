var express = require('express');
var router = express.Router();
var races = require('./races.js');

router.get('/', (req, res, next) => res.render('index', {title: 'Express'}));

// ===RACES
router
  .get('/races', races.index)
  .get('/races/new', races.new)
  .post('/races', races.create)
  .get('/races/:id', races.show)
  .get('/races/:id/edit', races.edit)
  .put('/races/:id', races.update)
  .delete('/races/:id', races.destroy)

  // .get('/races/:id', races.show);
// router.use('/races', require('./races.js'));

// router.use('/planets', require('./planets.js'));
// router.use('/heroes', require('./heroes.js'));

module.exports = router;
