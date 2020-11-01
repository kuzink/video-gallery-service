import React from "react";
import {Modal} from 'react-bootstrap';

const ItemDetailsComponent = (props) => {

	const {itemDetails, handleCancel} = props;
	const isVisible = !!itemDetails.id;
	const {id} = itemDetails;
	const src = id === 1 ? "https://mdbootstrap.com/img/video/forest.mp4" :
		        id === 2 ? "https://mdbootstrap.com/img/video/Tropical.mp4" :
		        id === 3 ? "https://mdbootstrap.com/img/video/Agua-natural.mp4" : null;

	return (
		<Modal id="item-details-modal"
		       show={isVisible}
		       onHide={handleCancel}
		       centered
		       dialogClassName="custom-modal"
		       scrollable>
			<Modal.Body>
				<video className="d-block" controls autoplay="1">
					<source src={src}/>
				</video>
			</Modal.Body>
		</Modal>
	);
};

export default ItemDetailsComponent;
