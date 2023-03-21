import React from 'react';
import Slider from 'react-slick';

const LandingSlider = (props) => {

	const {slides} = props;

	const handleBeforeChange = (currentIndex, nextIndex) => {
		if (slides && slides.length > 0) {
			const currentImage = document.querySelector(`[data-index="${currentIndex}"]`)
				.getElementsByTagName('div')[0].getElementsByTagName('img')[0];
			const nextImage = document.querySelector(`[data-index="${nextIndex}"]`)
				.getElementsByTagName('div')[0].getElementsByTagName('img')[0];

			currentImage.style.animation = `zoom-${currentIndex % 5} 20s`;
			nextImage.style.animation = `zoom-${nextIndex % 5} 20s`;
		}
	};

	const handleAfterChange = (currentIndex) => {
		if (slides && slides.length > 0) {
			const previousImage = currentIndex !== 0
				? document.querySelector(`[data-index="${currentIndex - 1}"]`)
					.getElementsByTagName('div')[0].getElementsByTagName('img')[0]
				: document.querySelector(`[data-index="${slides.length - 1}"]`)
					.getElementsByTagName('div')[0].getElementsByTagName('img')[0];

			previousImage.style.animation = 'none';

			if (currentIndex === 1) {
				const lastImage = document.querySelector(`[data-index="5"]`);
				if (lastImage) {
					const el = lastImage
						.getElementsByTagName('div')[0]
						.getElementsByTagName('img')[0];

					lastImage.style.animation = 'none';
				}
			}
		}
	};

	const settings = {
		draggable: false,
		arrows: false,
		fade: true,
		infinite: true,
		pauseOnHover: false,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 6000,
		cssEase: "linear",
		beforeChange: handleBeforeChange,
		afterChange: handleAfterChange
	};

	return (
		<Slider {...settings}>
			{slides.map((slide, index) =>
			<React.Fragment key={index}>
				<img className="custom-landing-slider-img" alt="" src={`data:image/jpeg;base64,${slide.bytes}`}/>
				<div className="custom-landing-slider-text-wrapper">
					<h1 className="custom-landing-slider-text">{slide.title}</h1>
				</div>
			</React.Fragment>
			)}
		</Slider>
	);
};

export default LandingSlider;