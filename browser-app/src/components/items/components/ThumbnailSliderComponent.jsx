import React from 'react';
import Slider from 'react-slick';
import DefaultThumbnail from '../../../assets/img/thumbnail.gif';
import constants from "../../../constants/Constants";
import PlayIcon from '../../../assets/icons/play-circle.svg';

const ThumbnailSliderComponent = (props) => {

    const {item, handleOnItemSelect} = props;
    const {initialThumbnailId, initialThumbnailBytes, thumbnailIds} = item;

    const settings = {
        dots: true,
        speed: 300,
        draggable: false,
        arrows: false,
        fade: true,
        lazyLoad: true
    };

    return (
        <div className="custom-card-image">
            {thumbnailIds && thumbnailIds.length === 0 ?
			<img className="card-img-top" src={DefaultThumbnail} alt=""/> : thumbnailIds &&
			<Slider {...settings}>
				{thumbnailIds.map((thumbnailId, index) => {
					if (thumbnailId === initialThumbnailId) {
						return (
							<img key={index}
								 className="card-img-top"
								 src={`data:image/jpeg;base64,${initialThumbnailBytes}`} alt=""/>
						)
					} else {
						return (
							<img key={index}
								 className="card-img-top"
								 src={`${constants.BASE_URL}/thumbnails/${thumbnailId}/bytes`} alt=""/>
						)
					}
				})}
				{/*<img className="card-img-top" src={DefaultThumbnail} alt=""/>*/}
			</Slider>
            }
            <div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, item)}>
                <img src={PlayIcon} className="" alt=""/>
            </div>
        </div>
    );
};

export default ThumbnailSliderComponent;