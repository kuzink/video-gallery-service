import React from "react";
import {Link} from "react-router-dom";

const HomeButtonComponent = () => (
	<Link className="btn btn-primary" to="/">
		<i className="fa-regular fa-reply"/>Return Home
	</Link>
);

export default HomeButtonComponent;
