import React from "react";
import DefaultImage from "../../assets/defaultImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const ItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row">
					{items.map(item => (
					<div className="col-md-4">
						<div className="card mb-4 shadow-sm">
							<div className="custom-card-image">
								<img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="card-img-top"/>
								<div className="custom-mask flex-center" onClick={handleOnItemSelect.bind(this, item.id)}>
									<h1><FontAwesomeIcon icon={faPlay} className="text-white "/></h1>
								</div>
							</div>
							<div className="card-body px-3 py-2">
								<p className="card-text">{item.name}</p>
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
