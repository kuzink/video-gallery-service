import React from "react";
import {Modal} from 'react-bootstrap';
import constants from '../../constants/Constants';

const ItemDetailsComponent = (props) => {

	const {itemDetails, handleCancel} = props;
	const isVisible = !!itemDetails.id;
	const {id} = itemDetails;

	return (
		<Modal id="item-details-modal"
		       show={isVisible}
		       onHide={handleCancel}
		       centered
		       animation={false}
		       dialogClassName="custom-modal"
		       scrollable>
			<Modal.Body>
				<video className="d-block" controls autoplay="1">
					<source src={constants.VIDEO_LINKS[id - 1]}/>
				</video>
			</Modal.Body>
		</Modal>
	);
};

export default ItemDetailsComponent;
