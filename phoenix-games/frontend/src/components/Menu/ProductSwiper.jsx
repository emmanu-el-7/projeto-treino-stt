import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './productswiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

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
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
			modules={[EffectCoverflow, Navigation, Autoplay]}
			className='productSwiper'
		>
			{products.map((product, index) => (
				<SwiperSlide key={index}>
					<div className='productSlider'>
						<img src={product.image} alt='Product Image' />
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
						<div className='content'>
							<h2>{product.name}</h2>
							<div className='buttons'>
								<a href='#' className='orderBtn'>
									Compre já!
								</a>
								<a
									href='#'
									className={`playBtn ${index === activeIndex ? 'active' : ''}`}
									onClick={() => handleToggleVideo(index)}
								>
									<span className='pause'>
										<i className='bi bi-pause-fill'></i>
									</span>
									<span className='play'>
										<i className='bi bi-play-fill'></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductSwiper;
