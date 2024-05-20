const { Model } = require('objection');

class Payment extends Model {
	static get tableName() {
		return 'payments';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['id_order', 'method', 'value', 'status'],

			properties: {
				id: { type: 'integer' },
				id_order: { type: 'integer' },
				method: { type: 'string', minLength: 1, maxLength: 255 },
				value: { type: 'string', minLength: 6, maxLength: 255 },
				status: { type: 'string', maxLength: 255 },
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

module.exports = Payment;
