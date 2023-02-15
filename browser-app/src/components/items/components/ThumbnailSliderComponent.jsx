import React from 'react';
import Slider from 'react-slick';
import DefaultThumbnail from '../../../assets/defaultThumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import constants from "../../../constants/Constants";

const ImageSlider = (props) => {

	const {
		itemId,
		itemName,
		initialThumbnail,
		thumbnailNames,
		handleOnItemSelect,
		initialThumbnailIndex
	} = props;

	const settings = {
		dots: true,
		speed: 300,
		draggable: false,
		arrows: false,
		fade: true,
		lazyLoad: true,
		initialSlide: initialThumbnailIndex
	};

	return (
		<div className="custom-card-image">
			{thumbnailNames && thumbnailNames.length === 0 ?
			<img className="card-img" src={DefaultThumbnail}/> : thumbnailNames &&
			<Slider {...settings}>
				{thumbnailNames.map((thumbnailName, index) => {
						if (index === initialThumbnailIndex) {
							return (
								<img key={index}
								     className="card-img"
								     src={`data:image/jpeg;base64,${initialThumbnail}`}/>
							)
						} else {
							return (
								<img key={index}
								     className="card-img"
								     src={`${constants.BASE_URL}/items/${itemId}/thumbnails/${thumbnailName}`}/>
							)
						}
					}

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