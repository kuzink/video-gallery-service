import React from 'react';
import {Link} from "react-router-dom";

const PageNotFoundComponent = () => (
	<div className="custom-offset">
		<div className="custom-items-wrapper d-flex align-items-center pb-5">
			<div className="container">
				<div className="row">
					<div className="col-6 mx-auto p-5 bg-light rounded shadow text-center">
						<h1 className="font-weight-light">Not found</h1>
						<p className="display-2 text-muted">404</p>
						<h5 className="font-weight-normal mb-4 ">This page does not exist or is temporarily unavailable.</h5>
						<Link className="btn btn-secondary" to="/">Back to home page</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default PageNotFoundComponent;