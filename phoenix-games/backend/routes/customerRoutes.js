const customerController = require('./controllers/customersController');

module.exports = [
	{
		method: 'POST',
		path: '/register',
		handler: customerController.register,
	},
	{
		method: 'POST',
		path: '/login',
		handler: customerController.login,
	},
	{
		method: 'GET',
		path: '/me',
		handler: customerController.getCurrentCustomer,
		options: {
			auth: 'jwt',
		},
	},
	{
		method: 'PUT',
		path: '/update',
		handler: customerController.update,
		options: {
			auth: 'jwt',
		},
	},
	{
		method: 'GET',
		path: '/customer/{id}',
		handler: customerController.getCustomerById,
	},
	{
		method: 'GET',
		path: '/customers',
		handler: customerController.getAllCustomers,
	},
];
