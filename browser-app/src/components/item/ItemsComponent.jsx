import React from "react";
import DefaultImage from "../../assets/defaultImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import constants from '../../constants/Constants';

const ItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;
	/*const duplicates = [];

	const generateUniqueImageLink = () => constants.IMAGE_LINKS[getRandomIntNoDuplicates(0, 8, duplicates)] || DefaultImage;

	const getRandomIntNoDuplicates = (min, max, duplicates) => {
		const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

		if (duplicates.length > (max - min)) {
			return false;
		}

		if(!duplicates.includes(randomInt)) {
			duplicates.push(randomInt);
			return randomInt;
		}

		return getRandomIntNoDuplicates(min, max, duplicates);
	};*/

	const defineImageSrc = (itemName, imageName) => {
		return imageName ? `${constants.BASE_URL}/images/${itemName}/${imageName}` : DefaultImage;
	};

	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row">
					{items.map(item => (
					<div className="col-md-4">
						<div className="card mb-4 shadow-sm">
							<div className="custom-card-image">
								<img src={defineImageSrc(item.name, item.imageName)} className="card-img-top"/>
								<div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, item.name)}>
									<h1><FontAwesomeIcon icon={faPlay} className="text-white "/></h1>
								</div>
							</div>
							<div className="card-body px-3 py-2">
								<p className="card-text custom-card-text" title={item.name}>{item.name}</p>
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ItemsComponent;
