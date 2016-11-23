exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries. Note: we use Promise.join so the code runs in order
  return Promise.join(
    knex('heroes').del(),
    knex('planets').del(),
    knex('races').del()
  );
};
