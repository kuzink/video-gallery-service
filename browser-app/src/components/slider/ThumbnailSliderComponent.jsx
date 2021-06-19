import React from 'react';
import Slider from 'react-slick';
import DefaultThumbnail from '../../assets/defaultThumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = (props) => {

	const {itemName, thumbnails, handleOnItemSelect} = props;

	const settings = {
		dots: true,
		speed: 300,
		draggable: false,
		arrows: false,
		fade: true,
	};

	return (
		<div className="custom-card-image">
			{thumbnails && thumbnails.length === 0 ?
			<img className="card-img-top" src={DefaultThumbnail}/> : thumbnails &&
			<Slider {...settings}>
				{thumbnails.map((thumbnail, index) =>
				<img key={index} className="card-img-top" src={`data:image/jpeg;base64,${thumbnail}`}/>
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