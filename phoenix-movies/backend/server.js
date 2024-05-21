const Hapi = require('@hapi/hapi');
const customerRoutes = require('./routes/customerRoutes');
require('./config/db');

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.route(customerRoutes);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
