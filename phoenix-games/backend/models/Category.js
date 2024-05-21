const knex = require('../config/db');

const Category = {
	getAll: () => {
		return knex('categories').select('*');
	},
	getById: (id) => {
		return knex('categories').where({ id }).first();
	},
	create: (category) => {
		return knex('categories').insert(category).returning('*');
	},
	update: (id, category) => {
		return knex('categories').where({ id }).update(category).returning('*');
	},
	delete: (id) => {
		return knex('categories').where({ id }).del();
	},
};

module.exports = Category;
