import React from 'react';
import Slider from 'react-slick';
import DefaultImage from '../../assets/defaultImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = (props) => {

	const {itemName, images, handleOnItemSelect} = props;
	const settings = {
		dots: true,
		speed: 300,
		draggable: false,
		arrows: false,
		fade: true,
	};

	return (
		<div className="custom-card-image">
			{images && images.length === 0 ?
				<img className="card-img-top" src={DefaultImage}/> : images &&
				<Slider {...settings}>
					{images.map(image =>
						<img className="card-img-top" src={`data:image/jpeg;base64,${image}`}/>
					)}
				</Slider>
			}
			<div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, itemName)}>
				<h1><FontAwesomeIcon icon={faPlay} className="text-white"/></h1>
			</div>
		</div>
	);
};

export default ImageSlider;