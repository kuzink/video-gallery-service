import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const Spinner = (props) => {

	const {isLoading, image} = props;
	const {promiseInProgress} = usePromiseTracker();
	const showSpinner = isLoading ? true : promiseInProgress;

	return (
		<div className={`spinner-overlay ${showSpinner ? 'loading' : 'loaded'}`}>
			<div className="spinner-wrapper">
				<div className="spinner-div"/>
				<img className="spinner-img" src={image}/>
			</div>
			<p className="spinner-text">Loading...</p>
		</div>
	);
};

export default Spinner;