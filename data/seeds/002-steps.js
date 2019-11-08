
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_1: "Step 1"},
        {step_2: "Step 2"},
        {step_3: "Step 3"},
        {step_4: "Step 4"},
      ]);
};
