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
			<React.Fragment key={slide.id}>
				<img className="custom-landing-slider-img" src={`data:image/jpeg;base64,${slide.bytes}`}/>
				<div className="custom-landing-slider-text-wrapper">
					<h1 className="custom-landing-slider-text">{slide.text}</h1>
				</div>
			</React.Fragment>
			)}
		</Slider>
	);
};

export default LandingSlider;