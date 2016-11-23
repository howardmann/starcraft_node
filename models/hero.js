// Planet Model
// ==========
// Create a planet model class

// Note: We need to write the syntax a little differently for exporting module and has and belongs to associations because of circular dependency of modules. This is relying on the bookshelf registry plugin. Refer to docs

var Bookshelf = require('../config/db');
require('./race');

var Hero = Bookshelf.Model.extend({
  tableName: 'heroes',

  race: function(){
    return this.belongsTo('Race');
  }


});

module.exports = Bookshelf.model('Hero', Hero);
