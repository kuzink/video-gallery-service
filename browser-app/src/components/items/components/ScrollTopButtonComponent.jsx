import React from "react";
import ScrollTop from "react-scrolltop-button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from "@fortawesome/free-solid-svg-icons/index";

const Icon = () =>
	<React.Fragment>
		<FontAwesomeIcon icon={faAngleUp} className="mr-2"/>Top
	</React.Fragment>
;

const ScrollTopButtonComponent = () =>
	<ScrollTop distance={100}
	           target={0}
	           breakpoint={1921}
	           speed={250}
	           className="custom-scroll-top-button"
	           icon={<Icon/>}/>
;

export default ScrollTopButtonComponent;
