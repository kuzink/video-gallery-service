import React from 'react';
import HomeButtonComponent from "../utilities/homebutton/HomeButtonComponent";

const NotFoundComponent = () => (
	<div className="not-found-overlay">
		<div className="not-found-wrapper">
			<div className="not-found-header">
				<h4>Video Gallery</h4>
			</div>
			<div className="not-found-body">
				<h1>Not found</h1>
				<p>404</p>
				<h5>This page does not exist<br/>or is temporarily unavailable</h5>
				<HomeButtonComponent/>
			</div>
		</div>
	</div>
);

export default NotFoundComponent;
