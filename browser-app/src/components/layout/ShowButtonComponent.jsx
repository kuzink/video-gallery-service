import React from "react";
import {Link} from "react-router-dom";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { usePromiseTracker } from "react-promise-tracker";

const ShowButtonComponent = () => {

	const { promiseInProgress } = usePromiseTracker();

	return (
		<div className={`custom-show-button-wrapper ${ promiseInProgress ? ' d-none' : ''}`}>
			<Link className="btn btn-lg btn-outline-light custom-show-button" to="/items">
				<span className="custom-show-arrow-wrapper-left"/>
				Watch videos
				<span className="custom-show-arrow-wrapper">
					<FontAwesomeIcon icon={faAngleRight} className="custom-show-arrow"/>
				</span>
			</Link>
		</div>
	)
};

export default ShowButtonComponent;
