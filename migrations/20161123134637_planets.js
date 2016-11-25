
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planets', function(table){
    table.increments('id').unsigned().primary();
    table.string('name');
    table.text('description');
    table.integer('race_id').references('races.id');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("planets");
};
