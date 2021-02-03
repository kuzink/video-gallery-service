import React from 'react';
import BackButtonComponent from "../layout/BackButtonComponent";

const PageNotFoundComponent = () => (
	<div className="custom-items-wrapper d-flex align-items-center pb-5">
		<div className="container">
			<div className="row">
				<div className="col-6 mx-auto p-5 bg-white rounded shadow text-center">
					<h1 className="font-weight-light">Not found</h1>
					<p className="display-2 text-muted">404</p>
					<h5 className="font-weight-normal mb-4">This page does not exist or is temporarily unavailable</h5>
					<BackButtonComponent/>
				</div>
			</div>
		</div>
	</div>
);

export default PageNotFoundComponent;
