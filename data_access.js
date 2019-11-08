const db = require('./data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes').where({ id }).first();
}

function getInstructions(id) {
    return db('recipes').where({ id }).first();
}