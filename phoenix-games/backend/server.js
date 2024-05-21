const Hapi = require('@hapi/hapi');
const knex = require('knex');
const knexConfig = require('./knexfile');
const customerRoutes = require('./customerRoutes');
const paymentRoutes = require('./paymentRoutes');

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.app.db = db;

	server.route([
		...customerRoutes,
		...paymentRoutes,
		{
			method: 'GET',
			path: '/',
			handler: (request, h) => {
				return 'API funcionando!';
			},
		},
	]);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
