import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './productSwiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

const ProductSwiper = ({ products }) => {
	const [active, setActive] = useState(false);

	const handleToggleVideo = () => {
		setActive(!active);
	};

	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			navigation={true}
			loop={true}
			centeredSlides={true}
			slidesPerView={'auto'}
			coverflowEffect={{
				rotate: 35,
				stretch: 200,
				depth: 250,
				modifier: 1,
				slideShadows: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[EffectCoverflow, Navigation, Autoplay]}
			className='productSwiper'
		>
			{products.map((product) => (
				<SwiperSlide key={product.id}>
					<div className='productSlider'>
						<img src={product.image} alt='Product Image' />
						<div className='content'>
							<h2>{product.name}</h2>
							<p>{product.description}</p>
							<div className='buttons'>
								<a href='#' className='orderBtn'>
									Order Now
								</a>
								<a
									href='#'
									className={`playBtn ${active ? 'active' : ''}`}
									onClick={handleToggleVideo}
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
