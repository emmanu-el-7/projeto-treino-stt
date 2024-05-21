const Payment = require('../models/Payment');

class PaymentController {
	async listPayments(request, h) {
		try {
			const payments = await Payment.getAll();
			return h.response(payments).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async showPayment(request, h) {
		try {
			const payment = await Payment.getById(request.params.id);
			if (!payment) {
				return h.response({ error: 'Payment not found' }).code(404);
			}
			return h.response(payment).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async createPayment(request, h) {
		try {
			const newPayment = await Payment.create(request.payload);
			return h.response(newPayment).code(201);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async updatePayment(request, h) {
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
	}

	async deletePayment(request, h) {
		try {
			const rowsDeleted = await Payment.delete(request.params.id);
			if (!rowsDeleted) {
				return h.response({ error: 'Payment not found' }).code(404);
			}
			return h.response({ success: true }).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}
}  

module.exports = new PaymentController();
