// Race Model
// ==========
// Create a race model class

var Bookshelf = require('../config/db');
require('./planet');
require('./hero');

var Race = Bookshelf.Model.extend({
  tableName: 'races',

  planets: function(){
    return this.hasMany('Planet');
  },

  heroes: function(){
    return this.hasMany("Hero")
  }

});

module.exports = Bookshelf.model('Race', Race);
