import React from 'react';
import Slider from 'react-slick';
import DefaultThumbnail from '../../../assets/320x180.gif';
// import DefaultThumbnail from '../../../assets/defaultThumbnail.jpg';
import constants from "../../../constants/Constants";
import PlayIcon from '../../../assets/play-circle.svg';

const ImageSlider = (props) => {

	const {selectedItem, handleOnItemSelect} = props;
	const {id, initialThumbnail, thumbnailNames, initialThumbnailIndex} = selectedItem;

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
				{thumbnailNames.map((thumbnailName, index) => {
						if (index === initialThumbnailIndex) {
							return (
								<img key={index}
								     className="card-img-top"
								     src={`data:image/jpeg;base64,${initialThumbnail}`}/>
							)
						} else {
							return (
								<img key={index}
								     className="card-img-top"
								     src={`${constants.BASE_URL}/items/${id}/thumbnails/${thumbnailName}`}/>
							)
						}
					}

				)}
				{/*{thumbnailNames.map((thumbnailName, index) => {*/}
						{/*if (index === initialThumbnailIndex) {*/}
							{/*return (*/}
								{/*<img className="card-img-top" src={DefaultThumbnail}/>*/}
							{/*)*/}
						{/*} else {*/}
							{/*return (*/}
								{/*<img className="card-img-top" src={DefaultThumbnail}/>*/}
							{/*)*/}
						{/*}*/}
					{/*}*/}

				{/*)}*/}
			</Slider>
			}
			<div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, selectedItem)}>
				<h1 className="mb-0"><img src={PlayIcon} className="text-white"/></h1>
			</div>
		</div>
	);
};

export default ImageSlider;