var config = require("../knexfile")[process.env.NODE_ENV || "development"];
var knex = require("knex")(config);
// Require bookshelf
var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;
