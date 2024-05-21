const knex = require('../config/db');

const Payment = {
	getAll: () => {
		return knex('payments').select('*');
	},
	getById: (id) => {
		return knex('payments').where({ id }).first();
	},
	create: (payment) => {
		const timestamp = new Date().toISOString();
		return knex('payments')
			.insert({
				...payment,
				created_at: timestamp,
				updated_at: timestamp,
			})
			.returning('*');
	},
	update: (id, payment) => {
		const timestamp = new Date().toISOString();
		return knex('payments')
			.where({ id })
			.update({
				...payment,
				updated_at: timestamp,
			})
			.returning('*');
	},
	delete: (id) => {
		return knex('payments').where({ id }).del();
	},
};

module.exports = Payment;
