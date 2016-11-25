
exports.up = function(knex, Promise) {
  return knex.schema.createTable('races', function(table){
    table.increments('id').unsigned().primary();
    table.string('name');
    table.text('description');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("races");
};
