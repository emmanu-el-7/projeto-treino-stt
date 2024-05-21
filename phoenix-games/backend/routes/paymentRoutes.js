const paymentController = require('../controllers/paymentController');

module.exports = [
	{
		method: 'GET',
		path: '/payments',
		handler: paymentController.listPayments,
	},
	{
		method: 'GET',
		path: '/payments/{id}',
		handler: paymentController.showPayment,
	},
	{
		method: 'POST',
		path: '/payments',
		handler: paymentController.createPayment,
	},
	{
		method: 'PUT',
		path: '/payments/{id}',
		handler: paymentController.updatePayment,
	},
	{
		method: 'DELETE',
		path: '/payments/{id}',
		handler: paymentController.deletePayment,
	},
];
