import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loading from '../../assets/loading.gif';

const LoadingSpinner = () => {

	const { promiseInProgress } = usePromiseTracker();

	return (
		<div className={`custom-spinner ${ promiseInProgress ? ' in-progress' : ' '}`}>
			<img src={Loading}/>
	    </div>
	);
};

export default LoadingSpinner;
