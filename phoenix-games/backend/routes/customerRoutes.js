const customerController = require('../controllers/customerController');

module.exports = [
	{
		method: 'GET',
		path: '/customers',
		handler: customerController.listCustomer,
	},
	{
		method: 'GET',
		path: '/customers/{id}',
		handler: customerController.showCustomer,
	},
	{
		method: 'POST',
		path: '/customers',
		handler: customerController.createCustomer,
	},
	{
		method: 'PUT',
		path: '/customers/{id}',
		handler: customerController.updateCustomer,
	},
	{
		method: 'DELETE',
		path: '/customers/{id}',
		handler: customerController.deleteCustomer,
	},
];
