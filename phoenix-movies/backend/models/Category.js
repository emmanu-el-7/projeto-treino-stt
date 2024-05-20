const { Model } = require('objection');

class Category extends Model {
	static get tableName() {
		return 'categories';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name', 'description'],

			properties: {
				id: { type: 'integer' },
				name: { type: 'string', minLength: 4, maxLength: 255 },
				description: { type: 'string', minLength: 1, maxLength: 255 },
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

module.exports = Category;