/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'pg',
		connection: {
			host: 'localhost',
			database: 'phoenix',
			user: 'admin',
			password: '33696549',
		},
	},
};
