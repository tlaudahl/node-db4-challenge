
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: "Flour"},
        {name: "Sugar"},
        {name: "Milk"},
        {name: "Eggs"}
      ]);
};
