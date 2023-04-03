import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const RequestSpinner = () => {

	const {promiseInProgress} = usePromiseTracker();
	// const promiseInProgress = true;

	return (
		<div className={`request-spinner-overlay ${promiseInProgress ? 'visible' : 'hidden'}`}
		     id="request-spinner-overlay-id">
			<div className="spinner-wrapper">
				<div className="request-spinner-div"/>
			</div>
		</div>
	);
};

export default RequestSpinner;