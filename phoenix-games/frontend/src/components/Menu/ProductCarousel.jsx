import React, { useState } from 'react';
import {
	Button,
	IconButton,
	Card,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Carousel from 'react-material-ui-carousel';
import './productcarousel.css';

const ProductCarousel = ({ products }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggleVideo = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<Carousel>
			{products.map((product, index) => (
				<Card key={index} className='productSlider'>
					<CardMedia
						component='img'
						image={product.image}
						alt='Product Image'
					/>
					<div className={`video ${index === activeIndex ? 'active' : ''}`}>
						<iframe
							width='1280'
							height='720'
							src={product.trailer}
							title={product.name}
							allow='accelerometer; clipboard-white; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></iframe>
					</div>
					<CardContent className='content'>
						<Typography variant='h5' component='h2'>
							{product.name}
						</Typography>
						<div className='buttons'>
							<Button variant='contained' color='primary' href='#'>
								Compre já!
							</Button>
							<IconButton
								color='primary'
								className={`playBtn ${index === activeIndex ? 'active' : ''}`}
								onClick={() => handleToggleVideo(index)}
							>
								{index === activeIndex ? <PauseIcon /> : <PlayArrowIcon />}
							</IconButton>
						</div>
					</CardContent>
				</Card>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
