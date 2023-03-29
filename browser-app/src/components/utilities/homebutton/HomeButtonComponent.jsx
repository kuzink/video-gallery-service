import React from "react";
import {Link} from "react-router-dom";

const HomeButtonComponent = () => (
	<Link className="btn btn-secondary custom-home-button" to="/">
		<i className="fa-solid fa-chevron-left"/>Return Home
	</Link>
);

export default HomeButtonComponent;
