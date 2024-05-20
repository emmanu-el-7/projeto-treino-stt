const { Model } = require('objection');

class Product extends Model {
	static get tableName() {
		return 'products';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name', 'description', 'price', 'category'],

			properties: {
				id: { type: 'integer' },
				name: { type: 'string', minLength: 4, maxLength: 255 },
				description: { type: 'string', minLength: 1, maxLength: 255 },
				price: { type: 'string', minLength: 1, maxLength: 255 },
				category: { type: 'string', minLength: 1, maxLength: 255 },
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

module.exports = Product;
