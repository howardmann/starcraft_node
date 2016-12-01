// Planet Model
// ==========
// Create a planet model class

// Note: We need to write the syntax a little differently for exporting module and has and belongs to associations because of circular dependency of modules. This is relying on the bookshelf registry plugin. Refer to docs

var Bookshelf = require('../config/db');
require('./race');
require('./hero');


var Planet = Bookshelf.Model.extend({
  tableName: 'planets',

  race: function(){
    return this.belongsTo('Race');
  },

  heroes: function(){
    return this.hasMany('Hero');
  }

}, {
  dependents: ['heroes']
});

module.exports = Bookshelf.model('Planet', Planet);
