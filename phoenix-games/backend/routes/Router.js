const Hapi = require('@hapi/hapi');
const customerRoutes = require('./customerRoutes');
const paymentRoutes = require('./paymentRoutes');

const init = async () => {
	const server = Hapi.server({
		port: 3001,
		host: '0.0.0.0',
	});

	server.route(customerRoutes);
	server.route(paymentRoutes);

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'API funcionando!';
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
