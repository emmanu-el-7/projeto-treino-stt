const customerController = require('../controllers/customerController');

module.exports = [
	{
		method: 'GET',
		path: '/customers',
		handler: customerController.getAllCustomers,
	},
	{
		method: 'POST',
		path: '/customers/register',
		handler: customerController.register,
	},
	{
		method: 'POST',
		path: '/customers/login',
		handler: customerController.login,
	},
	{
		method: 'GET',
		path: '/customers/me',
		handler: customerController.getCurrentCustomer,
	},
	{
		method: 'PUT',
		path: '/customers/update',
		handler: customerController.update,
	},
	{
		method: 'GET',
		path: '/customers/{id}',
		handler: customerController.getCustomerById,
	},
];
