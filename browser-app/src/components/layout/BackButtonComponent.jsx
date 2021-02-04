import React from "react";
import {Link} from "react-router-dom";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BackButtonComponent = (props) => {

	const {classNames} = props;

	return (
		<div className={`${classNames ? classNames : ''}`}>
			<Link className="btn btn-secondary" to="/">
				<FontAwesomeIcon icon={faAngleLeft} className="mr-2"/>Back
			</Link>
		</div>
	);
};

export default BackButtonComponent;
