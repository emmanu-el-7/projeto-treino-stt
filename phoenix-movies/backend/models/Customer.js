const { Model } = require('objection');

class Customer extends Model {
	static get tableName() {
		return 'customers';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name', 'email', 'password', 'address'],

			properties: {
				id: { type: 'integer' },
				name: { type: 'string', minLength: 4, maxLength: 255 },
				email: { type: 'string', minLength: 1, maxLength: 255 },
				password: { type: 'string', minLength: 6, maxLength: 255 },
				address: { type: 'string', minLength: 1, maxLength: 255 },
				profileImage: { type: 'string', maxLength: 255 },
			},
		};
	}

	$beforeInsert() {
		this.created_at = new Date().toISOString();
		this.updated_at = new Date().toISOString();
	}

	$beforeUpdate() {
		this.updated_at = new Date().toISOString();
	}
}

module.exports = Customer;
