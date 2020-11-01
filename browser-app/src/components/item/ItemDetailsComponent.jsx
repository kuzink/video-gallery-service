import React from "react";
import {Modal} from 'react-bootstrap';

const ItemDetailsComponent = (props) => {

	const {itemDetails, handleCancel} = props;
	const isVisible = !!itemDetails.id;

	return (
		<Modal id="item-details-modal"
		       show={isVisible}
		       onHide={handleCancel}
		       centered
		       dialogClassName="custom-modal"
		       scrollable>
			<Modal.Body>
				<video className="d-block" controls autoplay="1">
					<source src="https://mdbootstrap.com/img/video/Tropical.mp4"/>
				</video>
			</Modal.Body>
		</Modal>
	);
};

export default ItemDetailsComponent;
