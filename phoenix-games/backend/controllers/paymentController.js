const Payment = require('../models/Payment');

const listPayments = async (request, h) => {
	try {
		const payments = await Payment.getAll();
		return h.response(payments).code(200);
	} catch (error) {
		return h.response(error).code(500);
	}
};

const showPayment = async (request, h) => {
	try {
		const payment = await Payment.getById(request.params.id);
		if (!payment) {
			return h.response({ error: 'Payment not found' }).code(404);
		}
		return h.response(payment).code(200);
	} catch (error) {
		return h.response(error).code(500);
	}
};

const createPayment = async (request, h) => {
	try {
		const newPayment = await Payment.create(request.payload);
		return h.response(newPayment).code(201);
	} catch (error) {
		return h.response(error).code(500);
	}
};

const updatePayment = async (request, h) => {
	try {
		const updatedPayment = await Payment.update(
			request.params.id,
			request.payload
		);
		if (!updatedPayment) {
			return h.response({ error: 'Payment not found' }).code(404);
		}
		return h.response(updatedPayment).code(200);
	} catch (error) {
		return h.response(error).code(500);
	}
};

const deletePayment = async (request, h) => {
	try {
		const rowsDeleted = await Payment.delete(request.params.id);
		if (!rowsDeleted) {
			return h.response({ error: 'Payment not found' }).code(404);
		}
		return h.response({ success: true }).code(200);
	} catch (error) {
		return h.response(error).code(500);
	}
};

module.exports = {
	listPayments,
	showPayment,
	createPayment,
	updatePayment,
	deletePayment,
};
