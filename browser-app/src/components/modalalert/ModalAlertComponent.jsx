import React from 'react';
import {Alert, Button, Modal} from 'react-bootstrap';

const formatAlertText = (alertText) => <p><strong className='modal-alert-message'>{alertText}</strong></p>;

const ModalAlertComponent = (props) => {

	const {onHideAlertPanel, alertText, alertVisible, alertStyle} = props;
	return(
		<Modal id='alerts-dialog'
		       show={alertVisible}
		       onHide={onHideAlertPanel}
		       backdrop='static'
		       centered>

			<Modal.Body className='modal-alert-body'>
				<Alert variant={alertStyle}>
					{formatAlertText(alertText)}
					<div className='mt-4'>
						<Button variant={alertStyle} onClick={onHideAlertPanel}>Close</Button>
					</div>
				</Alert>
			</Modal.Body>

		</Modal>
	);
};

export default ModalAlertComponent;

