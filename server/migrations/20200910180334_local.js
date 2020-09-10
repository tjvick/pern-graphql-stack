
exports.up = function(knex) {
  return knex.schema.createTable('table_name', (table) => {
    table.integer('id');
    table.string('colName');
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('table_name');
};
