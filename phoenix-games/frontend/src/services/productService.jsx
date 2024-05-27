import { api, requestConfig } from '../utils/config';

const listProducts = async () => {
	const config = requestConfig('GET');
	try {
		const res = await fetch(api + '/products', config)
			.then((res) => res.json())
			.catch((err) => err);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const getProductDetails = async (id) => {
	const config = requestConfig('GET');
	try {
		const res = await fetch(api + '/products/' + id, config)
			.then((res) => res.json())
			.catch((err) => err);

		return res;
	} catch (error) {
		console.log(error);
	}
};

const createProduct = async (data, token) => {
	const config = requestConfig('POST', data, token);
	try {
		const res = await fetch(api + '/products', config)
			.then((res) => res.json())
			.catch((err) => err);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const updateProduct = async (id, data, token) => {
	const config = requestConfig('PUT', data, token);
	try {
		const res = await fetch(api + '/products/' + id, config)
			.then((res) => res.json())
			.catch((err) => err);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const deleteProduct = async (id, token) => {
	const config = requestConfig('DELETE', null, token);
	try {
		const res = await fetch(api + '/products/' + id, config)
			.then((res) => res.json())
			.catch((err) => err);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const productService = {
	listProducts,
	getProductDetails,
	createProduct,
	updateProduct,
	deleteProduct,
};

export default productService;
