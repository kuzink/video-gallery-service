import React from "react";
import {Link} from "react-router-dom";

const ShowButtonComponent = () => (
	<div className="custom-show-button-wrapper">
		<Link className="btn btn-lg btn-outline-light custom-show-button" to="/videos">
			<span className="custom-show-arrow-wrapper-left"/>
			Watch videos
			<span className="custom-show-arrow-wrapper">
				<i className="fa-solid fa-angles-right custom-show-arrow"/>
			</span>
		</Link>
	</div>
);

export default ShowButtonComponent;
