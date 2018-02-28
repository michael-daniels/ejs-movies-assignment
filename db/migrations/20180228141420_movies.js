
//creating table with "knex migrate:latest" (command)
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies',(table)=>{
    table.increments();
    table.string('title');
    table.text('desc');
    table.string('genre');
    table.integer('votes');
    table.timestamps(true, true);
  });
};

//dropping table with "knex migrate:rollback" (command)
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
