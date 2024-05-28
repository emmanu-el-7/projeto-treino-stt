import React from 'react';
import './home.css';
import ProductsContainer from '../../components/ProductsContainer';

const Home = () => {
	return (
		<section id='home' className='home active'>
			<div className='container-fluid'>
				<div className='row'>
					<ProductsContainer />
				</div>
			</div>
		</section>
	);
};

export default Home;
