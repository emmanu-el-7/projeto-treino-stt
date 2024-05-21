const Hapi = require('@hapi/hapi');
const paymentRoutes = require('./routes/paymentRoutes');
require('./config/db');

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.route(paymentRoutes);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
