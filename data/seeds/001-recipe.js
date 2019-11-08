
exports.seed = function(knex) {
      return knex('recipe').insert([
        {name: 'Cookie'},
        {name: 'Another Cookie'},
        {name: 'Another nother cookie'}
      ]);
};
