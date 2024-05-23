const Category = require('../models/Category');

const listCategories = async (request, h) => {
	try {
		const categories = await Category.getAll();
		return h.response(categories).code(200);
	} catch (error) {
		return h.response({ error: 'Erro ao buscar categorias' }).code(500);
	}
};

const showCategory = async (request, h) => {
	try {
		const category = await Category.getById(request.params.id);
		if (!category) {
			return h.response({ error: 'Categoria não encontrada' }).code(404);
		}
		return h.response(category).code(200);
	} catch (error) {
		return h.response({ error: 'Erro ao buscar categoria' }).code(500);
	}
};

const createCategory = async (request, h) => {
	try {
		const newCategory = await Category.create(request.payload);
		return h.response(newCategory).code(201);
	} catch (error) {
		return h.response({ error: 'Erro ao criar categoria' }).code(500);
	}
};

const updateCategory = async (request, h) => {
	try {
		const updatedCategory = await Category.update(
			request.params.id,
			request.payload
		);
		if (!updatedCategory) {
			return h.response({ error: 'Categoria não encontrada' }).code(404);
		}
		return h.response(updatedCategory).code(200);
	} catch (error) {
		return h.response({ error: 'Erro ao atualizar categoria' }).code(500);
	}
};

const deleteCategory = async (request, h) => {
	try {
		const rowsDeleted = await Category.delete(request.params.id);
		if (!rowsDeleted) {
			return h.response({ error: 'Categoria não encontrada' }).code(404);
		}
		return h.response({ success: true }).code(200);
	} catch (error) {
		return h.response({ error: 'Erro ao deletar categoria' }).code(500);
	}
};

module.exports = {
	listCategories,
	showCategory,
	createCategory,
	updateCategory,
	deleteCategory,
};
