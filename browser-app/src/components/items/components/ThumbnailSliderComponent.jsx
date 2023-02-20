import React from 'react';
import Slider from 'react-slick';
import DefaultThumbnail from '../../../assets/320x180.gif';
import constants from "../../../constants/Constants";
import PlayIcon from '../../../assets/play-circle.svg';

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
			<img className="card-img-top" src={DefaultThumbnail}/> : thumbnailNames &&
			<Slider {...settings}>
				{/*{thumbnailNames.map((thumbnailName, index) => {*/}
						{/*if (index === initialThumbnailIndex) {*/}
							{/*return (*/}
								{/*<img key={index}*/}
								     {/*className="card-img-top"*/}
								     {/*src={`data:image/jpeg;base64,${initialThumbnail}`}/>*/}
							{/*)*/}
						{/*} else {*/}
							{/*return (*/}
								{/*<img key={index}*/}
								     {/*className="card-img-top"*/}
								     {/*src={`${constants.BASE_URL}/items/${itemId}/thumbnails/${thumbnailName}`}/>*/}
							{/*)*/}
						{/*}*/}
					{/*}*/}

				{/*)}*/}
				{thumbnailNames.map((thumbnailName, index) => {
						if (index === initialThumbnailIndex) {
							return (
								<img className="card-img-top" src={DefaultThumbnail}/>
							)
						} else {
							return (
								<img className="card-img-top" src={DefaultThumbnail}/>
							)
						}
					}

				)}
			</Slider>
			}
			<div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, itemName)}>
				<h1 className="mb-0"><img src={PlayIcon} className="text-white"/></h1>
			</div>
		</div>
	);
};

export default ImageSlider;