const { Model } = require('objection');

class Cart extends Model {
	static get tableName() {
		return 'cart';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['id_customer', 'products', 'total_value'],

			properties: {
				id: { type: 'integer' },
				id_customer: { type: 'integer' },
				products: { type: 'string', minLength: 1, maxLength: 255 },
				total_value: { type: 'string', minLength: 1, maxLength: 255 },
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

module.exports = Cart;
