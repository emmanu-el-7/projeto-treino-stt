import React from 'react';
import './productCard.css';
import ProductRating from './ProductRating';

const ProductCard = ({ product }) => {
	return (
		<div className='col-xl-3 col-lg-4 col-md-6'>
			<img src={product.image} alt={product.name} className='img-fluid' />
			<div className='bag'>
				<a href='#' className='addBag'>
					<i className='bi bi-bag-plus-fill'></i>
				</a>
				<a href='#'>
					<i className='bi bi-heart-fill'></i>
				</a>
			</div>
			<div className='productFeature'>
				<h1 className='product-name'>{product.name}</h1>
				<ProductRating rating={product.rating} />
				<span className='product-price'>{product.price}</span>
			</div>
		</div>
	);
};

export default ProductCard;
