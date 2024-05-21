const ProductModel = require('../models/productModel');

class ProductController {
	async listProducts(request, h) {
		try {
			const products = await ProductModel.getAll();
			return h.response(products).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async showProduct(request, h) {
		try {
			const product = await ProductModel.getById(request.params.id);
			if (!product) {
				return h.response({ error: 'Product not found' }).code(404);
			}
			return h.response(product).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async createProduct(request, h) {
		try {
			const newProduct = await ProductModel.create(request.payload);
			return h.response(newProduct).code(201);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async updateProduct(request, h) {
		try {
			const updatedProduct = await ProductModel.update(
				request.params.id,
				request.payload
			);
			if (!updatedProduct) {
				return h.response({ error: 'Product not found' }).code(404);
			}
			return h.response(updatedProduct).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}

	async deleteProduct(request, h) {
		try {
			const rowsDeleted = await ProductModel.delete(request.params.id);
			if (!rowsDeleted) {
				return h.response({ error: 'Product not found' }).code(404);
			}
			return h.response({ success: true }).code(200);
		} catch (error) {
			return h.response(error).code(500);
		}
	}
}

module.exports = new ProductController();
