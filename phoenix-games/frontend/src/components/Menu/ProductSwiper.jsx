import React, { useState } from 'react';
import {
	Box,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	IconButton,
} from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { Carousel } from 'react-material-ui-carousel';
import './productswiper.css';

const ProductSwiper = ({ products }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggleVideo = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<Carousel
			animation='slide'
			indicators={false}
			autoPlay={true}
			navButtonsAlwaysVisible={true}
		>
			{products.map((product, index) => (
				<Box
					key={index}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Card
						className='productSlider'
						sx={{
							width: '55vh',
							height: '40vh',
							position: 'relative',
							overflow: 'hidden',
							borderRadius: 2,
						}}
					>
						<CardMedia
							component='img'
							image={product.image}
							alt='Product Image'
							sx={{ height: '100%', objectFit: 'cover' }}
						/>
						<Box
							className={`video ${index === activeIndex ? 'active' : ''}`}
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								display: index === activeIndex ? 'block' : 'none',
							}}
						>
							<iframe
								width='1280'
								height='720'
								src={product.trailer}
								title={product.name}
								allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								style={{ width: '100%', height: '100%' }}
							></iframe>
						</Box>
						<CardContent
							className='content'
							sx={{
								position: 'absolute',
								bottom: 20,
								width: '60%',
								zIndex: 1000,
							}}
						>
							<Typography variant='h5' component='h2'>
								{product.name}
							</Typography>
							<Box
								className='buttons'
								sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
							>
								<Button variant='contained' color='secondary'>
									Compre já!
								</Button>
								<IconButton
									color='primary'
									className={`playBtn ${index === activeIndex ? 'active' : ''}`}
									onClick={() => handleToggleVideo(index)}
								>
									{index === activeIndex ? <Pause /> : <PlayArrow />}
								</IconButton>
							</Box>
						</CardContent>
					</Card>
				</Box>
			))}
		</Carousel>
	);
};

export default ProductSwiper;
