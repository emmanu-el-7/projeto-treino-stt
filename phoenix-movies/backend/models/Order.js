const { Model } = require('objection');

class Order extends Model {
	static get tableName() {
		return 'orders';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['id_customer', 'address', 'status', 'total_value', 'products'],

			properties: {
				id: { type: 'integer' },
				id_customer: { type: 'integer' },
				address: { type: 'string', minLength: 1, maxLength: 255 },
				status: { type: 'string', minLength: 1, maxLength: 255 },
				total_value: { type: 'string', minLength: 6, maxLength: 255 },
				products: { type: 'string', maxLength: 255 },
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

module.exports = Order;
