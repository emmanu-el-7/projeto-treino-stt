const knex = require('../config/db');

const Customer = {
	getAll: () => {
		return knex('customers').select('*');
	},
	getById: (id) => {
		return knex('customers').where({ id }).first();
	},
	create: (customer) => {
		return knex('customers').insert(customer).returning('*');
	},
	update: (id, customer) => {
		return knex('customers').where({ id }).update(customer).returning('*');
	},
	delete: (id) => {
		return knex('customers').where({ id }).del();
	},
};

module.exports = Customer;