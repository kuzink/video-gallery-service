import React from 'react';
import BackButtonComponent from "../items/components/BackButtonComponent";

const NotFoundComponent = () => (
	<div className="custom-not-found-wrapper d-flex align-items-center pb-5">
		<div className="container">
			<div className="row">
				<div className="col-4 mx-auto p-5 bg-white rounded shadow text-center">
					<h1 className="font-weight-light">Not found</h1>
					<p className="display-2 text-muted">404</p>
					<h5 className="font-weight-normal mb-5">This page does not exist<br/>or is temporarily unavailable</h5>
					<BackButtonComponent/>
				</div>
			</div>
		</div>
	</div>
);

export default NotFoundComponent;
