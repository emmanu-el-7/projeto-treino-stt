import React, { useEffect, useState } from 'react';
import ProductSwiper from './ProductSwiper';
import productService from '../services/productService';

const ProductsContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await productService.getAllProducts();
				setProducts(data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1>Products</h1>
			<ProductSwiper products={products} />
		</div>
	);
};

export default ProductsContainer;
