import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from "@fortawesome/free-solid-svg-icons/index";

const Icon = () =>
	<React.Fragment>
		<FontAwesomeIcon icon={faAngleUp} className="mr-2"/>Top
	</React.Fragment>
;

const ScrollTopButtonComponent = () => {

	const handleClick = () => {
		const element = document.getElementById('inner-id-for-scroll-top-button');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div id="custom-scroll-top-div" className="custom-scroll-top-div d-none">
			<button className="btn btn-secondary custom-scroll-top-button" onClick={handleClick}>
				<Icon/>
			</button>
		</div>
	);
};

export default ScrollTopButtonComponent;
