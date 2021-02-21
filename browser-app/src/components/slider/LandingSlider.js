import React from 'react';
import Slider from 'react-slick';

const LandingSlider = (props) => {

	const {slides} = props;

	const settings = {
		draggable: false,
		arrows: false,
		fade: true,
		infinite: true,
		pauseOnHover: false,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 6000,
		cssEase: "linear"
	};

	return (
		<Slider {...settings}>
			{slides.map(slide =>
			<img key={slide.id} className="custom-landing-slider-img" src={`data:image/jpeg;base64,${slide.bytes}`}/>)
			}
		</Slider>
	);
};

export default LandingSlider;