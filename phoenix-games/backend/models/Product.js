const knex = require('../config/db');

const Product = {
	getAll: () => {
		return knex('products').select('*');
	},
	getById: (id) => {
		return knex('products').where({ id }).first();
	},
	create: (product) => {
		return knex('products').insert(product).returning('*');
	},
	update: (id, product) => {
		return knex('products').where({ id }).update(product).returning('*');
	},
	delete: (id) => {
		return knex('products').where({ id }).del();
	},
};

module.exports = Product;
