// Race Model
// ==========
// Create a race model class

var Bookshelf = require('../config/db');
require('./planet');
require('./hero');

var Race = Bookshelf.Model.extend({
  tableName: 'races',
  idAttribute: 'id',

  planets: function(){
    return this.hasMany('Planet');
  },

  heroes: function(){
    return this.hasMany("Hero").through('Planet');
  }

}, {
  dependents: ['planets']
});

module.exports = Bookshelf.model('Race', Race);
