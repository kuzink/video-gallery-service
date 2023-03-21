import React, { useState, useEffect } from "react";
import {Modal} from 'react-bootstrap';
import constants from '../../../constants/Constants';

const ItemDetailsComponent = (props) => {

	const {selectedItem, handleCancel} = props;
	const id = selectedItem !== null ? selectedItem.id : '';
	const isVisible = selectedItem !== null;
	const [show, setShow] = useState(false);
	const [source, setSource] = useState('');

	useEffect(() => {
		if (isVisible) {
			setSource(`${constants.BASE_URL}/videos/${id}`);
			setTimeout(() => {
				setShow(true);
			}, 400);
		} else {
			setShow(false);
			setSource('');
		}
	});

	return (
		<Modal id="item-details-modal"
		       show={isVisible}
		       onHide={handleCancel}
		       centered
		       dialogClassName="custom-modal"
		       scrollable>
			<Modal.Body>
				<video className={`${show ? 'visible' : 'hidden'}`} src={source} controls autoPlay/>
			</Modal.Body>
		</Modal>
	);
};

export default ItemDetailsComponent;
