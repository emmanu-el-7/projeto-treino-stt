require('dotenv').config(); // Carrega as variáveis de ambiente

const Hapi = require('@hapi/hapi');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const customerRoutes = require('./routes/customerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const Jwt = require('@hapi/jwt');
const PORT = process.env.PORT || 3001;

const environment = process.env.NODE_ENV || 'development';
const db = Knex(knexConfig[environment]);

const init = async () => {
	const server = Hapi.server({
		port: PORT,
		host: 'localhost',
	});

	await server.register(Jwt);

	server.auth.strategy('jwt', 'jwt', {
		keys: process.env.JWT_SECRET,
		verify: {
			aud: false,
			iss: false,
			sub: false,
		},
		validate: (artifacts, request, h) => {
			const { id } = artifacts.decoded.payload;
			return {
				isValid: !!id,
				credentials: { id },
			};
		},
	});

	server.auth.default('jwt');

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
			options: {
				auth: false,
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
