import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {

	const { promiseInProgress } = usePromiseTracker();

	return (
		promiseInProgress &&
		<div className="custom-spinner">
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
	    </div>
	);
};

export default LoadingSpinner;
