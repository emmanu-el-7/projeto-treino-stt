require('dotenv').config();

const Hapi = require('@hapi/hapi');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const PORT = process.env.PORT || 3001;

const environment = process.env.NODE_ENV || 'development';
const db = Knex(knexConfig[environment]);

const init = async () => {
	const server = Hapi.server({
		port: PORT,
		host: '0.0.0.0',
	});

	server.route(customerRoutes);
	server.route(productRoutes);

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'API funcionando!';
		},
	});

	server.route({
		method: 'GET',
		path: '/api/products',
		handler: (productRoutes) => {
			return { listProducts };
		},
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
