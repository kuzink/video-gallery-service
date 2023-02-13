import React from "react";
import {Modal} from 'react-bootstrap';
import constants from '../../../constants/Constants';

const ItemDetailsComponent = (props) => {

	const {itemName, handleCancel} = props;
	const isVisible = itemName !== '';

	return (
		<Modal id="item-details-modal"
		       show={isVisible}
		       onHide={handleCancel}
		       centered
		       animation={false}
		       dialogClassName="custom-modal"
		       scrollable>
			<Modal.Body>
				<video className="d-block" controls autoPlay="1">
					<source src={`${constants.BASE_URL}/videos/${itemName}.mp4`}/>
				</video>
			</Modal.Body>
		</Modal>
	);
};

export default ItemDetailsComponent;
