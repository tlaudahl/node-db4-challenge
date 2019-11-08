
exports.up = function(knex) {
    return knex.schema.createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('ingredients')
        tbl.string('name').notNullable();

        tbl.integer('ingredient_id').unsigned().references('ingredient_id').inTable('ingredients').onDelete('RESTRICT').onUpdate('CASCADE')
    })
    .createTable('steps', tbl => {
        tbl.integer('recipe_id').unsigned().references('recipe_id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE')
        tbl.string('step_1').notNullable();
        tbl.string('step_2')
        tbl.string('step_3')
        tbl.string('step_4')
        tbl.string('step_5')
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name')
        tbl.integer('quantity')
    })
};

exports.down = function(knex) {
    
};
