import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './productswiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
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

const ProductSwiper = ({ products }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggleVideo = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			navigation={true}
			loop={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			spaceBetween={0}
			coverflowEffect={{
				rotate: 35,
				stretch: 0,
				depth: 250,
				modifier: 1,
				slideShadows: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true,
			}}
			modules={[EffectCoverflow, Navigation, Autoplay]}
			className='productSwiper'
		>
			{products.map((product, index) => (
				<SwiperSlide key={index}>
					<Card className='productSlider'>
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
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductSwiper;
